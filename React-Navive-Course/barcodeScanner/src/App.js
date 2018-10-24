import React, { Component } from 'react';
import { View, PermissionsAndroid, Alert, Vibration } from 'react-native';
import BarcodeScanner, {
       Exception, FocusMode,
       CameraFillMode, FlashMode, BarcodeType
} from 'react-native-barcode-scanner-google';
import { PlaySound } from 'react-native-play-sound';
import RNExitApp from 'react-native-exit-app';
import { Header, Card, CardSection, Input, Button } from './components/common';

class App extends Component {
  state = { cameraOn: false,
    orderBcValue: '',
    itemBcValue: '',
    type: '',
    orderStyle: 'black',
    itemStyle: 'black'
  };

   componentWillMount() {
     this.requestCameraPermission();
   }

   onButtonPress() {
     this.setState({ cameraOn: false });
   }

  async requestCameraPermission() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the camera');
      } else {
        Alert.alert('Barcode Scanner app cannot work correctly without' +
        'camera permission, therefore will be closed now.');
        RNExitApp.exitApp();
      }
    } catch (err) {
      console.warn(err);
    }
  }

  checkBC(dataToCheck, str) {
    let result = true;
    let testingValue = /^\d{5}$/g;
    if (str === 'order') {
      testingValue = /^[a-zA-Z0-9]{8}$/g;
    }
    if (!testingValue.test(dataToCheck)) {
      result = false;
    }
    return result;
  }

  feedback() {
    PlaySound('warning');
    Vibration.vibrate(1000);
  }

  renderContent() {
    switch (this.state.cameraOn) {
      case true:
        return (
          <View style={{ flex: 1 }}>
          <BarcodeScanner
              style={{ flex: 1 }}
              onBarcodeRead={({ data }) => {
                  if (this.state.type === 'order') {
                    this.setState({ orderBcValue: data });
                    const result = this.checkBC(data, this.state.type);
                    if (result) {
                      this.setState({ orderStyle: 'green' });
                    } else {
                      this.setState({ orderStyle: 'red' });
                      this.feedback();
                    }
                  } else {
                    this.setState({ itemBcValue: data });
                    const result = this.checkBC(data, this.state.type);
                    if (result) {
                      this.setState({ itemStyle: 'green' });
                    } else {
                      this.setState({ itemStyle: 'red' });
                      this.feedback();
                    }
                  }
                  this.setState({ cameraOn: false });
              }}
              onException={exceptionKey => {
                  switch (exceptionKey) {
                      case Exception.NO_PLAY_SERVICES:
                        Alert.alert('For the correct behavior of the Barcode ' +
                        'Scanner app you have to update Google Play Store first.');
                      break;
                      case Exception.LOW_STORAGE:
                        Alert.alert('No enough space. For the correct behavior ' +
                        'of the Barcode Scanner app you have to have enough space first.');
                      break;
                      default: break;
                  }
              }}
              focusMode={FocusMode.TAP}
              cameraFillMode={CameraFillMode.COVER}
              barcodeType={BarcodeType.ALL}
              FlashMode={FlashMode.TORCH}
          />
          <CardSection>
            <Button onPress={this.onButtonPress.bind(this)}>Back</Button>
          </CardSection>
        </View>
        );
      case false:
      return (
        <Card>
          <CardSection>
            <Input
              style={{
                color: this.state.orderStyle,
                height: 40,
                borderWidth: 2,
                paddingLeft: 10
              }}
              onFocus={() => {
                this.setState({ type: 'order' });
                this.setState({ cameraOn: !this.cameraOn });
              }}
                placeholder="Input Field"
                label={'Order:'}
                value={this.state.orderBcValue}
            />
          </CardSection>
          <CardSection>
            <Input
            style={{
              color: this.state.itemStyle,
              height: 40,
              borderWidth: 2,
              paddingLeft: 10
            }}
              onFocus={() => {
                this.setState({ type: 'item' });
                this.setState({ cameraOn: !this.cameraOn });
              }}
                placeholder="Input Field"
                label={'Item:'}
                value={this.state.itemBcValue}
            />
          </CardSection>
        </Card>
      );
      default: break;
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText="Concircle Scanner App" />
        {this.renderContent()}
      </View>);
    }
  }

export default App;

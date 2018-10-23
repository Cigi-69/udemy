import React, { Component } from 'react';
import { View, Text, PermissionsAndroid } from 'react-native';
import BarcodeScanner, {
       Exception, FocusMode,
       CameraFillMode, FlashMode, BarcodeType
} from 'react-native-barcode-scanner-google';
import { Header, Card, CardSection, Input, Button } from './components/common';

class App extends Component {
  state = { cameraOn: false, orderBcValue: '', itemBcValue: '', type: '' };
   componentWillMount() {
     this.requestCameraPermission();
   }

   onButtonPress() {
     this.setState({ cameraOn: false });
   }

  async requestCameraPermission() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Cool Photo App Camera Permission',
          message: 'Cool Photo App needs access to your camera ' +
          'so you can take awesome pictures.'
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the camera');
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
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
                  } else {
                    this.setState({ itemBcValue: data });
                  }
                  this.setState({ cameraOn: false });
              }}
              onException={exceptionKey => {
                  switch (exceptionKey) {
                      case Exception.NO_PLAY_SERVICES:
                      break;
                      case Exception.LOW_STORAGE:
                      break;
                      case Exception.NOT_OPERATIONAL:
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
      default:
        return (
          <Text>Nic</Text>
        );
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

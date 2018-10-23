import React, { Component } from 'react';
import { View, Alert } from 'react-native';
import BarcodeScanner, {
       Exception, FocusMode,
       CameraFillMode, FlashMode, BarcodeType
} from 'react-native-barcode-scanner-google';
import { Button, CardSection } from './common';

class BarcodeApp extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
      <BarcodeScanner
          style={{ flex: 1 }}
          onBarcodeRead={({ data, type }) => {
              Alert.alert(`Barcode '${data}' of type '${type}' was scanned.`);
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
        <Button>SCAN</Button>
      </CardSection>
    </View>
    );
  }
}

export default BarcodeApp;

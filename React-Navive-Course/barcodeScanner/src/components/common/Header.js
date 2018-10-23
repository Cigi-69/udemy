import React from 'react';
import { Text, View } from 'react-native';


const Header = ({ headerText }) => {
  const { textStyle, viewStyle } = styles;
  return (
      <View style={viewStyle}>
        <Text style={textStyle}>{headerText}</Text>
      </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#f8f8f8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    padding: 5,
    elevation: 6
  },
  textStyle: {
    fontSize: 20
  }
};

export { Header };

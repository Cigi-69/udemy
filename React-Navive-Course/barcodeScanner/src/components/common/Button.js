import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
  const { viewStyle, buttonsStyle, textStyle } = styles;
  return (
    <View style={viewStyle}>
    <TouchableOpacity onPress={onPress} style={buttonsStyle}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
    </View>
  );
};

const styles = {
  viewStyle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonsStyle: {
    width: 100,
    backgroundColor: '#fff',
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  }
};

export { Button };

import React from 'react';
import { View, Text, TextInput } from 'react-native';

const Input = ({ label, value, placeholder, onFocus, style }) => {
  const { containerStyle, labelStyle } = styles;
  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        onFocus={onFocus}
        style={style}
        value={value}
        placeholder={placeholder}
      />
    </View>
  );
};

const styles = {
  containerStyle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch'
  },
  labelStyle: {
    fontSize: 16,
    paddingLeft: 4,
    width: 100
  }
};

export { Input };

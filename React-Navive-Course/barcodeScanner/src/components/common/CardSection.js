import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => (
  <View style={styles.container}>
    {props.children}
  </View>
);

const styles = {
  container: {
      padding: 15,
      margin: 10,
      marginTop: 20,
      justifyContent: 'flex-start',
      flexDirection: 'row'
  }
};

export { CardSection };

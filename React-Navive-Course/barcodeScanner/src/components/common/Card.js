import React from 'react';
import { View } from 'react-native';

const Card = (props) => (
    <View style={styles.container}>
      {props.children}
    </View>
  );

const styles = {
  container: {
    marginTop: 0
  }
};

export { Card };

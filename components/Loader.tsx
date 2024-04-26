import React from 'react';
import {ActivityIndicator, View} from 'react-native';

const Loader: React.FC = () => (
  <View
    style={{
      flex: 1,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <ActivityIndicator size="large" color="black" />
  </View>
);

export default Loader;

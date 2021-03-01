import React from 'react';
import {
  View, Text, Button
} from 'react-native'

const LoginScreen = ({ navigation, route }) => {
  return (
    <View>
      <Text>
        This is Login Screen
      </Text>
      <Button title="go to register" onPress={() => {
        navigation.navigate('register')
      }} />
      <Button title="go to drawer" onPress={() => {
        navigation.navigate('drawer-nav')
      }} />
    </View>
  );
};

export default LoginScreen;

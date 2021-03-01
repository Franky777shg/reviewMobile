import React from 'react';
import {
  View, Text, Button
} from 'react-native'

const HomeOne = ({ navigation }) => {
  return (
    <View>
      <Text>
        This is home 1
      </Text>
      <Button title="go to home 2" onPress={() => {
        navigation.navigate('home-2')
      }} />
      <Button title="go to search 1" onPress={() => {
        navigation.navigate('search-nav', { screen: "search-1" })
      }} />
      <Button title="go to search 2" onPress={() => {
        navigation.navigate('search-nav', { screen: "search-2" })
      }} />
      <Button title="go to notif 1" onPress={() => {
        navigation.navigate('notif-nav', { screen: "notif-1" })
      }} />
      <Button title="go to notif 2" onPress={() => {
        navigation.navigate('notif-nav', { screen: "notif-2" })
      }} />
      <Button title="go to dm 1" onPress={() => {
        navigation.navigate('dm-nav', { screen: "dm-1" })
      }} />
      <Button title="go to dm 2" onPress={() => {
        navigation.navigate('dm-nav', { screen: "dm-2" })
      }} />
      <Button title="go to profile 1" onPress={() => {
        navigation.navigate('profile-nav', { screen: "profile-1" })
      }} />
      <Button title="go to profile 2" onPress={() => {
        navigation.navigate('profile-nav', { screen: "profile-2" })
      }} />
    </View>
  );
};

export default HomeOne;

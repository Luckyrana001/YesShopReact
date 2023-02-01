import React from 'react';
import {Text, View} from 'react-native';
// @ts-ignore
export default function DealerHome({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text onPress={() => navigation.navigate('loginPage')}>
        Dealer, world!
      </Text>
    </View>
  );
}

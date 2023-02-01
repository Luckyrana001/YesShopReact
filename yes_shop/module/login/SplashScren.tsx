import * as React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

/*
const LoginPage = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Hello, world!</Text>
    </View>
  );
};
*/

// @ts-ignore
export default function loginPage({navigation}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.push('Dealer Home')}>
        <Text style={styles.buttonText}>Dealer Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.push('Details')}>
        <Text style={styles.buttonText}>Contractor</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#212121',
    textAlign: 'center',
  },
  button: {
    width: 300,
    borderRadius: 25,
    backgroundColor: '#FCE4EC',
    marginVertical: 10,
    paddingVertical: 16,
  },
});

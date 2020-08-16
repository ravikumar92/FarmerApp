import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import Header from '../Header';

const Login = (props) => {
  return (
    <View style={styles.container}>
      <Header />
      <View>
        <Text style={styles.text}>Login/Sign up</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} maxLength={10} placeholder="Phone Number" />
      </View>
      <View style={styles.enterContainer}>
        <Text
          style={styles.enter}
          onPress={() => props.navigation.navigate('Otp')}>
          Enter
        </Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.footer}>Login / Sign up</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  text: {
    color: 'green',
    fontSize: 20,
    fontFamily: 'fangsong',
    fontWeight: '800',
    textAlign: 'center',
    top: 55,
  },
  inputContainer: {
    borderBottomColor: 'black',
    borderBottomWidth: 4,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    paddingHorizontal: 40,
    top: 70,
    textAlign: 'center',
  },
  input: {
    fontSize: 20,
    paddingLeft: 15,
    paddingRight: 15,
  },
  textContainer: {
    flex: 0.7,
    justifyContent: 'flex-end',
  },
  footer: {
    color: 'brown',
    fontSize: 30,
    fontWeight: '800',
    textAlign: 'center',
  },
  enterContainer: {
    alignSelf: 'stretch',
    top: 110,
  },
  enter: {
    color: 'grey',
    fontSize: 15,
    textAlign: 'right',
    paddingRight: 80,
  },
});

export default Login;

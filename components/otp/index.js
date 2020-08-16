import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const Otp = (props) => {
  return (
    <View style={styles.container}>
      <View style={{top: 20, paddingLeft: 5}}>
        <Text onPress={() => props.navigation.navigate('Login')}>
          <Icon name="arrow-left" size={30} color="black" />
        </Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Login / Sign up</Text>
      </View>
      <View style={styles.verificationContainer}>
        <Text style={styles.text}>Enter Verification code</Text>
      </View>
      <View style={styles.messageContainer}>
        <Text style={styles.messageText}>We have sent a verification code to your</Text>
        <Text style={styles.messageText}>mobile number, Please enter the same</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput secureTextEntry={true} style={styles.input} placeholder="Enter OTP Here" />
      </View>
      <View style={styles.footerContainer}>
        <Text style={styles.footer} onPress={() => props.navigation.navigate('Dashboard')}>Proceed</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  textContainer: {
    top: 40,
    paddingLeft: 80,
  },
  text: {
    color: 'green',
    fontSize: 20,
    fontFamily: 'didot',
    fontWeight: '800',
  },
  verificationContainer: {
    top: 90,
    paddingLeft: 40,
  },
  inputContainer: {
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    paddingHorizontal: 110,
    paddingVertical: 10,
    top: 120,
    textAlign: 'center',
    marginTop: 20,
  },
  input: {
    fontSize: 15,
    paddingLeft: 15,
    paddingRight: 15,
  },
  footerContainer: {
    top: 130,
    justifyContent: 'flex-end',
    paddingRight: 30,
  },
  footer: {
    color: 'brown',
    fontSize: 30,
    fontWeight: '800',
    textAlign: 'center',
  },
  messageContainer: {
    top: 130,
    paddingLeft: 30,
  },
  messageText: {
    fontSize: 17,
    color: 'black',
  },
});

export default Otp;

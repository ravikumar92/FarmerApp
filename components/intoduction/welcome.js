import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Dimensions,
} from 'react-native';

const Welcome = (props) => {
  const {width, height} = Dimensions.get('window');
  return (
    <View style={{width, height}}>
      <ImageBackground
        source={require('../../assets/images/farm.jpeg')}
        style={styles.image}>
        <View style={styles.textContainer}>
          <View style={styles.topTextContainer}>
            <Text style={styles.welcomeText}>Welcome to</Text>
            <Text style={styles.welcomeText}>farmstop Organic Shop</Text>
          </View>
          <View style={styles.middleTextContainer}>
            <Text style={styles.productText}>Farmer</Text>
            <Text style={styles.productText}>App.</Text>
          </View>
          <View>
            <Text
              style={styles.signInText}
              onPress={() => props.navigation.navigate('Login')}>
              {' '}
              Sign in/ Register{' '}
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    flex: 1,
    paddingLeft: 10,
    textAlign: 'left',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  welcomeText: {
    color: 'black',
    fontSize: 20,
    fontWeight: '600',
    top: 55,
  },
  productText: {
    color: 'black',
    fontSize: 40,
    fontWeight: '600',
  },
  signInText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '800',
  },
  topTextContainer: {
    flex: 0.3,
  },
  middleTextContainer: {
    flex: 0.3,
  },
  footerTextContainer: {
    flex: 1,
    marginBottom: 40,
  },
});

export default Welcome;

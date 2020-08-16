import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Dimensions,
} from 'react-native';

const Intro = (props) => {
  const {width, height} = Dimensions.get('window');
  return (
    <View style={{width, height}}>
      <ImageBackground
        source={require('../../assets/images/field.png')}
        style={styles.image}>
        <View style={styles.textContainer}>
          <Text style={styles.welcomeText}>Welcome</Text>
          <Text style={styles.welcomeText}>to the new</Text>
          <Text style={styles.productText}>Products and</Text>
          <Text style={styles.productText}>Solutions for</Text>
          <Text style={styles.productText}>Your organic farms</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 36,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  welcomeText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'left',
    paddingLeft: 10,
  },
  productText: {
    color: 'white',
    fontSize: 40,
    fontWeight: '600',
    textAlign: 'left',
    paddingLeft: 10,
  },
});

export default Intro;

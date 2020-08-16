import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/Octicons';

const Footer = props => {
  return (
    <View style={styles.container}>
      <Text>
        <Icon name="home" size={40} color="black" />
      </Text>
      <Text>
        <Icon name="users" size={40} color="black" />
      </Text>
      <Text>
        <Icon name="user" size={40} color="black" />
      </Text>
      <Text>
        <Icons name="settings" size={40} color="black" />
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default Footer;
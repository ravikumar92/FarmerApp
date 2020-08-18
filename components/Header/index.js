import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/Entypo';

const Header = (props) => {
  return (
    <View style={styles.container}>
      <View>
        <Text onPress={() => props.navigation.navigate('Sidebar')}>
          <Icon name="navicon" size={30} color="black" />;
        </Text>
      </View>
      <View style={styles.rightHeader}>
        {props.dashboard && (
          <Text style={{paddingRight: 20}}>
           <Icons name="location-pin" size={30} color="red" />
          </Text>
        )}
        <Text style={{paddingRight: 20}}>
          <Icon name="shopping-cart" size={30} color="yellow" />
        </Text>
        <Text>
          <Icon name="user" size={30} color="black" />
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    top: 5,
    backgroundColor: 'white',
    paddingLeft: 10,
    paddingRight: 10,
  },
  rightHeader: {
    flexDirection: 'row',
  },
});

export default Header;

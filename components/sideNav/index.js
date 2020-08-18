import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import LetterIcon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import Notification from 'react-native-vector-icons/Ionicons';

const Sidebar = props => {
  return (
    <View style={styles.container}>
      <Text style={{paddingLeft: 10, fontSize: 20}}> Signup/Login </Text>
      <View style={styles.sideMenu}>
        <Text>
          <Icon name='user-alt' size={25} color='black' />
        </Text>
        <Text style={styles.text}>My Account</Text>
      </View>
      <View style={styles.sideMenu}>
        <Text>
          <Icons name='calendar-multiple' size={25} color='black' />
        </Text>
        <Text style={styles.text}>My Farms</Text>
      </View>
      <View style={styles.sideMenu}>
        <Text>
          <Icon name='heart' size={25} color='black' />
        </Text>
        <Text style={styles.text}>Crop Calendar</Text>
      </View>
      <View style={styles.sideMenu}>
        <Text>
          <Icons name='frequently-asked-questions' size={25} color='black' />
        </Text>
        <Text style={styles.text}>FAQ</Text>
      </View>
      <View style={styles.sideMenu}>
        <Text>
          <Notification name='notifications' size={25} color='black' />
        </Text>
        <Text style={styles.text}>Notifications</Text>
      </View>
      <View style={styles.groupContainer}>
        <Text style={styles.text}>Your Group</Text>
        <Text style={styles.text}>Join a Group</Text>
        <Text style={styles.text}>Community</Text>
      </View>
      <View style={styles.footer}> 
          <Text>
              <LetterIcon name="envelope" size={25} color="red" />
          </Text>
          <Text style={styles.text}>Contact us</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    flexDirection: 'column',
    paddingLeft: 20,
    backgroundColor: '#ffff',
  },
  text: {
    fontSize: 20,
    paddingLeft: 20,
  },
  sideMenu: {
    flexDirection: 'row',
  },
  groupContainer: {
    flexDirection: 'column',
  },
  footer: {
    flex: 0.1,
    justifyContent: 'flex-end',
    paddingLeft: 5,
  },
});

export default Sidebar;

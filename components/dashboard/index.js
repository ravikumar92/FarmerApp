import React from 'react';
import {View, Text, TextInput, StyleSheet, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from '../Header';
import Footer from '../footer';

const Dashboard = props => {
  const list = [
    {
      key: 'Organic Fertilizer',
      navigateTo: 'Fertilizer',
    },
    {
      key: 'organic Pesticides',
      navigateTo: 'Pesticides',
    },
    {
      key: 'My Crops',
      navigateTo: 'Crops',
    },
    {
      key: 'Tips about Organic Farming',
      navigateTo: 'Tips',
    },
    {
      key: 'Learn More',
      navigateTo: 'Learn',
    },
    {
      key: 'Crop Doctor',
      navigateTo: 'CropDoctor',
    },
  ];

  return (
    <View style={styles.MainContainer}>
      <Header dashboard={true} />
      <View style={styles.searchContainer}>
        <Text style={{top: 14}}>
          <Icon name="search" size={20} />
        </Text>
        <TextInput
          style={styles.searchArea}
          placeholder="Search for anything Organic"
        />
      </View>
      <FlatList
        data={list}
        renderItem={({item}) => (
          <View style={styles.GridViewBlockStyle}>
            <Text style={styles.GridViewInsideTextItemStyle}
            onPress={() => props.navigation.navigate(item.navigateTo)}> {item.key} </Text>
          </View>
        )}
        numColumns={2}
      />
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: 'center',
    flex: 1,
    margin: 10,
    paddingTop: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    paddingTop: 30,
    paddingLeft: 10,
  },
  searchArea: {
    paddingLeft: 10,
    top: 0,
  },
  GridViewBlockStyle: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
    height: 100,
    margin: 5,
    backgroundColor: '#00BCD4',
  },
  GridViewInsideTextItemStyle: {
    color: '#fff',
    padding: 10,
    fontSize: 18,
    justifyContent: 'center',
  },
});

export default Dashboard;

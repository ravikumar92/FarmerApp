import React from 'react';
import {StatusBar, SafeAreaView, ScrollView} from 'react-native';
import Intro from './intro';
import Welcome from './welcome';

const Introduction = (props) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
        <ScrollView
          style={{flex: 1}}
          horizontal={true}
          scrollEventThrottle={20}
          pagingEnabled={true}>
          <Intro />
          <Welcome {...props} />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Introduction;

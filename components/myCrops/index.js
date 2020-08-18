import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'

const MyCrops = props => {
  const row = [1, 2, 3]
  return (
    <View style={styles.container}>
      <Text style={styles.header}> My Crops</Text>
      {row.map((val, index) => {
        return (
          <>
            <View key={index} style={styles.contentContainer}>
              <Image
                style={{flex: 0.2, width: null, height: null}}
                source={require('../../assets/images/mycrop.png')}
              />
              <View>
                <Text>Farm 1</Text>
                <Text>Crop</Text>
                <Text>Day sown</Text>
                <Text>Crop year</Text>
              </View>
              <View>
                <Text>Narvari palle</Text>
                <Text>Browntop Miller</Text>
                <Text>03/05/2020</Text>
                <Text>Day sown</Text>
              </View>
            </View>
            <View style={styles.contentContainer}>
              <View>
                <Text style={styles.text}>Activities</Text>
              </View>
              <View>
                <Text style={styles.text}>Notes</Text>
              </View>
              <View>
                <Text style={styles.text}>Gallery</Text>
              </View>
            </View>
          </>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    fontStyle: 'italic',
    fontSize: 20,
    color: 'green',
    margin: 10,
    padding: 10,
  },
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 20,
    marginTop: 20,
  },
  text: {
    fontWeight: '500',
    fontSize: 17,
  },
});

export default MyCrops;

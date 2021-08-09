import React from 'react';
import { View, Text, TextInput, StyleSheet, FlatList, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Footer from '../footer';

const CropList = props => {
    const list = [
        {
            key: 'Carrot',
            navigateTo: 'Crops',
        },
        {
            key: 'Tomato',
            navigateTo: 'Tomato',
        },
        {
            key: 'Fruits',
            navigateTo: 'Fruits',
        },
        {
            key: 'Brinjal',
            navigateTo: 'Brinjal',
        },
        {
            key: 'Grains',
            navigateTo: 'Grains',
        },
        {
            key: 'Greens',
            navigateTo: 'Greens',
        }
    ];

    return (
        <View style={styles.MainContainer}>
            <ScrollView
                style={{ flex: 1 }}>
                <View >
                    <Text style={styles.text}>Carrot</Text>
                </View>
                <View style={styles.left}>
                    <Image
                        style={styles.stretch}
                        source={require('../../assets/images/carrot.jpg')}
                    />
                </View>
                <Text style={styles.textHeading}>Carrot</Text>
                <View style={{ flex: 1, flexDirection: 'row', marginTop: 30 }}>
                    <View style={{ width: 200, height: 100, backgroundColor: 'powderblue', justifyContent: 'flex-end' }} >
                        <Text style={styles.nextButton}>Organic fertilizers and Pesticides Composition per Acres</Text>
                    </View>
                    <View style={{ width: 195, height: 100, backgroundColor: 'skyblue', justifyContent: 'flex-end' }} >
                        <Text style={styles.nextButton}>Common Pests and diseases</Text>
                    </View>
                    {/* <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} /> */}
                </View>
                <View style={{ flex: 1, flexDirection: 'row', marginTop: 130 }}>
                    <Text style={{ fontSize: 25, fontWeight: '900', }}>Check the symptoms from the images listed </Text>
                </View>
                <FlatList
                    data={list}
                    renderItem={({ item }) => (
                        <View style={styles.GridViewBlockStyle}>
                            <Text style={styles.GridViewInsideTextItemStyle}
                                onPress={() => props.navigation.navigate(item.navigateTo)}> {item.key} </Text>
                        </View>
                    )}
                    numColumns={2}
                />
                <View >
                <Text onPress={() => props.navigation.navigate('SymptomsList')}style={styles.nextButtons}>NEXT</Text>
            </View>
            </ScrollView>
            
            <Footer />
        </View>

    );
};

const styles = StyleSheet.create({
    MainContainer: {
        // justifyContent: 'center',
        flex: 1,
        margin: 10,
        paddingTop: 20,
    },

    text: {
        color: 'green',
        fontSize: 25,
        fontStyle: 'italic',
        fontWeight: '900',
        textAlign: 'left',
        top: 10,
    },
    textHeading: {
        marginLeft: 20,
        fontSize: 25,
        fontWeight: '900',
        top: 10,
        justifyContent: 'space-between'
    },
    left: {
        marginLeft: 20,
    },
    subHeading: {
        flexDirection: 'row'
    },
    stretch: {
        marginTop: 40,
        width: 100,
        height: 100,
        flexDirection: 'row',
        marginRight: 50
        // justifyContent: 'center',
    },
    nextButton: {
        color: 'black',
        fontSize: 20,
    },
    nextButtons :{
        color: 'red',
        fontSize: 20,
        fontWeight: '200',
        fontStyle: 'italic',
        textAlign: 'right',
        marginBottom :20
    },
    GridViewBlockStyle: {
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
        height: 100,
        margin: 5,
        backgroundColor: '#00BCD4',
        marginTop: 40,
    },
    GridViewInsideTextItemStyle: {
        color: '#fff',
        padding: 10,
        fontSize: 18,
        justifyContent: 'center',
    },
});

export default CropList;

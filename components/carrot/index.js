import React from 'react';
import { View, Text, TextInput, StyleSheet, FlatList, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Footer from '../footer';

const Carrot = props => {
    const list = [
        {
            key: 'Carrot',
            navigateTo: 'Carrot',
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
        },
        {
            key: 'Legumess',
            navigateTo: 'Legumess',
        },
        {
            key: 'Grainss',
            navigateTo: 'Grainss',
        },
        {
            key: 'Greenss',
            navigateTo: 'Greenss',
        },
    ];

    return (
        <View style={styles.MainContainer}>
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
            <View style={styles.left}>
            <Text style={styles.nextButton}>NEXT</Text>
            </View>
            <View >
                <Text style={styles.nextButton}>NEXT</Text>
            </View>
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
    textHeading : {
        marginLeft:20,fontSize: 25,
        fontStyle: 'italic',
        fontWeight: '900',
        textAlign: 'left',
        top: 10,
    },
    left : {
        marginLeft: 20
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
        color: 'red',
        fontSize: 20,
        fontWeight: '200',
        fontStyle: 'italic',
        textAlign: 'right',
        marginBottom: 20
    },
    GridViewBlockStyle: {
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
        height: 100,
        margin: 5,
        backgroundColor: '#00BCD4',
        marginTop: 40
    },
    GridViewInsideTextItemStyle: {
        color: '#fff',
        padding: 10,
        fontSize: 18,
        justifyContent: 'center',
    },
});

export default Carrot;

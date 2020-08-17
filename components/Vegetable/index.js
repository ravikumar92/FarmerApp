import React from 'react';
import { View, Text, TextInput, StyleSheet, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Footer from '../footer';

const Vegetables = props => {
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
                <Text style={styles.text}>Vegetables</Text>
                <Text style={styles.subheader}>Choose the vegetable of your interest</Text>
            </View>
            <FlatList
                data={list}
                renderItem={({ item }) => (
                    <View style={styles.GridViewBlockStyle}>
                        <Text style={styles.GridViewInsideTextItemStyle}
                            onPress={() => props.navigation.navigate(item.navigateTo)}> {item.key} </Text>
                    </View>
                )}
                numColumns={3}
            />
             <View >
                <Text style={styles.nextButton}>NEXT</Text>
            </View>
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
    text: {
        color: 'green',
        fontSize: 25,
        fontStyle: 'italic',
        fontWeight: '900',
        textAlign: 'left',
        top: 10,
    },
    subheader: {
        color: 'black',
        fontSize: 23,
        fontWeight: '100',
        fontStyle: 'italic',
        textAlign: 'left',
        top: 25,
    },
    nextButton :{
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
        marginTop: 40
    },
    GridViewInsideTextItemStyle: {
        color: '#fff',
        padding: 10,
        fontSize: 18,
        justifyContent: 'center',
    },
});

export default Vegetables;

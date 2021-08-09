import React from 'react';
import { View, Text, TextInput, StyleSheet, FlatList, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Footer from '../footer';

const SymptomsList = props => {
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
                    <Text style={styles.text}>Stem borer</Text>
                </View>
                <View >
                    <Image
                        style={styles.stretch}
                        source={require('../../assets/images/field.png')}
                    />
                </View>
                
                <View style={{ flex: 1, flexDirection: 'row', marginTop: 100 }}>
                    <Text style={{ fontSize: 25, fontWeight: '900',color:'red' }}>Symptoms </Text>
                </View>
                <View style={{ flex: 1, flexDirection: 'row', marginTop: 125 }}>
                    <Image
                        style={styles.stretch}
                        source={require('../../assets/images/field.png')}
                    />
                </View>
                <View style={{ flex: 1, flexDirection: 'row', marginTop: 20 }}>
                    <Text style={{ fontSize: 25, fontWeight: '900',color:'green',fontStyle:'italic' }}>Detected diagnosis </Text>
                </View>
                <View style={{ flex: 1, flexDirection: 'row', marginTop: 20 }}>
                    <Text style={{ fontSize: 25, fontWeight: '900',color:'red',fontStyle:'italic' }}>About disease</Text>
                </View>
                <View style={{ flex: 1, flexDirection: 'row', marginTop: 20 }}>
                    <Text style={{ fontSize: 25, fontWeight: '900',color:'black',fontStyle:'normal' }}>Organic Pesticides to cure the diseases</Text>
                </View>
                <View style={{ flex: 1, flexDirection: 'row', marginTop: 150 }}>
                    <Text style={{ fontSize: 25, fontWeight: '900',color:'black',fontStyle:'normal' }}>Option1</Text>
                </View>
                <View style={{ flex: 1, flexDirection: 'row', marginTop: 30 }}>
                    <View style={{ width: 200, height: 300,  justifyContent: 'flex-end' }} >
                    <Image
                        style={{height:300,width:190}}
                        source={require('../../assets/images/field.png')}
                    />
                    </View>
                    <View style={{ width: 195, height: 320, justifyContent: 'flex-start'}} >
                        <Text style={{ color: 'black',fontSize: 20,marginBottom:75,fontStyle:'italic'}}>biobiobio</Text>
                        <Text style={{ color: 'black',fontSize: 30,color:'red' ,fontWeight:'bold',fontStyle:'normal'}}>Farmstop Organics</Text>
                        <Text style={{ color: 'black',fontSize: 30,color:'black' ,marginTop:20,fontStyle:'normal'}}>Usage and precautionary measures</Text>

                    </View>
                    {/* <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} /> */}
                </View>
                <View style={{ flex: 1, flexDirection: 'row', marginTop: 30 }}>
                    <View style={{ width: 200, height: 300,  justifyContent: 'flex-end' }} >
                    <Image
                        style={{height:300,width:190}}
                        source={require('../../assets/images/field.png')}
                    />
                    </View>
                    <View style={{ width: 195, height: 320, justifyContent: 'flex-start'}} >
                        <Text style={{ color: 'black',fontSize: 20,marginBottom:75,fontStyle:'italic'}}>biobiobio</Text>
                        <Text style={{ color: 'black',fontSize: 30,color:'red' ,fontWeight:'bold',fontStyle:'normal'}}>Farmstop Organics</Text>
                        <Text style={{ color: 'black',fontSize: 30,color:'black' ,marginTop:20,fontStyle:'normal'}}>Usage and precautionary measures</Text>

                    </View>
                    {/* <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} /> */}
                </View>
                <Text onPress={() => props.navigation.navigate('SymptomsList')}style={styles.nextButtons}>Add another crop</Text>
            </ScrollView>
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
        width: 1000,
        height: 250,
    },
    nextButton: {
        color: 'black',
        fontSize: 20,
    },
    nextButtons :{
        color: 'black',
        fontSize: 20,
        fontWeight: '200',
        fontStyle: 'italic',
        textAlign: 'right',
        marginBottom :30
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

export default SymptomsList;

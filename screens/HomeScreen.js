import React from 'react';
import { Text, View } from 'react-native';
import { Image } from 'react-native-elements';
import { connect } from 'react-redux';
import CitiesList from '../components/CitiesList';
import HeaderUserName from '../components/HeaderUserName';

const styleSheet = {
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    titleStyle: {
        color: '#47B1E1',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 20,
        margin : 20
    },
};

const HomeScreen = () => {

    return (
        <View style={styleSheet.container}>
            <HeaderUserName />
            <Text style={styleSheet.titleStyle}>React Native Weather</Text>
            <Image source={{ uri: 'https://image.shutterstock.com/image-photo/weather-forecast-background-climate-change-260nw-1124541077.jpg' }}
                style={{ width: 400, height: 100 }}>
            </Image>
            <CitiesList></CitiesList>
        </View>
    )
};

export default connect()(HomeScreen)
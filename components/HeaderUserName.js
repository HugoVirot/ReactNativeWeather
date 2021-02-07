import { Avatar, Header } from 'react-native-elements';
import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const styleSheet = {
    headerStyle: {
        height: 90
    }, 
    textStyle: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
        marginTop : 10
    }
}

const HeaderUserName = props => {

    useEffect(() => {
        async function getName() {
            const temp = await AsyncStorage.getItem('name');
            setName(temp);
        }

        getName();
    });

    const [name, setName] = useState(''); // permet de faire référence au state du composant, et d'utiliser setName ligne 23

    return (
        <Header backgroundColor="darkblue" containerStyle={styleSheet.headerStyle}>
            <Avatar rounded icon={{ name: 'user', type: 'font-awesome' }} size="medium" />
            <Text style={styleSheet.textStyle}>
                Salut {name}
            </Text>
        </Header>
    )
};

export default (HeaderUserName);
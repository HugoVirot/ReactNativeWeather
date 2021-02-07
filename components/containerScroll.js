import React from 'react';
import { SafeAreaView, ScrollView, Text } from 'react-native';
import HeaderUserName from '../components/HeaderUserName';

const styleSheet = {
    container: {
        flex: 1,
    },
    scrollView: {
        flexGrow: 1,
        textAlign: 'center'
    }
};

const ContainerScroll = (props) => {

    return (
        <SafeAreaView style={styleSheet.container}>
            <ScrollView contentContainerStyle={styleSheet.scrollView}>
                <HeaderUserName />
                {/* {props.children} */}
            </ScrollView>
        </SafeAreaView>
    )
};

export default ContainerScroll;
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Alert
} from 'react-native';

export default class PageMain extends Component{
    componentDidMount(){
        Alert.alert(
            'title',
            'test',
            [
                {text: '知道了', onPress: () => {}},
            ],
            { cancelable: false }
        )
    }
    render() {
        return (
            <View>
                <Text>
                    main page
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
});
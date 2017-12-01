/**
 * Created by zhanghao1 on 2017/12/1.
 */
import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Alert,
    TouchableHighlight
} from 'react-native';

import DpFactory from "../common/DpFactory";
let Dp = DpFactory.getDp();

export default class PageTemplate extends Component{
    constructor(props){
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View>template</View>
        );
    }
}

const styles = StyleSheet.create({

});
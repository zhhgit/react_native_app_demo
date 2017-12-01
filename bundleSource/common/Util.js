/**
 * Created by zhanghao1 on 2017/12/1.
 */
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Alert
} from 'react-native';

export default class Util{
    static showAlert(title,content){
        Alert.alert(title,content);
    }
}
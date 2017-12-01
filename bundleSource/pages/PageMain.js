import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Alert,
    TouchableHighlight
} from 'react-native';

import Util from "../common/Util";
import DpFactory from "../common/DpFactory";
let Dp = DpFactory.getDp();

export default class PageMain extends Component{
    constructor(props){
        super(props);
        this.state = {
            dpcontent:"space"
        };
    }

    componentDidMount(){
    }

    _handleClick(){
        this.setState({
            dpcontent:"111"
        });
    }

    render() {
        return (
            <View>
                <TouchableHighlight onPress={() => {this._handleClick()}}>
                    <Text>
                        {this.state.dpcontent}
                    </Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
});
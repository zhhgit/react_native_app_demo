import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Alert,
    TouchableHighlight,
    ScrollView,
} from 'react-native';

import ScrollableTabView, { ScrollableTabBar,DefaultTabBar } from 'react-native-scrollable-tab-view';
import FacebookTabBar from '../components/FacebookTabBar';
import DpFactory from "../common/DpFactory";
let Dp = DpFactory.getDp();

export default class PageMain extends Component{
    constructor(props){
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <ScrollableTabView
                style={{marginTop: 20, }}
                initialPage={1}
                renderTabBar={() => <FacebookTabBar />}
            >
                <ScrollView tabLabel="ios-paper" style={styles.tabView}>
                    <View style={styles.card}>
                        <Text>News</Text>
                    </View>
                </ScrollView>
                <ScrollView tabLabel="ios-people" style={styles.tabView}>
                    <View style={styles.card}>
                        <Text>Friends</Text>
                    </View>
                </ScrollView>
                <ScrollView tabLabel="ios-chatboxes" style={styles.tabView}>
                    <View style={styles.card}>
                        <Text>Messenger</Text>
                    </View>
                </ScrollView>
                <ScrollView tabLabel="ios-notifications" style={styles.tabView}>
                    <View style={styles.card}>
                        <Text>Notifications</Text>
                    </View>
                </ScrollView>
                <ScrollView tabLabel="ios-list" style={styles.tabView}>
                    <View style={styles.card}>
                        <Text>Other nav</Text>
                    </View>
                </ScrollView>
            </ScrollableTabView>
        );
    }
}

const styles = StyleSheet.create({
    tabView: {
        flex: 1,
        padding: 10,
        backgroundColor: 'rgba(0,0,0,0.01)',
    },
    card: {
        borderWidth: 1,
        backgroundColor: '#fff',
        borderColor: 'rgba(0,0,0,0.1)',
        margin: 5,
        height: 150,
        padding: 15,
        shadowColor: '#ccc',
        shadowOffset: { width: 2, height: 2, },
        shadowOpacity: 0.5,
        shadowRadius: 3,
    },
});
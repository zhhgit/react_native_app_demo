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
import TabBar from '../components/TabBar';
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
                locked={true}
                scrollWithoutAnimation={true}
                renderTabBar={() => <TabBar />}
                tabBarPosition="bottom"
            >
                <ScrollView tabLabel="MaterialCommunityIcons#home-outline#首页" style={styles.tabView}>
                    <View>
                        <Text>1</Text>
                    </View>
                </ScrollView>
                <ScrollView tabLabel="Foundation#list-thumbnails#分类" style={styles.tabView}>
                    <View>
                        <Text>2</Text>
                    </View>
                </ScrollView>
                <ScrollView tabLabel="MaterialCommunityIcons#refresh#发现" style={styles.tabView}>
                    <View>
                        <Text>3</Text>
                    </View>
                </ScrollView>
                <ScrollView tabLabel="Foundation#shopping-cart#购物车" style={styles.tabView}>
                    <View>
                        <Text>4</Text>
                    </View>
                </ScrollView>
                <ScrollView tabLabel="MaterialIcons#person#我的" style={styles.tabView}>
                    <View>
                        <Text>5</Text>
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
});
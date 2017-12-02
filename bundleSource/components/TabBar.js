import React,{Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Foundation from 'react-native-vector-icons/Foundation';

export default class TabBar extends Component {
    icons = [];

    constructor(props) {
        super(props);
        this.icons = [];
    }

    render() {
        let that = this;
        return <View style={[styles.tabs, this.props.style]}>
            {this.props.tabs.map((tab, i) => {
                let arr = tab.split("#");
                let category = arr[0];
                let name = arr[1];
                let text = arr[2];
                let color = this.props.activeTab === i ? "#FF0000" : '#9D9D9D';
                return <TouchableOpacity key={tab} onPress={() => this.props.goToPage(i)} style={styles.tab}>
                    {that.renderIcon(category,name,color)}
                    {that.renderText(text)}
                </TouchableOpacity>;
            })}
        </View>;
    }

    renderIcon(category,name,color,text){
        let IconComponent;
        switch (category){
            case "Ionicons": IconComponent=Ionicons; break;
            case "FontAwesome":IconComponent=FontAwesome; break;
            case "MaterialCommunityIcons":IconComponent=MaterialCommunityIcons; break;
            case "MaterialIcons":IconComponent=MaterialIcons; break;
            case "Entypo":IconComponent=Entypo; break;
            case "Foundation":IconComponent=Foundation;break;
            default:break;
        }
        return(
            <IconComponent
                name={name}
                size={30}
                color={color}
                ref={(icon) => { this.icons[i] = icon; }}
            />
        );
    }

    renderText(text){
        return(
            <Text style={styles.text}>{text}</Text>
        );
    }
}

const styles = StyleSheet.create({
    tab: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: 3,
    },
    tabs: {
        height: 52,
        flexDirection: 'row',
        paddingTop: 3,
        borderTopColor:'#DCDCDC',
        borderTopWidth: 1,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderBottomColor: 'rgba(0,0,0,0.05)',
    },
    text: {
        fontSize:12
    },
});
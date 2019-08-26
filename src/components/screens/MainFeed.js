import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableHighlight
} from 'react-native';
import { PostFeed } from '../container'
import IconFeather from 'react-native-vector-icons/Feather'
import IconSLI from 'react-native-vector-icons/SimpleLineIcons'
class Instagram extends Component {

    render() {
        return (
            <View style={{ flex: 1 }} >
                <View style={[styles.tempNav, { justifyContent: "space-between" }]} >
                    <View style={{ flexDirection: "row" }}>
                        <TouchableHighlight style={styles.wrapperIcon} underlayColor="rgb(233,233,233)" onPress={() => alert("camera clicked")} >
                            <IconFeather name="camera" size={30} style={styles.icon} />
                        </TouchableHighlight>
                        <Text style={[styles.icon, { fontFamily: "Billabong", fontSize: 26 }]}>Instagram</Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <TouchableHighlight style={styles.wrapperIcon} underlayColor="rgb(233,233,233)" onPress={() => alert("igtv clicked")}>
                            <IconFeather name="tv" size={30} style={styles.icon} />
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.wrapperIcon} underlayColor="rgb(233,233,233)" onPress={() => alert("direct mesage clicked")}>
                            <IconSLI name="paper-plane" size={30} style={styles.icon} />
                        </TouchableHighlight>
                    </View>
                </View>
                <PostFeed />
            </View >
        );
    }
}

const styles = StyleSheet.create({
    tempNav: {
        width: 100 + "%",
        height: 50,
        backgroundColor: "rgb(250,250,250)",
        borderBottomColor: "rgb(233,233,233)",
        borderBottomWidth: StyleSheet.hairlineWidth,
        flexDirection: "row",
    },
    wrapperIcon: {
        height: 50,
        width: 50
    },
    icon: {
        paddingLeft: 10,
        paddingTop: 10,
    }

})

export default Instagram
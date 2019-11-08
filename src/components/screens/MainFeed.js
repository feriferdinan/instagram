import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableHighlight,
    StatusBar
} from 'react-native';
import { PostFeed } from '../container'
import IconFeather from 'react-native-vector-icons/Feather'
import IconSLI from 'react-native-vector-icons/SimpleLineIcons'
class MainFeed extends Component {

    render() {
        return (
            <View style={{ flex: 1 }} >
                <StatusBar backgroundColor="#f0f0f0" barStyle="dark-content" />
                <View style={[styles.tempNav, { justifyContent: "space-between" }]} >
                    <View style={{ flexDirection: "row" }}>
                        <TouchableHighlight style={styles.wrapperIcon} underlayColor="rgb(233,233,233)" onPress={() => alert("camera clicked")} >
                            <IconFeather name="camera" size={25} style={styles.icon} />
                        </TouchableHighlight>
                        <Text style={[{ paddingTop: 10, fontFamily: "Billabong", fontSize: 26 }]}>Instagram</Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <TouchableHighlight style={styles.wrapperIcon} underlayColor="rgb(233,233,233)" onPress={() => alert("igtv clicked")}>
                            <IconFeather name="tv" size={25} style={styles.icon} />
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.wrapperIcon} underlayColor="rgb(233,233,233)" onPress={() => this.props.navigation.navigate('DirectMessage')}>
                            <IconSLI name="paper-plane" size={24} style={[styles.icon, { paddingTop: 13 }]} />
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
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0.1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 0.22,

        elevation: 1,
        flexDirection: "row",
    },
    wrapperIcon: {
        height: 50,
        width: 50
    },
    icon: {
        paddingLeft: 12,
        paddingTop: 12,
    }

})

export default MainFeed
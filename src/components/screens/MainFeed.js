import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import { PostFeed } from '../container'
class Instagram extends Component {

    render() {
        return (
            <View style={{ flex: 1 }} >
                <View style={styles.tempNav} >
                    <Text style={{ fontFamily: "Billabong", fontSize: 30 }}>Instagram</Text>
                </View>
                <PostFeed />
            </View>
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
        justifyContent: "center",
        alignItems: "center"
    },

})

export default Instagram
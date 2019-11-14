import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import configs from '../../config'

class Comment extends Component {
    static navigationOptions = {
        title: 'Komentar',
        headerStyle: {
            height: configs.styleConstants.rowHeight,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 1,
            },
            shadowOpacity: 0.20,
            shadowRadius: 1.41,
            elevation: 2,
        },
        headerTitleStyle: {
            fontSize: 18
        }
    };

    render() {
        return (
            <TouchableOpacity
                style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text>Comment</Text>
            </TouchableOpacity>
        )
    }
}

export default Comment;

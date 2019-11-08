import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native'

class DirectMessage extends Component {

    render() {
        return (
            <TouchableOpacity
                style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text>DirectMessage</Text>
            </TouchableOpacity>
        )
    }
}

export default DirectMessage;

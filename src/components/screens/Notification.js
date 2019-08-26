import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native'

class Notification extends Component {

    render() {
        return (
            <TouchableOpacity
                style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text>Notification</Text>
            </TouchableOpacity>
        )
    }
}

export default Notification;

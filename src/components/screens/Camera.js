import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native'

class Camera extends Component {

    render() {
        return (
            <TouchableOpacity
                style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text>Camera</Text>
            </TouchableOpacity>
        )
    }
}

export default Camera;

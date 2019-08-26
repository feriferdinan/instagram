import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native'

class Explore extends Component {

    render() {
        return (
            <TouchableOpacity
                style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text>Explore</Text>
            </TouchableOpacity>
        )
    }
}

export default Explore;

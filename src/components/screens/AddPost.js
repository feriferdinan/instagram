import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native'

class AddPost extends Component {

    render() {
        return (
            <TouchableOpacity
                style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text>AddPost</Text>
            </TouchableOpacity>
        )
    }
}

export default AddPost;

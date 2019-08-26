import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native'

class Profile extends Component {
    login() {
        this.props.navigation.navigate('main')
    }
    render() {
        return (
            <TouchableOpacity
                style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text>Profile</Text>
            </TouchableOpacity>
        )
    }
}

export default Profile;

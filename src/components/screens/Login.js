import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, Button } from 'react-native'

class Login extends Component {
    login() {
        this.props.navigation.navigate('register')
    }
    render() {
        return (
            <TouchableOpacity
                onPress={() => this.login()}
                style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text>New User?</Text>
            </TouchableOpacity>
        )
    }
}

export default Login;

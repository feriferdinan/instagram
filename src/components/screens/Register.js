import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, Button } from 'react-native'

class Register extends Component {
    login() {
        this.props.navigation.navigate('main')
    }
    render() {
        return (
            <View
                style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text>Register Page</Text>
                <TextInput underlineColorAndroid='blue' style={{ width: 90 + '%' }} />
                <TextInput underlineColorAndroid='blue' style={{ width: 90 + '%' }} />
                <Button title="Sigin Up"
                    onPress={() => this.login()} />
            </View>
        )
    }
}

export default Register;

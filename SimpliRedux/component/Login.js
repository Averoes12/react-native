import React, {Component} from 'react';
import {TextInput, StyleSheet, ToastAndroid} from 'react-native';

export default class Login extends Component {

    state = {
        text : ''
    }

    onChangeText = text => this.setState({text})

    
}
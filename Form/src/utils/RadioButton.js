import React, { Component } from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
export default class RadioButton extends Component {

    constructor(props){
        super(props);

        this.state = {
            value: '',
        };

        this.getStorageData()
    }

    getStorageData = async () => {
        const genre = await AsyncStorage.getItem('genre')
        if (genre !== null){
            console.log("ASYNC", JSON.parse(genre))
            const parseData = JSON.parse(genre);
            this.setState({
                value : parseData.selected
            })

        }
    }

    render() {
        const { PROP } = this.props;

        return (
            <View>
                {PROP.map(res => {
                    return (
                        <View key={res.key} style={styles.container}>
                            <Text style={styles.radioText}>{res.text}</Text>
                            <TouchableOpacity
                                style={styles.radioCircle}
                                onPress={() => {
                                    this.setState({
                                        value: res.key,
                                    });
                                    let genre = {
                                        selected : res.key
                                    }
                                    AsyncStorage.setItem('genre', JSON.stringify(genre))
                                    console.log("Saved")
                                }}>
                                {this.state.value === res.key && <View style={styles.selectedRb} />}
                            </TouchableOpacity>
                        </View>
                    );
                })}
                <Text> Selected: {this.state.value} </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 35,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    radioText: {
        marginRight: 35,
        fontSize: 20,
        color: '#000',
        fontWeight: '700'
    },
    radioCircle: {
        height: 30,
        width: 30,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: '#3740ff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    selectedRb: {
        width: 15,
        height: 15,
        borderRadius: 50,
        backgroundColor: '#3740ff',
    },
    result: {
        marginTop: 20,
        color: 'white',
        fontWeight: '600',
        backgroundColor: '#F3FBFE',
    },
});

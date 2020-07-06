

import React , { Component } from 'react';
import { TouchableNativeFeedback, View, Image, Text, Alert } from 'react-native';

export default class MovieItem extends Component{
    
    render(){
        const {
            original_title,
            release_date,
            poster_path,
            id,
        } = this.props.results;


        return(
            <TouchableNativeFeedback
            useForeground
            onPress={() => alert(id + " clicked")}> 
                <View style={{flexDirection:'row', backgroundColor:'dark-grey', height:120, marginBottom:8}}>
                    <Image source = {{uri: 'https://image.tmdb.org/t/p/w500' + poster_path}} />
                    <View style={{flexDirection:'column', justifyContent:'space-between'}}>
                        <Text style={{color:'black'}}>{original_title}</Text>
                        <Text>{release_date}</Text>
                    </View>
                </View>
               
            </TouchableNativeFeedback>
        )
    }
}

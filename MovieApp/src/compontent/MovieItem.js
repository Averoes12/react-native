

import React , { Component } from 'react';
import { TouchableNativeFeedback, View, Image, Text, Alert, StyleSheet } from 'react-native';
import { Card, Rating } from 'react-native-elements';
import moment from 'moment';

export default class MovieItem extends Component{
    
    render(){
        const {
            title,
            release_date,
            poster_path,
            id,
            vote_average,
            genre_ids,
        } = this.props.results;

        const time = moment(release_date || moment.now).fromNow();
        return(
            <TouchableNativeFeedback
            useForeground
            onPress={() => alert(id + " clicked")}> 
            <Card containerStyle={style.cardContainer}
                  imageStyle={style.imageStyle}
                  image={{uri : 'https://image.tmdb.org/t/p/w500/' + poster_path}}>
                <Text numberOfLines={2} ellipsizeMode="clip" style={style.title}>{title}</Text>
                <Rating 
                type='heart' 
                style={style.rating}
                imageSize={20} 
                startingValue={vote_average / 2}
                readonly   
                />
                <Text style={style.title}>{time}</Text>
                </Card>
            </TouchableNativeFeedback>
        )
    }
}

const style = StyleSheet.create({
    cardContainer :{
        borderRadius:10,
      
    },
    imageStyle:{
        resizeMode:"cover",
        height:200,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
    },
    title:{
        width:150,
        textAlign:"center"
    },
    
    rating:{
        paddingVertical:10
    }
})

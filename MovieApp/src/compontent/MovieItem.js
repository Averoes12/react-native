

import React , { Component } from 'react';
import { TouchableNativeFeedback, View, Image, Text, Alert, StyleSheet } from 'react-native';
import { Card, Rating } from 'react-native-elements';
import moment from 'moment';
import { IMAGE_URL } from '../constans/constant';
import { NavigationActions } from 'react-navigation';

export default class MovieItem extends Component{
    
    render(){
        const {
            title,
            release_date,
            poster_path,
            id,
            vote_average,
            genre_ids,
            overview,
        } = this.props.results;

        const {
            navigation,
        } = this.props;

        const time = moment(release_date || moment.now).fromNow();
        return(
            <TouchableNativeFeedback
            useForeground
            onPress={() => navigation.navigate("Detail", {
                    id : id,
                    title : title,
                    genre_ids: genre_ids,
                    poster_path : poster_path,
                    vote_average: vote_average,
                    release_date : release_date,
                    overview : overview

                
            })}> 
            <Card containerStyle={style.cardContainer}
                  imageStyle={style.imageStyle}
                  image={{uri : IMAGE_URL + poster_path}}>
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
        elevation:2
      
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

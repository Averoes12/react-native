import React, { Component } from 'react';
import {FlatList, View, Image, Text, ListView} from 'react-native';
import MovieItem from './MovieItem'
import {getMovies} from '../actions/MovieAction'
import { connect } from 'react-redux';

class Home extends Component{
    constructor(props){
        super(props);

        this.props.getMovies()
    }

    render(){
        return(
            <FlatList 
                data={this.props.movies}
                renderItem={(item) => <MovieItem results={item}/>}
                
            />
        )
    }
}


const mapStateToProps = (state) => ({
    movies: state.getMovieReducer.movies,
  }) 

    const mapDispatchToProps = (dispatch) => ({
        getMovies : () => dispatch(getMovies())
    })
    export default  connect(mapStateToProps, mapDispatchToProps)(Home)
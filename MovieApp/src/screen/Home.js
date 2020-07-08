import React, {Component} from 'react';
import {FlatList, View, Image, Text, ListView, ActivityIndicator} from 'react-native';
import MovieItem from '../compontent/MovieItem';
import {getMovies, getTrending, getDiscover} from '../actions/MovieAction';
import {connect} from 'react-redux';
import {ScrollView} from 'react-native-gesture-handler';
import Spinner from 'react-native-spinkit'

class Home extends Component {
  constructor(props) {
    super(props);

    this.props.getMovies();
    this.props.getTrending();
    this.props.getDiscover();
  }

  render() {
    if(this.props.isLoading){
      return(
        <View style={{justifyContent:"center", flex:1, alignItems:"center"}}>
          <Spinner type="9CubeGrid" color="#42a5f5" />
        </View>
      )
    }else {
    return (
      <ScrollView>
      <View style={{paddingVertical: 8, backgroundColor: '#42a5f5'}}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 18,
            textAlign: 'left',
            marginTop: 16,
            marginStart: 16,
            color: 'white'
          }}>
          Upcoming
        </Text>
        <FlatList
          data={this.props.movies}
          renderItem={({item}) => <MovieItem results={item} navigation={this.props.navigation} />}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View style={{paddingVertical: 8, backgroundColor: '#42a5f5'}}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 18,
            textAlign: 'left',
            marginTop: 16,
            marginStart: 16,
            color: 'white'
          }}>
          Trending
        </Text>
        <FlatList
          data={this.props.trending}
          renderItem={({item}) => <MovieItem results={item} navigation={this.props.navigation} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{paddingBottom: 8}}
        />
      </View>
      <View style={{paddingVertical:8, backgroundColor:'#42a5f5'}}>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 18,
          textAlign: 'left',
          marginTop: 8,
          marginStart: 16,
          color: 'white'
        }}>
        Discover
      </Text>
      <FlatList
        data={this.props.discover}
        renderItem={({item}) => <MovieItem results={item} navigation={this.props.navigation} />}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
      </View>
    </ScrollView>
    );
      }
  }
}

const mapStateToProps = state => ({
  movies: state.getMovieReducer.movies,
  trending: state.getMovieReducer.trending,
  discover: state.getMovieReducer.discover,
  isLoading : state.getMovieReducer.isLoading,
});

const mapDispatchToProps = dispatch => ({
  getMovies: () => dispatch(getMovies()),
  getTrending: () => dispatch(getTrending()),
  getDiscover: () => dispatch(getDiscover()),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);

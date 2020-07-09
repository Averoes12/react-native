import React, {Component} from 'react';
import {FlatList, View, Image, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {ScrollView} from 'react-native-gesture-handler';
import {IMAGE_URL} from '../constans/constant';
import {
  getDetailMovie,
  getRecomended,
  getSimiliar,
  getReviews,
} from '../actions/DetailMovieAction';
import moment from 'moment';
import {Icon} from 'react-native-elements';
import Spinner from 'react-native-spinkit';
import SimiliarMovieItem from '../compontent/SimiliarMovieItem';
import RecomendationsMovieItem from '../compontent/RecomendationMovieItem';

class Detail extends Component {
  constructor(props) {
    super(props);

    this.props.getDetail(this.props.navigation.state.params.id);
    this.props.getRecomended(this.props.navigation.state.params.id);
    this.props.getSimiliar(this.props.navigation.state.params.id);
  }

  render() {
    const {
      id,
      title,
      poster_path,
      genre_ids,
      release_date,
      vote_average,
      overview,
      status,
      production_companies,
      production_countries,
      genres,
      runtime,
      spoken_languages,
      tagline,
    } = this.props.detail;

    const bgImage = {uri: IMAGE_URL + poster_path};
    const time = moment(release_date || moment.now).fromNow();

    if (this.props.isLoading) {
      return (
        <View style={{justifyContent: 'center', flex: 1, alignItems: 'center'}}>
          <Spinner type="9CubeGrid" color="#42a5f5" />
        </View>
      );
    } else {
      return (
        <ScrollView
          style={{backgroundColor: '#42a5f5'}}
          showsVerticalScrollIndicator={false}>
          <Image source={bgImage} style={{height: 200, marginBottom: 8}} />
          <View
            style={{
              position: 'absolute',
              alignSelf: 'flex-end',
              backgroundColor: 'black',
              opacity: 0.9,
              padding: 8,
              borderBottomLeftRadius: 20,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
              <Icon
                name="time-outline"
                type="ionicon"
                color="orange"
                size={15}
              />
              <Text style={{color: 'white', marginStart: 4}}>{runtime}m</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
              <Icon
                name="timer-outline"
                type="ionicon"
                color="orange"
                size={15}
              />
              <Text style={{color: 'white', marginStart: 4}}>{status}</Text>
            </View>
          </View>
          <Text
            style={{fontStyle: 'italic', color: 'white', textAlign: 'center'}}>
            "{tagline}"
          </Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={style.label}>{title}</Text>
            <Text style={style.time}>{time}</Text>
          </View>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 18,
              color: 'white',
              marginStart: 16,
              marginTop: 8,
            }}>
            Overview
          </Text>
          <Text style={style.bodey}>{overview}</Text>
          <Text style={style.label}>Production Companies</Text>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={production_companies}
            renderItem={({item}) => (
              <View style={{margin: 16}}>
                <Image
                  source={{uri: IMAGE_URL + item.logo_path}}
                  style={{width: 100, height: 100}}
                />
                <Text
                  numberOfLines={2}
                  ellipsizeMode="clip"
                  style={style.production_title}>
                  {item.name}
                </Text>
              </View>
            )}
          />
          <View>
            <Text style={style.label}>Product Countries</Text>
            <FlatList
              data={production_countries}
              renderItem={({item}) => (
                <Text style={style.bodey}>{item.name}</Text>
              )}
              style={{marginStart: 8}}
            />
          </View>
          <View>
            <Text style={style.label}>Genre</Text>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={genres}
              renderItem={({item}) => (
                <View
                  style={{
                    backgroundColor: 'white',
                    borderRadius: 50,
                    margin: 8,
                  }}>
                  <Text style={{color: 'black', padding: 8}}>{item.name}</Text>
                </View>
              )}
              style={{marginStart: 8}}
            />
          </View>
          <View>
            <Text style={style.label}>Language</Text>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={spoken_languages}
              renderItem={({item}) => (
                <View
                  style={{
                    margin: 8,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    style={{width: 20, height: 20}}
                    source={{
                      uri:
                        'https://www.countryflags.io/' +
                        item.iso_639_1 +
                        '/flat/64.png',
                    }}
                  />
                  <Text style={style.language}>{item.name}</Text>
                </View>
              )}
              style={{marginStart: 8}}
            />
          </View>
          <View>
            <Text style={style.label}>Similiar Movies</Text>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={this.props.similiar}
              renderItem={({item}) => (
                <SimiliarMovieItem
                  results={item}
                  navigation={this.props.navigation}
                />
              )}
            />
          </View>
          <View>
            <Text style={style.label}>Recomendations Movies</Text>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={this.props.recomended}
              renderItem={({item}) => (
                <RecomendationsMovieItem
                  results={item}
                  navigation={this.props.navigation}
                />
              )}
            />
          </View>
        </ScrollView>
      );
    } 
  }
}

const mapsStateToProps = state => ({
  detail: state.getDetailMovieReducer.detail,
  recomended: state.getDetailMovieReducer.recomended,
  similiar: state.getDetailMovieReducer.similiar,
  reviews : state.getDetailMovieReducer.reviews,
  isLoading: state.getDetailMovieReducer.isLoading,
});

const mapDispatchToProps = dispatch => ({
  getDetail: movie_id => dispatch(getDetailMovie(movie_id)),
  getRecomended: movie_id => dispatch(getRecomended(movie_id)),
  getSimiliar: movie_id => dispatch(getSimiliar(movie_id)),
  getReviews : movie_id => dispatch(getReviews(movie_id))
});

const style = StyleSheet.create({
  label: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    marginStart: 16,
    marginTop: 8,
  },
  bodey: {
    marginTop: 16,
    marginHorizontal: 8,
    fontSize: 14,
    color: 'white',
  },

  time: {
    fontSize: 16,
    color: 'white',
    marginEnd: 8,
    marginTop: 16,
  },

  production_title: {
    width: 100,
    textAlign: 'center',
    color: 'white',
  },
  language: {
    color: 'white',
  },
});

export default connect(
  mapsStateToProps,
  mapDispatchToProps,
)(Detail);

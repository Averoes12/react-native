import React, {Component} from 'react';
import {FlatList} from 'react-native';

// Import getNews from news.js
// import {getNews} from '../model/news';
import Article from './Article';
import {Icon} from 'react-native-elements';
import { connect } from 'react-redux';
import { getNews } from '../actions/NewsAction';


class Home extends Component {
  constructor(props) {
    super(props);


    this.props.getNews();
  }


  static navigationOptions = {
    title: 'Home',
    headerRight: (
      <Icon containerStyle={{paddingLeft: 10}} type="ionicon" name="enter" />
    ),
  };

  render() {
    return (
      <FlatList
        data={this.props.news}
        renderItem={({item}) => <Article article={item} />}
        // refreshing={this.handleRefresh()}
        keyExtractor={item => item.url}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  news: state.getNewsReducer.news,
})

const mapDispatchToProps = (dispatch) => ({
  getNews: () => dispatch(getNews()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)

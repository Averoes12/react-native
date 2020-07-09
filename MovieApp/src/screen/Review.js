import React ,{ Component } from "react";
import { View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import ReviewItem from "../compontent/ReviewItem";
import { connect } from "react-redux";
import { getReviews } from "../actions/DetailMovieAction";

 class Review extends Component{

    constructor(props) {
        super(props)

        this.props.getReviews();
    }
    render(){
        return(
            <View>
                <FlatList
                    data={this.props.reviews} 
                    renderItem={({item}) => <ReviewItem />}
                />
            </View>
        )
    }
}

const mapStateToProps = state => ({
    reviews : state.getDetailMovieReducer.reviews,
})

const mapDispatchToProps = dispatch =>({
    getReviews : movie_id => dispatch(getReviews(movie_id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Review)
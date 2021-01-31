import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

class LatestMovieReviewsContainer extends Component { 

    //constructor
    constructor(props) {
        super(props)
    
        this.state = {
                reviews: []
        }
    } 

    fetchMovieReviews = () => {
        fetch(URL) 
         .then(res => res.json()) 
         .then(resObj => {   console.log(resObj)

            this.setState({reviews: resObj.results}) 
         }) 
         
    } 

    componentDidMount(){
        this.fetchMovieReviews()
    }

    //render
    render() { 
        return (
            <div className="latest-movie-reviews"> 
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}

export default LatestMovieReviewsContainer

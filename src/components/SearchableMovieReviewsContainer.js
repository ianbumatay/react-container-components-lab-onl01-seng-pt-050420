import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

class SearchableMovieReviewsContainer extends Component { 

    state = {
        searchTerm: '', 
        review: []
    } 

    handleSearchInputChange = (event) => { 
        this.setState({
            searchTerm: event.target.value
        })
    }

    handleSubmit = (event) => { 
        event.preventDeafault(); 

        fetch(URL.concat(this.state.searchTerm))
          .then(resp => resp.json()) 
          .then(resp => {
              this.setState({reviews: resp.result})
        })
    }
    
    render() {
        return (
            <div className="searchable-movie-reviews"> 
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="reviews-input"> Search Movie Reviews</label> 
                    <input 
                    style={{width: 300}}
                    type="text" id="input" 
                    onChange={this.handleSearchInputChange}
                    />
                    <button type="submit"> Submit</button>
                </form> 
                {typeof this.state.reviews === 'object' && this.state.reviews.length > 0 && <h2>Movie Review By Search:</h2>}
                <MovieReviews reviews={this.state.reviews} />    
            </div>
        )
    }
}

export default SearchableMovieReviewsContainer


// {typeof this.state.reviews === 'object' &&
//           this.state.reviews.length > 0 && <h2>Movie Review By Search:</h2>}
//         <MovieReviews reviews={this.state.reviews} />
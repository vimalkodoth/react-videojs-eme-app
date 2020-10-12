import React, { Component } from "react";
import { connect } from "react-redux";
import config from "./../config.json";
import { fetchMoviesList } from "./../actionCreators";
import HorizontalList from "./HorizontalList";
import { Home } from "./pages";
import { Link } from "react-router-dom";

class MoviesList extends Component {
    componentDidMount() {
        this.props.fetchMoviesList();
    }

    componentDidUpdate() {
        console.log("list movies");
        console.log(this.props.moviesList);
    }

    render() {
        if (!this.props.moviesList) return;
        return this.props.moviesList.map((list) => {
            return (
                <HorizontalList key={list.id}>
                    {list.contents.data.map((movieItem) => {
                        console.log(movieItem);
                        return (
                            <div className="item" key={movieItem.id}>
                                <Link to={`/details/${movieItem.id}`}>
                                    <img src={`${movieItem.images.artwork}`} />
                                </Link>
                            </div>
                        );
                    })}
                </HorizontalList>
            );
        });
    }
}

const mapStateToProps = (state) => ({ moviesList: state.moviesList });
const mapDispatchToProps = (dispatch) => ({
    fetchMoviesList() {
        dispatch(fetchMoviesList());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);

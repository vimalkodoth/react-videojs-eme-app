import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMoviesList } from "./../actionCreators";
import List from "./List";
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
                //Flexible Compound Component
                <List key={list.id}>
                    <List.Title>
                        <h2>{list.name}</h2>
                    </List.Title>
                    <List.Horizontal>
                        {list.contents.data.map((movieItem) => {
                            return (
                                <div className="item" key={movieItem.id}>
                                    <Link to={`/details/${movieItem.id}`}>
                                        <img
                                            src={`${movieItem.images.artwork}`}
                                        />
                                    </Link>
                                </div>
                            );
                        })}
                    </List.Horizontal>
                </List>
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

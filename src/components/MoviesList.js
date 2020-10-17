import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMoviesList } from "./../actionCreators";
import List from "./List";
import PortraitItem from "./PortraitItem";
import { css } from "@emotion/core";
import { withRouter } from "react-router";
import { array, object, func } from "prop-types";

/** MoviesList Component */
class MoviesList extends Component {
    static propTypes = {
        moviesList: array,
        fetchMoviesList: func,
        location: object
    };
    static defaultProps = {
        moviesList: [],
        location: {}
    };
    componentDidMount() {
        if (this.props.moviesList.length) return;
        this.props.fetchMoviesList();
    }

    render() {
        const { location } = this.props;
        if (!this.props.moviesList) return;
        return this.props.moviesList.map((list) => {
            return (
                //Flexible Compound Component
                <div css={MoviesListStyles} key={list.id}>
                    <List key={list.id}>
                        <List.Title>
                            <h2>{list.name}</h2>
                        </List.Title>
                        <List.Horizontal>
                            {list.contents.data.map((movieItem) => {
                                return (
                                    <PortraitItem
                                        key={movieItem.id}
                                        item={movieItem}
                                        to={{
                                            pathname: `/details/${movieItem.id}`,
                                            state: { from: location.pathname }
                                        }}
                                    ></PortraitItem>
                                );
                            })}
                        </List.Horizontal>
                    </List>
                </div>
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

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(MoviesList));

const MoviesListStyles = css`
    & h2 {
        margin-left: 5px;
    }
`;

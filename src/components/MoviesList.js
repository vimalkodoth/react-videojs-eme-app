import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMoviesList } from "./../actionCreators";
import List from "./List";
import PortraitItem from "./PortraitItem";
import { css } from "@emotion/core";

class MoviesList extends Component {
    componentDidMount() {
        debugger;
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

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);

const MoviesListStyles = css`
    & h2 {
        margin-left: 5px;
    }
`;

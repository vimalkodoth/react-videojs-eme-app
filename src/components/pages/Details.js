import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMovieDetail } from "./../../actionCreators";
import DetailsHeader from "./../DetailsHeader";

class Details extends Component {
    componentDidMount() {
        const {
            match: { params }
        } = this.props;
        this.props.fetchMovieDetail(params.id);
    }

    render() {
        return <DetailsHeader id={this.props.match.params.id} />;
    }
}

const mapStateToProps = (state) => ({ movieDetails: state.movieDetails });
const mapDispatchToProps = (dispatch) => ({
    fetchMovieDetail(id) {
        dispatch(fetchMovieDetail(id));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Details);

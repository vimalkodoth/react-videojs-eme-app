import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMovieDetail } from "./../../actionCreators";
import DetailsHeader from "./../DetailsHeader";
import Button from "./../../components/Button";
import withBackButton from "./../hocs/withBackButton";
import { func, object } from "prop-types";

class Details extends Component {
    static propTypes = {
        onBackButtonClicked: func,
        fetchMovieDetail: func,
        movieDetails: object,
        match: object
    };
    static defaultParams = {
        onBackButtonClicked: (n) => n,
        fetchMovieDetail: (n) => n,
        match: {},
        movieDetails: {}
    };
    componentDidMount() {
        const {
            match: { params }
        } = this.props;
        this.props.fetchMovieDetail(params.id);
    }

    goBack = (e) => {
        this.props.onBackButtonClicked(e);
    };

    render() {
        const { match } = this.props;
        return (
            <div className="details">
                <Button onClick={this.goBack} show={true} prev={true} />
                <DetailsHeader id={match.params.id} />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({ movieDetails: state.movieDetails });
const mapDispatchToProps = (dispatch) => ({
    fetchMovieDetail(id) {
        dispatch(fetchMovieDetail(id));
    }
});

export const UnWrappedDetails = Details;

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withBackButton(Details));

import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMovieDetail } from "./../../actionCreators";
import DetailsHeader from "./../DetailsHeader";
import Button from "./../../components/Button";
import withBackButton from "./../hocs/withBackButton";

class Details extends Component {
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
            <React.Fragment>
                <Button onClick={this.goBack} show={true} prev={true} />
                <DetailsHeader id={match.params.id} />
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => ({ movieDetails: state.movieDetails });
const mapDispatchToProps = (dispatch) => ({
    fetchMovieDetail(id) {
        dispatch(fetchMovieDetail(id));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withBackButton(Details));

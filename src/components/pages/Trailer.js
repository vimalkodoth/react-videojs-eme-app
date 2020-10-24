import React, { Component } from "react";
import VideoPlayer from "./../VideoPlayer";
import Button from "./../Button";
import withBackButton from "./../hocs/withBackButton";
import { func } from "prop-types";
import config from "../../config.json";

/** Trailer Page Component */
class Trailer extends Component {
    static propTypes = {
        onBackButtonClicked: func
    };
    static defaultProps = {
        onBackButtonClicked: (n) => n
    };
    goBack = (e) => {
        this.props.onBackButtonClicked(e);
    };
    render() {
        //Take default configuration for player instead of route as we are playing same stream for all assets
        const videoJsOptions = config.defaultPlayerConfig || {};
        return (
            <div className="trailer">
                <Button onClick={this.goBack} show={true} prev={true} />
                <VideoPlayer {...videoJsOptions} />;
            </div>
        );
    }
}

export const UnWrappedTrailer = Trailer;

export default withBackButton(Trailer);

import React, { Component } from "react";
import { css } from "@emotion/core";
import spacerImage from "./../static/img/spacer-image.png";
import { string } from "prop-types";
/** Image Component */
class Image extends Component {
    static propTypes = {
        src: string
    };
    static defaultProps = {
        src: spacerImage
    };
    state = {
        loaded: false,
        defaultSrc: spacerImage
    };

    imageLoaded = () => {
        this.setState((state) => ({
            ...state,
            loaded: true
        }));
    };

    render() {
        const { src } = this.props;
        const { defaultSrc, loaded } = this.state;
        return (
            <React.Fragment>
                <img
                    src={`${src}`}
                    onLoad={this.imageLoaded}
                    css={css`
                        display: ${loaded ? "block" : "none"};
                    `}
                />
                <img
                    src={`${defaultSrc}`}
                    css={css`
                        display: ${!loaded ? "block" : "none"};
                    `}
                />
            </React.Fragment>
        );
    }
}

export default Image;

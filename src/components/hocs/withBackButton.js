import React, { Component } from "react";
import { object } from "prop-types";
const withBackButton = (WrappedComponent) => {
    const Sub = class extends Component {
        onBackButtonClicked = () => {
            const { location, history } = this.props;
            if (location.state && location.state.from) {
                history.goBack();
            } else {
                history.push("/");
            }
        };
        render() {
            return (
                <WrappedComponent
                    {...this.props}
                    onBackButtonClicked={this.onBackButtonClicked}
                />
            );
        }
    };
    Sub.propTypes = {
        location: object,
        history: object
    };

    Sub.defaultProps = {
        location: {},
        history: {}
    };
    return Sub;
};

export default withBackButton;

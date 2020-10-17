import React, { Component } from "react";

const withBackButton = (WrappedComponent) => {
    return class extends Component {
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
};

export default withBackButton;

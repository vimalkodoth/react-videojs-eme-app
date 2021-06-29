import React, { Component } from "react";
import ErrorBoundary from "../ErrorBoundary";

function withErrorBoundary(WrappedComponent) {
    return class extends Component {
        render() {
            return (
                <ErrorBoundary>
                    <WrappedComponent {...this.props} />
                </ErrorBoundary>
            );
        }
    };
}

export default withErrorBoundary;

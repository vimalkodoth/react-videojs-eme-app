import React, { Component } from "react";
import PropTypes, { node } from "prop-types";
import { css } from "@emotion/core";

/** Error Boundary Component */
class ErrorBoundary extends Component {
    static propTypes = {
        children: PropTypes.oneOfType([PropTypes.arrayOf(node), node])
            .isRequired
    };
    static defaultProps = {
        children: React.createElement("div")
    };

    state = {
        error: "",
        errorInfo: "",
        hasError: false
    };

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        this.setState((state) => ({ ...state, errorInfo }));
    }

    render() {
        const { hasError, errorInfo } = this.state;
        if (hasError) {
            return (
                <div css={ErrorStyles}>
                    <div>
                        <div className="error-header">
                            <p>
                                There was an error in loading this page.{" "}
                                <span
                                    style={{
                                        cursor: "pointer",
                                        color: "#0077FF"
                                    }}
                                    onClick={() => {
                                        window.location.reload();
                                    }}
                                >
                                    Reload this page
                                </span>{" "}
                            </p>
                        </div>
                        <div className="error-body">
                            <details className="error-details">
                                <summary>Click for error details</summary>
                                {errorInfo &&
                                    errorInfo.componentStack.toString()}
                            </details>
                        </div>
                    </div>
                </div>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;

const ErrorStyles = css`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: inherit;
    min-height: 100vh;

    & > div {
        max-width: 420px;
    }
`;

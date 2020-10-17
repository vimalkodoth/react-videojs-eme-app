import React, { Component } from "react";
import PropTypes from "prop-types";
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
        console.log(error, errorInfo);
        this.setState((state) => ({ ...state, errorInfo }));
    }

    render() {
        return this.props.children;
    }
}

export default ErrorBoundary;

import React, { Component } from "react";

class ErrorBoundary extends Component {
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

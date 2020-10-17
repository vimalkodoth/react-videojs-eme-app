import React, { Component } from "react";

class AsyncRoute extends Component {
    state = {
        loaded: false
    };
    component = null;
    componentDidMount() {
        this.props.loadingPromise.then((module) => {
            this.component = module.default;
            debugger;
            this.setState({ loaded: true });
        });
    }

    render() {
        if (this.state.loaded) {
            return <this.component {...this.props.props} />;
        }
        return null;
    }
}

export default AsyncRoute;

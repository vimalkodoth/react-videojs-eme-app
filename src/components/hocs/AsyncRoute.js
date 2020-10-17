import React, { Component } from "react";
import { object, promise } from "prop-types";
class AsyncRoute extends Component {
    static propTypes = {
        loadingPromise: promise,
        props: object
    };
    state = {
        loaded: false
    };
    component = null;
    componentDidMount() {
        this.props.loadingPromise.then((module) => {
            this.component = module.default;
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

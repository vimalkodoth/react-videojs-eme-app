import React, { Component } from "react";
import MoviesList from "../MoviesList.js";
class Home extends Component {
    render() {
        return (
            <div className="home">
                <MoviesList />
            </div>
        );
    }
}

export default Home;

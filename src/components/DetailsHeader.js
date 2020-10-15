import React, { Component } from "react";
import { connect } from "react-redux";
import { css } from "@emotion/core";
import RoundedButton from "./RoundedButton";

class DetailsHeader extends Component {
    render() {
        if (!this.props.movieDetail) return null;
        const { snapshot = "" } = this.props.movieDetail.images;

        return (
            <div css={Header(snapshot)}>
                <RoundedButton
                    title={"TRAILER"}
                    to={"/trailer"}
                ></RoundedButton>
                <div className="meta-info">
                    <div className="title">{this.props.movieDetail.title}</div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    movieDetail: state.movieDetails[ownProps.id]
});
export default connect(mapStateToProps)(DetailsHeader);

const Header = (image) => css`
    position: relative;
    background-image: url(${image});
    background-size: cover;
    background-position: center top;
    height: calc(100vh - 50px);
    min-height: 450px;
    @media (min-width: 480px) {
        min-height: 480px;
        height: 560px;
    }
    @media (min-width: 480px) {
        min-height: 530px;
        height: 660px;
    }
    & .meta-info {
        position: absolute;
        width: 100%;
        bottom: 60px;
        display: flex;
        justify-content: center;
        background-color: rgba(20, 20, 20, 0.5);
        & .title {
            font-size: 16px;
            color: #fff;
            @media (min-width: 300px) {
                font-size: 22px;
            }
            @media (min-width: 360px) {
                font-size: 36px;
            }
            @media (min-width: 680px) {
                font-size: 40px;
            }
        }
    }
`;

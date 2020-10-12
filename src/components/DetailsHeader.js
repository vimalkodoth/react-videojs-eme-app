import React, { Component } from "react";
import { connect } from "react-redux";
import { css } from "@emotion/core";

class DetailsHeader extends Component {
    render() {
        if (!this.props.movieDetail) return null;
        const { snapshot = "" } = this.props.movieDetail.images;

        return (
            <div css={Header(snapshot)}>
                {this.props.id}
                {console.log(this.props.movieDetail)}
                {/* <DetailsAction action={"trailer"}></DetailsAction> */}
                <div className="rounded">
                    <span className="action trailer">
                        <span class="element">
                            <span class="right-arrow"></span>
                        </span>
                        <span class="text">TRAILER</span>
                    </span>
                </div>
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
    & .rounded {
        position: absolute;
        width: 100%;
        top: 30%;
        display: flex;
        justify-content: center;
        & .action {
            color: #fff;
            text-align: center;
            & .text {
                display: block;
            }
        }
        & .element {
            display: flex;
            width: 100px;
            background: #fff;
            height: 100px;
            border-radius: 50%;
            margin-bottom: 5px;
            justify-content: center;
            align-items: center;
            cursor: pointer;

            & .right-arrow {
                width: 0;
                height: 0;
                border-top: 25px solid transparent;
                border-bottom: 25px solid transparent;
                border-left: 40px solid #000;
                display: block;
                margin-left: 15px;
                transition: border-left-color 0.45s ease-in;
                &:hover,
                &:focus {
                    border-left-color: red;
                }
            }
        }
    }
    & .meta-info {
        position: absolute;
        width: 100%;
        bottom: 60px;
        display: flex;
        justify-content: center;

        & .title {
            font-size: 16px;
            color: #fff;
            @media (min-width: 300px) {
                font-size: 23px;
            }
            @media (min-width: 360px) {
                font-size: 42px;
            }
            @media (min-width: 680px) {
                font-size: 60px;
            }
        }
    }
`;

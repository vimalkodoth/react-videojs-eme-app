import React, { Component } from "react";
import { Link } from "react-router-dom";
import { css } from "@emotion/core";
import { string, object } from "prop-types";

/**
 * Rounded Button Component
 */
class RoundedButton extends Component {
    static propTypes = {
        title: string,
        to: string || object
    };
    static defaultProps = {
        title: "",
        to: ""
    };
    render() {
        const { title, to } = this.props;
        return (
            <div className="rounded" css={RoundedButtonStyles}>
                <span className="action">
                    <Link to={to}>
                        <span className="element">
                            <span className="right-arrow"></span>
                        </span>
                    </Link>
                    <span className="text">{title}</span>
                </span>
            </div>
        );
    }
}

export default RoundedButton;

const RoundedButtonStyles = css`
    &.rounded {
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

            & .title {
                margin: 10px 0;
            }
        }
    }
`;

import React, { Component } from "react";
import { css } from "@emotion/core";
import arrow from "./../static/img/arrow.svg";
import { bool, func } from "prop-types";
class Button extends Component {
    static propTypes = {
        onClick: func,
        show: bool,
        prev: bool
    };
    static defaultProps = {
        onClick: (val) => val,
        show: true,
        prev: true
    };
    render() {
        const { onClick, show, prev } = this.props;
        return (
            <div
                css={ButtonStyles({ prev })}
                style={{
                    display: show ? "block" : "none"
                }}
                onClick={onClick}
            ></div>
        );
    }
}

export default Button;

const ButtonStyles = (props) => css`
    position: absolute;
    cursor: pointer;
    top: 50%;
    margin-top: -24px;
    width: 48px;
    height: 48px;
    background-image: url(${arrow});
    background-color: rgba(255, 255, 0, 0.75);
    background-size: 110%;
    background-repeat: no-repeat;
    background-position: -3px -2px;
    border-radius: 50%;
    z-index: 9999;
    ${props && props.prev
        ? `
    left: 5px;
  `
        : `
    right: 5px;
    transform: rotate(180deg);
  `}
`;

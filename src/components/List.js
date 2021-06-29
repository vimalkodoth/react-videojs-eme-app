import React, { Component } from "react";
import HorizontalList from "./HorizontalList";
import { css } from "@emotion/core";
import PropTypes, { node } from "prop-types";

class List extends Component {
    static propTypes = {
        children: PropTypes.oneOfType([PropTypes.arrayOf(node), node])
            .isRequired
    };
    static defaultProps = {
        children: React.createElement("div")
    };

    static Title = (props) => {
        return props.children ? props.children : null;
    };
    static Horizontal = (props) => {
        return props.children ? (
            <HorizontalList>{props.children}</HorizontalList>
        ) : null;
    };

    render() {
        return React.Children.map(this.props.children, (childElement) => {
            return (
                <div css={ListStyle}>
                    {React.cloneElement(childElement, {})}
                </div>
            );
        });
    }
}

export default List;

const ListStyle = css`
    &.h2 {
        font-size: 1em;
    }
    margin: 10px 0;
`;

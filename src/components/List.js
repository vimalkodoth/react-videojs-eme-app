import React, { Component } from "react";
import HorizontalList from "./HorizontalList";
import { css } from "@emotion/core";

class List extends Component {
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

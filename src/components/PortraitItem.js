import React from "react";
import Image from "./Image";
import { Link } from "react-router-dom";
import { css } from "@emotion/core";
import PropTypes, { string, object } from "prop-types";

class PortraitItem extends React.Component {
    static propTypes = {
        item: object,
        to: PropTypes.oneOfType([string, object])
    };
    static defaultProps = {
        item: {},
        to: {}
    };
    render() {
        const { item, to } = this.props;

        return (
            <div className="item" css={PortraitItemStyles}>
                <Link to={to}>
                    <Image src={item.images.artwork} />
                </Link>
            </div>
        );
    }
}

export default PortraitItem;

const PortraitItemStyles = css`
    &.item {
        width: 100%;
        border: 5px solid;
        border-color: transparent;
        &:hover {
            border-color: yellow;
        }
        a {
            display: flex;
        }
        img {
            min-width: 100%;
            max-width: 100%;
        }
    }
`;

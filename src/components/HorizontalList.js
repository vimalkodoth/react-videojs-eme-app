import React, { Component } from "react";
import { css } from "@emotion/core";
import arrow from "./../static/img/arrow.svg";

class HorizontalList extends Component {
    state = {
        currentX: 0,
        currentIndex: 0,
        leftButtonEnabled: false,
        rightButtonEnabled: true
    };
    listRef = React.createRef();
    listStateRef = React.createRef();

    updateDimensions = () => {
        const innerList = this.listRef.current.querySelector("ul");
        const item = this.listRef.current.querySelector("li[data-item]");
        const listStyles = window.getComputedStyle(this.listRef.current);
        const listItemStyles = window.getComputedStyle(item);
        this.listStateRef.current.itemWidth = parseFloat(listItemStyles.width);
        this.listStateRef.current.itemMargin = parseFloat(
            listItemStyles.marginRight
        );
        this.listStateRef.current.listWidth = parseFloat(listStyles.width);
        this.listStateRef.current.itemWidthInPercentage =
            (parseFloat(listItemStyles.width) / parseFloat(listStyles.width)) *
            100;
        this.listStateRef.current.innerListWidth = parseFloat(
            innerList.scrollWidth
        );
        this.listStateRef.current.ItemsInView = Math.floor(
            parseFloat(listStyles.width) /
                (parseFloat(listItemStyles.width) +
                    parseFloat(listItemStyles.marginRight))
        );
    };

    _onResize = () => {
        console.log(
            window.getComputedStyle(document.querySelector('li[data-item="1"'))
                .width
        );
        requestAnimationFrame(() => {
            this.updateDimensions();
            this.repositionList();
        });
    };
    componentDidMount() {
        this.listStateRef.current = {};
        setTimeout(() => {
            if (this.listRef.current) {
                this.updateDimensions();
            }
        }, 0);
        window.addEventListener("resize", this._onResize);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this._onResize);
    }

    repositionList() {
        const { currentIndex } = this.state;
        const {
            listWidth,
            itemMargin,
            itemWidthInPercentage
        } = this.listStateRef.current;
        // console.log(itemWidthInPercentage);
        // console.log(currentIndex);
        const newScroll =
            -(currentIndex * itemWidthInPercentage) -
            currentIndex * (itemMargin / listWidth) * 100;
        this.setState((state) => ({ ...state, currentX: newScroll }));
    }

    getLeftDx = () => {
        const {
            itemWidth,
            itemMargin,
            ItemsInView,
            innerListWidth,
            listWidth
        } = this.listStateRef.current;
        const { currentX } = this.state;
        let dx = 0;
        debugger;
        let maxOffScreenItems = Math.floor(
            Math.abs((currentX / 100) * listWidth) / (itemWidth + itemMargin)
        );
        if (maxOffScreenItems > ItemsInView) {
            dx = (itemWidth + itemMargin) * ItemsInView;
        } else {
            dx = (itemWidth + itemMargin) * maxOffScreenItems;
        }
        return (dx / listWidth) * 100;
    };

    moveLeft = (e) => {
        this.setState(
            (state) => {
                const { currentX, currentIndex } = state;
                const { itemWidthInPercentage } = this.listStateRef.current;
                if (currentX >= 0) {
                    return;
                }
                const dx = this.getLeftDx();
                console.log(
                    "currentIndex " +
                        (currentIndex - Math.floor(dx / itemWidthInPercentage))
                );
                return {
                    ...state,
                    currentX: currentX + dx >= 0 ? 0 : currentX + dx,
                    currentIndex:
                        currentIndex - Math.floor(dx / itemWidthInPercentage)
                };
            },
            () => {
                const dx = this.getLeftDx();
                if (parseInt(dx) === 0) {
                    this.setState((state) => ({
                        ...state,
                        leftButtonEnabled: false
                    }));
                }
                this.setState((state) => ({
                    ...state,
                    rightButtonEnabled: true
                }));
            }
        );
    };

    getRightDx = () => {
        const {
            itemWidth,
            itemMargin,
            ItemsInView,
            innerListWidth,
            listWidth
        } = this.listStateRef.current;
        const { currentX } = this.state;
        let dx = 0;
        let offScreenSpace =
            innerListWidth - listWidth - Math.abs((currentX / 100) * listWidth);
        let maxOffScreenItems = Math.ceil(
            offScreenSpace / (itemWidth + itemMargin)
        );
        if (maxOffScreenItems <= 0) {
            return dx;
        }
        if (maxOffScreenItems > ItemsInView) {
            dx = (itemWidth + itemMargin) * ItemsInView;
        } else {
            dx = (itemWidth + itemMargin) * maxOffScreenItems;
        }
        return (dx / listWidth) * 100;
    };

    moveRight = (e) => {
        this.setState(
            (state) => {
                const { currentX, currentIndex } = state;
                const { itemWidthInPercentage } = this.listStateRef.current;
                const dx = this.getRightDx();
                console.log(
                    "currentIndex " +
                        (currentIndex + Math.floor(dx / itemWidthInPercentage))
                );
                return {
                    currentX: currentX - dx,
                    currentIndex:
                        currentIndex + Math.floor(dx / itemWidthInPercentage)
                };
            },
            () => {
                const dx = this.getRightDx();
                if (parseInt(dx) === 0) {
                    this.setState((state) => ({
                        ...state,
                        rightButtonEnabled: false,
                        leftButtonEnabled: true
                    }));
                }
                this.setState((state) => ({
                    ...state,
                    leftButtonEnabled: true
                }));
            }
        );
    };

    render() {
        return (
            <div ref={this.listRef} css={List}>
                <ul
                    css={ListInner}
                    style={{ transform: `translateX(${this.state.currentX}%)` }}
                >
                    {React.Children.map(this.props.children, (child, i) => (
                        <li data-item={i} css={ListItem}>
                            {child}
                        </li>
                    ))}
                </ul>
                <div
                    css={Button({ prev: true })}
                    style={{
                        display: this.state.leftButtonEnabled ? "block" : "none"
                    }}
                    onClick={this.moveLeft}
                ></div>
                <div
                    css={Button()}
                    style={{
                        display: this.state.rightButtonEnabled
                            ? "block"
                            : "none"
                    }}
                    onClick={this.moveRight}
                ></div>
            </div>
        );
    }
}

const List = css`
    max-width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    position: relative;
`;

const ListInner = css`
    display: flex;
    list-style: none;
    align-items: flex-start;
    align-items: stretch;
    height: 100%;
    margin: 0;
    padding: 0;
    transform: translateX(0);
    transition: transform 0.75s ease-in-out;
`;

const ListItem = css`
    min-width: 18.5%;
    max-width: 18.5%;
    @media (min-width: 880px) {
        min-width: 13.5%;
        max-width: 13.5%;
    }
    &:not(:last-child) {
        margin: 0 5px 0 0;
    }

    & .item {
        width: 100%;
        border: 5px solid;
        border-color: transparent;
        &:hover {
            border-color: yellow;
        }
        a {
            display: flex;
        }
    }

    img {
        min-width: 100%;
        max-width: 100%;
    }
`;

const Button = (props) => css`
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
    ${props && props.prev
        ? `
    left: 5px;
  `
        : `
    right: 5px;
    transform: rotate(180deg);
  `}
`;

export default HorizontalList;

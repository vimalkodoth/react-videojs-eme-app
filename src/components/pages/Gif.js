import React, { Component } from "react";
import { css } from "@emotion/core";
import gif from './../../static/img/kid.gif';
import SubmitButton from '../SubmitButton';
import Image from '../Image';
import { Link, useHistory } from "react-router-dom";

function Gif() {
    const history = useHistory();
    const onClickHandler = () => {
        history.goBack();
    }
    return (
        <div css={Wrapper}>
            <Image src={gif} />
            <SubmitButton onClick={onClickHandler}>
            Back
            </SubmitButton>
        </div>
    )
}

export default Gif;

const Wrapper = css`
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    align-items: center;
    border: 1px solid #fff;
`;
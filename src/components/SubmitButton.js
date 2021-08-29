import React, { Component } from "react";
import { css } from "@emotion/core";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";

function SubmitButton({to, children, onClick}) {

    return (
        <React.Fragment>
            {   to ?
                <Link to={to}>
                    <input css={Input} type="submit" value={children} />
                </Link>
                : <input css={Input} type="submit" value={children} onClick={onClick}/>
            }
        </React.Fragment>
    );
}

export default SubmitButton;

const Input =  css`
    margin: 0.75rem;
    margin-left:0;
`;


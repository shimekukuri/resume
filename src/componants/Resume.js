import React from "react";
import clsx from "clsx";

export default function Resume(props) {
    const {className} = props;

    const classes = clsx(className);
    
    return(<>
        <h1 className={classes}>Resume Test</h1>
    </>);
}
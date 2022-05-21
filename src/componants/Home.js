import React from "react";
import clsx from "clsx";


export default function Home(props) {
    const {className, children, picture, ...rest} = props;
    const classes = clsx(className, "home-paragraph");

    return(<>
    <div id="home-container">
        <img id="profile" src={picture} alt="meaninful" />
        <h2 id="name-header">Tyler James Hutchinson</h2>
        <p className={classes} {...rest}>Soon to be Father, Husband, and aspiring Web-Developer.</p>
    </div>
    </>)
}
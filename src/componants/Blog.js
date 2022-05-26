import react, {useEffect, useState, useLayoutEffect} from "react";
import clsx from "clsx";
import {PortableText} from '@portabletext/react'


export default function Blog(props) {

    //const names = props.blogList.map((item) => <h1>{item.name}</h1>)
    
    const renderList = props.blogList;
    console.log(props.blogList)
    
    const handleTitleClick = (e) => {
        console.log(e.target)
    };

    return(<>
    <div id="blogtainer" onClick={handleTitleClick}>
        {props.blogList.slice(0).sort((a,b) => {
            return new Date(b._createdAt) - new Date(a._createdAt);
        }).map((item, i) => 
        <div className="bloglet" key={i}>
            <h1 className="blogletheader">{item.title}</h1>
            <h4 className="blogletdate">{item._createdAt.substring(0,10)}</h4>
            <div className={"body"}>
                <PortableText value={item.body}/>
            </div>
        </div>
)}
    </div>
    <p>{props.url}</p>
    </>);
}
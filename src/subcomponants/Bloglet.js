import React, {useState} from "react";
import { PortableText } from "@portabletext/react";
import Button from "../componants/Button";

export default function Bloglet(props) {
    const [isBlogOpen, setIsBlogOpen] = useState(false);
    const {i, item} = props;

    const handleTitleClick = () => {
        if(isBlogOpen) return;
        setIsBlogOpen(true);
    }

    const handleClosedClick = () => {
        setIsBlogOpen(!isBlogOpen);
    }


    return(<>
    <div className="bloglet" key={i} onClick={handleTitleClick} data-index={i}>
        <div className="bloglethighlight">
            <h1 className="blogletheader">{item.title}</h1>
            <h4 className="blogletdate">{item._createdAt.substring(0,10)}</h4>
            <h4 className="blogletexcerpt">{item.excerpt.map((excerp) => excerp.children.map((excer) => excer.text))}</h4>
        </div>
        { isBlogOpen && <>
        <div className={"body"} >
            <PortableText value={item.body}/>
        </div>
        <div className="buttoncontainer">
            <Button className={"blogbutton"} onClick={handleClosedClick} children={"Close"}/>
        </div>
        </>}
    </div>
    </>)
}
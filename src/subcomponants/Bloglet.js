import React, {useState} from "react";
import { PortableText } from "@portabletext/react";

export default function Bloglet(props) {
    const [isBlogOpen, setIsBlogOpen] = useState(false);
    const {i, item} = props;

    const handleTitleClick = () => {
        setIsBlogOpen(!isBlogOpen);
    }


    return(<><div className="bloglet" key={i} onClick={handleTitleClick} data-index={i}>
    <h1 className="blogletheader">{item.title}</h1>
    <h4 className="blogletdate">{item._createdAt.substring(0,10)}</h4>
    { isBlogOpen && <div className={"body"} >
        <PortableText value={item.body}/>
    </div>}
</div></>)
}
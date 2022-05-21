import React from "react";
import clsx from "clsx";
import {TwitterTimelineEmbed} from "react-twitter-embed"

export default function Twitter(props) {    


    return (<>
    <div className="twittercontainer">
            <TwitterTimelineEmbed sourceType="profile" screenName="shimeku" options={{height:500, width:600}}/>
    </div>
    </>);
}
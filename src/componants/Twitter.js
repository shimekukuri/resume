import React from "react";
import {TwitterTimelineEmbed} from "react-twitter-embed"

export default function Twitter(props) {    

    return (<>
    <div className="twittercontainer">
            <TwitterTimelineEmbed sourceType="profile" screenName="shimeku" options={{height:700, width:400}}/>
    </div>
    </>);
}
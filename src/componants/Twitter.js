import React from "react";
import {TwitterTimelineEmbed} from "react-twitter-embed"

export default function Twitter(props) {    

    return (<>
    <div className="twittercontainer">
        <div className="twitterframe">
            <TwitterTimelineEmbed sourceType="profile" screenName="shimeku" options={{height:(window.screen.height - 200), width:1000}}/>
        </div>
    </div>
    </>);
}
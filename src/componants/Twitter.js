import React, { useState, useEffect } from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";

export default function Twitter(props) {
  const [sudoLoad, setSudoLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
        setSudoLoad(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="twittercontainer">
        {sudoLoad && <div className="loader"></div>}
        <div className="twitterframe">
          { !sudoLoad && <TwitterTimelineEmbed
            sourceType="profile"
            screenName="shimeku"
            options={{ height: window.screen.height - (window.screen.height * 0.055), width: 1000 }}
          />}
        </div>
      </div>
    </>
  );
}

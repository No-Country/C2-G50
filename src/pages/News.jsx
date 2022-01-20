import React from "react";
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
import Menu from "../components/menu/Menu";

const News = () => {
    return (
        <><Menu />
<div className="centerContent">
<div className="selfCenter standardWidth">
<TwitterTimelineEmbed
    sourceType="list" id={220100704}
  theme="dark"
  options={{width: 400, height: 600}}
/>

</div>
</div>
</>
    );
  };
  
  export default News;
import React from "react";
import { TwitterTimelineEmbed} from 'react-twitter-embed';
import Menu from "../../components/menu/Menu";

const News = () => {
  return (
    <>
      <div className="container">
        <Menu />
          <main className="dashboard__container selfCenter standardWidth">
            <TwitterTimelineEmbed
              sourceType="list" id={220100704}
              theme="dark"
              options={{width: 1000, height: 600}}/>
          </main>

      </div>
    </>
  );
};
  
  export default News;
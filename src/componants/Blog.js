import React from "react";
import Bloglet from "../subcomponants/Bloglet";

export default function Blog(props) {
  //const names = props.blogList.map((item) => <h1>{item.name}</h1>)

  console.log(props.blogList);

  return (
    <>
      <div id="blogtainer">
        {props.blogList.length > 0 ? (
          props.blogList
            .slice(0)
            .sort((a, b) => {
              return new Date(b._createdAt) - new Date(a._createdAt);
            })
            .map((item, i) => <Bloglet item={item} i={i} key={i} />)
        ) : (
          <h1>Trouble getting bloglist</h1>
        )}
      </div>
    </>
  );
}

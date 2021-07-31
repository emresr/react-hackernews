import React, { useState, useEffect } from "react";
import { BiUpArrow } from "react-icons/bi";

const Comment = ({ comment, treepos }) => {
   const [hidden, setHidden] = useState(false);
   return (
      <div className={`ml-${treepos * 8}`}>
         {hidden ? (
            <div>
               <div className="flex ">
                  <h1 className="text-xs text-gray-600 my-auto ml-6">
                     <span className="  ">
                        <a href="/profile">emre</a>
                     </span>{" "}
                     <span className=" ">
                        <a href="/post/1"> 57 minutes ago</a>
                     </span>
                  </h1>
                  <div className="my-auto mx-1">
                     <a
                        href="#"
                        className="text-gray-600 text-xs"
                        onClick={() => {
                           setHidden(false);
                        }}
                     >
                        [2 more]
                     </a>
                  </div>
               </div>
            </div>
         ) : (
            <div>
               <div className="flex ">
                  <div className="w-6">
                     <button onClick={() => console.log("lmao")}>
                        <BiUpArrow size={10} />
                     </button>
                  </div>
                  <h1 className="text-xs text-gray-600 my-auto">
                     <span className="  ">
                        <a href="/profile">emre</a>
                     </span>{" "}
                     <span className=" ">
                        <a href="/post/1"> 57 minutes ago</a>
                     </span>
                  </h1>
                  <div className="my-auto mx-1">
                     <a
                        href="#"
                        className="text-gray-600 text-xs"
                        style={{ color: "" }}
                        onClick={() => {
                           setHidden(true);
                        }}
                     >
                        [–]
                     </a>
                  </div>
               </div>
               <div className="ml-6">
                  <h1 className=" text-xs">{comment}</h1>
                  <a href="#" className="text-xs underline">
                     reply
                  </a>
               </div>
            </div>
         )}
      </div>
   );
};

export default Comment;

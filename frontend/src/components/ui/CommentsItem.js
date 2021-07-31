import React, { useState } from "react";
import { BiUpArrow } from "react-icons/bi";

const CommentsItem = ({ comment, isList }) => {
   const [hidden, setHidden] = useState(false);
   return (
      <tr className="">
         <td>
            {" "}
            {!hidden ? (
               <button onClick={() => console.log("lmao")}>
                  <BiUpArrow size={10} />
               </button>
            ) : (
               <span>&nbsp;</span>
            )}
         </td>
         <td>
            <div className="flex  divide-x-2 text-gray-600 text-xs space-x-2 ">
               <h1 className="text-xs text-gray-600 my-auto">
                  <span className="  ">
                     <a href="/user/1" className="hover:underline">
                        {comment.user.name}
                     </a>
                  </span>{" "}
                  <span className=" ">
                     <a
                        href={`/comment/${comment.id}`}
                        className="hover:underline"
                     >
                        {" "}
                        57 minutes ago
                     </a>
                  </span>
               </h1>
               <div>
                  <a href="#" className="pl-2 hover:underline">
                     parent{" "}
                  </a>{" "}
                  {isList && (
                     <a
                        href="#"
                        className="text-gray-600 text-xs"
                        style={{ color: "" }}
                        onClick={() => {
                           setHidden(!hidden);
                        }}
                     >
                        {!hidden ? "[–]" : "[1 more]"}
                     </a>
                  )}
               </div>
               {!isList && (
                  <a href="#" className="pl-2 hover:underline">
                     favorite
                  </a>
               )}
               <span href="#" className="pl-2 text-gray-600">
                  on:{" "}
                  {comment.post && (
                     <a
                        href={`/post/${comment.post.id}`}
                        className="hover:underline"
                     >
                        {comment.post.title}{" "}
                     </a>
                  )}
               </span>
            </div>
            {!hidden && <h1 className=" text-xs">{comment.text}</h1>}
            {!isList && (
               <div>
                  {" "}
                  <textarea
                     className="w-96 border-black border rounded-md mt-10"
                     style={{ minHeight: "90px" }}
                  />
                  <br />
                  <button className="text-xs px-1 py-0.5 bg-yellow-300 border border-black rounded-lg">
                     add comment
                  </button>
               </div>
            )}
         </td>
      </tr>
   );
};

export default CommentsItem;

import React from "react";
import { useQuery } from "@apollo/client";
import { GET_POST } from "../gql/post/query";
import { useParams } from "react-router-dom";
import { BiUpArrow } from "react-icons/bi";
import Comment from "./ui/Comment";

const Post = () => {
   const url = useParams();

   const { data, error, loading } = useQuery(GET_POST, {
      variables: {
         id: parseInt(url.id),
      },
   });

   console.log(data);
   console.log("lmao");

   return (
      <div>
         {!loading && data && (
            <main className="p-3 ">
               {" "}
               <div className="flex">
                  <div className="my-auto w-6">
                     <button onClick={() => console.log("lmao")}>
                        <BiUpArrow size={16} />
                     </button>
                  </div>{" "}
                  <h1 className=" text-sm"> {data.post.title}</h1>
               </div>
               <div className="ml-6">
                  <div className="">
                     <h1 className="text-xs text-gray-600">
                        52 points by{" "}
                        <span className="  ">
                           <a href="/profile">emre</a>
                        </span>{" "}
                        <span className=" ">
                           <a href="/post/1"> 57 minutes ago</a>
                        </span>
                     </h1>
                  </div>
                  <div className=" mt-1 md:mt-5">
                     <p className="text-black-300 text-sm">
                        {data.post.content}
                     </p>
                  </div>
                  <textarea
                     className="w-1/2 border-black border rounded-md mt-10"
                     style={{ minHeight: "90px" }}
                  />
                  <div>
                     <button className="text-xs px-1 py-0.5 bg-yellow-300 border border-black rounded-lg">
                        add comment
                     </button>
                  </div>
                  <div className="mt-5 space-y-3">
                     <Comment
                        comment="I'm not sure I would call this relatively easy even without joins. Without joins Google Cloud Firestore does exactly what you're describing. The initial query runs against the DB then the client gets a filtered stream of updates to only that query. Its distributed and scales logarithmically with the number of queries, as it doesn't need to keep the query results in memory/materialized.
"
                     />
                     <Comment
                        comment="I'm not sure I would call this relatively easy even without joins. Without joins Google Cloud Firestore does exactly what you're describing. The initial query runs against the DB then the client gets a filtered stream of updates to only that query. Its distributed and scales logarithmically with the number of queries, as it doesn't need to keep the query results in memory/materialized.
"
                        treepos="1"
                     />
                  </div>
               </div>
            </main>
         )}
      </div>
   );
};

export default Post;

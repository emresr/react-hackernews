import React from "react";
import { GET_COMMENTS } from "../gql/comment/query";
import { useQuery } from "@apollo/client";
import CommentsItem from "./ui/CommentsItem";

const Comments = () => {
   const { data, loading } = useQuery(GET_COMMENTS);
   console.log(data);
   return (
      <div>
         {!loading &&
            data &&
            data.comments &&
            data.comments.map((comment) => (
               <CommentsItem isList="true" comment={comment} />
            ))}
      </div>
   );
};
export default Comments;

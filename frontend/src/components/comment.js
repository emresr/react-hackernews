import React from "react";
import { GET_COMMENT } from "../gql/comment/query";
import { useQuery } from "@apollo/client";
import CommentsItem from "./ui/CommentsItem";
import { useParams } from "react-router-dom";

const Comment = () => {
   let { id } = useParams();

   console.log(id);
   const { data, loading } = useQuery(GET_COMMENT, {
      variables: {
         id: 1,
      },
   });
   console.log(data);

   return data && <CommentsItem comment={data.comment} isList={false} />;
};

export default Comment;

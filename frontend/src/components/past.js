import React from "react";
import { useQuery, gql } from "@apollo/client";
import { GET_POSTS } from "../gql/post/query";
import Feed from "./ui/Feed";

const Past = () => {
   const { data } = useQuery(GET_POSTS);

   return (
      <div>
         <div>
            <h1>
               Stories from April 22, 2020 Go back a day, month, or year. Go
               forward a day, month, or year.
            </h1>
         </div>{" "}
         <Feed data={data} />
      </div>
   );
};
export default Past;

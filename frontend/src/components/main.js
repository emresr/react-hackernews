import React from "react";
import { useQuery, gql } from "@apollo/client";
import { GET_POSTS } from "../gql/post/query";
import Feed from "./ui/Feed";

const Main = () => {
   const { data } = useQuery(GET_POSTS);
   console.log(data);
   return <Feed data={data} />;
};
export default Main;

import React from "react";
import {
   GET_USER_POSTS,
   GET_USER_INFO,
   CHECK_TOKEN,
} from "../gql/profile/query";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

const User = () => {
   const url = useParams();
   const { data, loading } = useQuery(GET_USER_POSTS, {
      variables: {
         id: parseInt(url.id),
      },
   });
   !loading && data && console.log(data);
   const { data: userId, loading: idLoading } = useQuery(CHECK_TOKEN, {
      variables: {
         token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsImlhdCI6MTYyMTgwMjAwNX0.8Q-GH_uzrnV04qzidZ0WKoa7WsY-TtWO6npSsglli10",
      },
   });

   return (
      <div>
         {!idLoading && (
            <div>
               {" "}
               {url.id !== userId.checkToken.id ? (
                  <div>
                     <table class="mt-3 ml-1 text-gray-500 font-normal">
                        <tbody>
                           <tr>
                              <td class="">user:</td>
                              <td class=" ">
                                 <a href="#">{data.user.email}</a>
                              </td>
                           </tr>
                           <tr>
                              <td class="">created:</td>
                              <td class=" ">
                                 {" "}
                                 <a href="#">{data.user.createdAt}</a>
                              </td>
                           </tr>
                           <tr>
                              <td class="">karma:</td>
                              <td class=" "> {data.user.karma}</td>
                           </tr>
                           <tr>
                              <td class="">about:</td>
                              <td class=" "> {data.user.about}</td>
                           </tr>
                           <tr>
                              <td class=""></td>
                              <td class=" ">
                                 <a href="#" className="underline text-black">
                                    submissions
                                 </a>
                              </td>
                           </tr>
                           <tr>
                              <td class=""></td>
                              <td class=" ">
                                 <a href="#" className="underline text-black">
                                    comments
                                 </a>
                              </td>
                           </tr>
                           <tr>
                              <td class=""></td>
                              <td class=" ">
                                 <a href="#" className="underline text-black">
                                    favorites
                                 </a>
                              </td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
               ) : (
                  <div>
                     <table class="mt-3 ml-1 text-gray-500 font-normal">
                        <tbody className="">
                           <tr>
                              <td class="">user:</td>
                              <td class=" ">
                                 <a href="#">emre</a>
                              </td>
                           </tr>
                           <tr>
                              <td class="">created:</td>
                              <td class=" ">
                                 {" "}
                                 <a href="#">December 1, 2014</a>
                              </td>
                           </tr>
                           <tr>
                              <td class="">karma:</td>
                              <td class=" "> 3280</td>
                           </tr>
                           <tr>
                              <td class="">about:</td>
                              <td class=" overflow-hidden">
                                 <textarea className="bg-white border border-gray-600 rounded-sm" />
                                 <a className="text-xs text-gray-400 ml-1">
                                    help
                                 </a>
                              </td>
                           </tr>
                           <tr>
                              <td class="">email:</td>
                              <td class=" ">
                                 <input className="bg-white border border-gray-600 rounded-sm" />
                              </td>
                           </tr>
                           <tr>
                              <td class="">showdead:</td>
                              <td class=" ">
                                 <select className="border-gray-600 rounded-sm">
                                    <option>no</option>
                                    <option>yes</option>
                                 </select>
                              </td>
                           </tr>
                           <tr>
                              <td class="">noprocrast:</td>
                              <td class=" ">
                                 <select className="border-gray-600 rounded-sm">
                                    <option>no</option>
                                    <option>yes</option>
                                 </select>
                              </td>
                           </tr>
                           <tr>
                              <td class="">maxvisit:</td>
                              <td class=" ">
                                 <input className="bg-white border border-gray-600 rounded-sm" />
                              </td>
                           </tr>
                           <tr>
                              <td class="">minaway:</td>
                              <td class=" ">
                                 <input className="bg-white border border-gray-600 rounded-sm" />
                              </td>
                           </tr>
                           <tr>
                              <td class="">delay:</td>
                              <td class=" ">
                                 <input className="bg-white border border-gray-600 rounded-sm" />
                              </td>
                           </tr>
                           <tr>
                              <td class=""></td>
                              <td class=" ">
                                 <a href="#" className="underline text-black">
                                    change password
                                 </a>
                              </td>
                           </tr>
                           <tr>
                              <td class=""></td>
                              <td class=" ">
                                 <a href="#" className="underline text-black">
                                    submissions
                                 </a>
                              </td>
                           </tr>

                           <tr>
                              <td class=""></td>
                              <td class=" ">
                                 <a href="#" className="underline text-black">
                                    comments
                                 </a>
                              </td>
                           </tr>
                           <tr>
                              <td class=""></td>
                              <td class=" ">
                                 <a href="#" className="underline text-black">
                                    hidden
                                 </a>
                              </td>
                           </tr>
                           <tr>
                              <td class=""></td>
                              <td class=" ">
                                 <a href="#" className="underline text-black">
                                    upvoted submissions
                                 </a>{" "}
                                 /{" "}
                                 <a href="#" className="underline text-black">
                                    comments
                                 </a>{" "}
                                 (private)
                              </td>
                           </tr>
                           <tr>
                              <td class=""></td>
                              <td class=" ">
                                 <a href="#" className="underline text-black">
                                    upvoted submissions
                                 </a>{" "}
                                 /{" "}
                                 <a href="#" className="underline text-black">
                                    comments
                                 </a>{" "}
                                 (shared)
                              </td>
                           </tr>
                        </tbody>
                     </table>
                     <input
                        type="submit"
                        value="update"
                        className="bg-white border border-gray-600 rounded-sm py-0.25 px-1.5 text-xs"
                     />
                  </div>
               )}
            </div>
         )}
      </div>
   );
};
export default User;

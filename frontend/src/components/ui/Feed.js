import React, { useState, useEffect } from "react";
import { BiUpArrow } from "react-icons/bi";

const Feed = ({ data }) => {
   return (
      <div className="mt-3 ml-2">
         <table>
            <tr>
               {data &&
                  data.posts.map((post, index) => (
                     <table>
                        <tr>
                           <td>{index + 1}.</td>
                           <td>
                              <button>
                                 <BiUpArrow size={16} />
                              </button>
                           </td>
                           <td>
                              <a
                                 className="w-full text-md"
                                 href={`/post/${post.id}`}
                              >
                                 {post.title}
                              </a>
                           </td>
                        </tr>{" "}
                        <tr>
                           <td></td>
                           <td></td>
                           <td>
                              <h1 className="text-xs text-gray-600">
                                 52 points by{" "}
                                 <span className=" ">
                                    <a
                                       href={`/user/${post.author.id}`}
                                       className="hover:underline "
                                    >
                                       {post.author.email}
                                    </a>
                                 </span>{" "}
                                 <span className="  divide-x divide-gray-500 txt-xs">
                                    <a
                                       href={`/post/${post.id}`}
                                       className=" hover:underline "
                                    >
                                       {" "}
                                       57 minutes ago
                                    </a>
                                    <a
                                       href="#"
                                       className="w-full text-md hover:underline mx-2 mr-3 "
                                    >
                                       {" "}
                                       hide
                                    </a>
                                    <a
                                       href="#"
                                       className="w-full text-md hover:underline "
                                    >
                                       {" "}
                                       4 comments
                                    </a>
                                 </span>
                              </h1>
                           </td>
                        </tr>
                        <tr className="h-5"></tr>
                     </table>
                  ))}
            </tr>
            <tr>
               <table>
                  <tr>
                     <td></td>
                     <td></td>
                     <td>More</td>{" "}
                  </tr>{" "}
               </table>
            </tr>
         </table>
      </div>
   );
};

export default Feed;

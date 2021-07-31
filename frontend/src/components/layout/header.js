import React from "react";
import { useState } from "react";
import { AUTH_TOKEN } from "../../constants";

const Header = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const authToken = localStorage.getItem(AUTH_TOKEN);

   return (
      <div
         className=" text-black flex justify-between text-xs"
         style={{ background: "#FF6600" }}
      >
         <div className="relative flex items-center  text-black space-x-2">
            <a href="/" className="inline-flex items-center">
               <span className="ml-2 text-md font-bold tracking-wide ">
                  ReactHN
               </span>
            </a>
            <div className="flex text-md text-extrabold divide-x-2 divide-black">
               <div>
                  <a href="/newest" className=" mx-2">
                     new
                  </a>
               </div>
               <div>
                  <a href="/past" className=" mx-2 ">
                     past
                  </a>
               </div>
               <div>
                  <a href="/comments" className="mx-2">
                     comments
                  </a>
               </div>
               <div>
                  <a href="/ask" className="mx-2">
                     ask
                  </a>
               </div>
               <div>
                  <a href="/show" className="mx-2">
                     show
                  </a>
               </div>
               <div>
                  <a href="/jobs" className="mx-2">
                     jobs
                  </a>
               </div>

               <div>
                  <a href="/submit" className=" mx-2">
                     submit
                  </a>
               </div>
            </div>
         </div>
         <div className=" my-auto">
            {authToken ? (
               <div className="flex divide-x-2 divide-black space-x-2">
                  <a href="/user/1" className="">
                     emresr<span className="tracking-widest"> (1)</span>
                  </a>
                  <a
                     onClick={() => {
                        localStorage.removeItem(AUTH_TOKEN);
                     }}
                  >
                     <h1 className="mx-1.5">logout</h1>
                  </a>
               </div>
            ) : (
               <div>
                  <a href="/login" className="mr-3">
                     login
                  </a>
               </div>
            )}
         </div>
      </div>
   );
};
export default Header;

import React from "react";

const Footer = () => {
   return (
      <div className="space-y-3 mt-6">
         <div className="w-full h-0.5 bg-yellow-600" />
         <div className="flex justify-center">
            <div className="space-y-3">
               <div className="flex divide-x-2 space-x-2 divide-gray-300">
                  <a href="#">
                     <h1 className="text-xs">Guidelines</h1>
                  </a>
                  <a href="#">
                     <h1 className="ml-2 text-xs">FAQ</h1>
                  </a>
                  <a href="#">
                     <h1 className="ml-2 text-xs focus:text-gray-500">Lists</h1>
                  </a>
                  <a href="#">
                     <h1 className="ml-2 text-xs focus:text-gray-500">
                        Security
                     </h1>
                  </a>{" "}
                  <a href="#">
                     <h1 className="ml-2 text-xs focus:text-gray-500">Legal</h1>
                  </a>
                  <a href="#">
                     <h1 className="ml-2 text-xs">Apply to YC</h1>
                  </a>
                  <a href="#">
                     <h1 className="ml-2 text-xs">Contact</h1>
                  </a>
               </div>
               <div className="flex justify-center space-x-1.5">
                  <h1 className="text-sm text-gray-600 my-auto">Search:</h1>
                  <input className="bg-white border border-gray-600 rounded-sm h-6 w-36" />
               </div>
            </div>
         </div>
      </div>
   );
};
export default Footer;

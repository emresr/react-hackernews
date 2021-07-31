import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { useHistory } from "react-router";
import { CREATE_POST } from "../gql/post/mutation";

const New = () => {
   const history = useHistory();
   const [formState, setFormState] = useState({
      title: "",
      content: "",
   });
   const [createLink] = useMutation(CREATE_POST, {
      variables: {
         title: formState.title,
         content: formState.content,
      },
   });

   return (
      <div className="mt-2 md:mt-4 mx-4 md:mx-6">
         <form
            onSubmit={(e) => {
               e.preventDefault();
               createLink();
            }}
         >
            <div className="">
               <input
                  className="mb2"
                  value={formState.title}
                  onChange={(e) =>
                     setFormState({
                        ...formState,
                        title: e.target.value,
                     })
                  }
                  type="text"
                  placeholder="Title"
               />
               <br />
               <textarea
                  style={{ minHeight: "100px" }}
                  className="mt-2 md:mt-5 w-1/2"
                  value={formState.content}
                  onChange={(e) =>
                     setFormState({
                        ...formState,
                        content: e.target.value,
                     })
                  }
                  type="text"
                  placeholder="Content"
               />
            </div>
            <button type="submit">Submit</button>
         </form>
      </div>
   );
};

export default New;

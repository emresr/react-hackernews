import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Hello from "../components/hello";

let container = null;
beforeEach(() => {
   // setup a DOM element as a render target
   container = document.createElement("div");
   document.body.appendChild(container);
});

afterEach(() => {
   // cleanup on exiting
   unmountComponentAtNode(container);
   container.remove();
   container = null;
   //console.log("passed 1");
});

it("renders with or without a name", () => {
   act(() => {
      render(<Hello />, container);
   });
   expect(container.textContent).toBe("Hey, stranger");
});

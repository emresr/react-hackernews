import React from "react";
import { screen, render } from "@testing-library/react";

import Feed from "../components/feed";

it("renders feed a link correctly", () => {
   const { getByTextId } = render(<Feed />);
});

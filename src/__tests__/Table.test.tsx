import React from "react";
import { render } from "@testing-library/react";
import Tableview from "../app/components/main-components/Table/Table";

describe("<App />", () => {
  test("Should render the app Layout", async () => {
    render(<Tableview />);
  });
});

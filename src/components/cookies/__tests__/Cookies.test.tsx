import React from "react";
import { render } from "@testing-library/react";

import Cookies from "../Cookies";

describe("Cookies component", () => {
  it("displays a header", () => {
    const { getByRole } = render(<Cookies cookieString={""} />);

    expect(getByRole("heading")).toHaveTextContent("Cookies");
  });

  it("displays a table of cookie name-values", () => {
    const { getAllByRole, getByText } = render(
      <Cookies cookieString={"name1=value1; name2=value2"} />
    );

    const tableCells = getAllByRole("row");
    expect(tableCells).toHaveLength(3);

    // The first item in the list here is the static header row
    const [, firstRow, secondRow] = tableCells;

    expect(firstRow).toContainElement(getByText("name1"));
    expect(firstRow).toContainElement(getByText("value1"));
    expect(secondRow).toContainElement(getByText("name2"));
    expect(secondRow).toContainElement(getByText("value2"));
  });

  it("displays a message if no cookies are present", () => {
    const { getByText } = render(<Cookies cookieString={""} />);

    expect(getByText("No cookies found!")).toBeInTheDocument();
  });
});

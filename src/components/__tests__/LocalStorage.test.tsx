import { render } from "@testing-library/react";
import React from "react";

import LocalStorage from "../LocalStorage";

describe("LocalStorage component", () => {
  const mockStorage = ({
    name1: "value1",
    name2: "value2",
  } as unknown) as Storage;

  it("displays a header", () => {
    const { getByRole } = render(<LocalStorage localStorage={mockStorage} />);

    expect(getByRole("heading")).toHaveTextContent("Local Storage");
  });

  it("displays a message if storage is empty", () => {
    const { getByText } = render(<LocalStorage localStorage={{} as Storage} />);

    expect(getByText("Nothing found in local storage!")).toBeInTheDocument();
  });

  it("displays contents of storage in a table", () => {
    const { getAllByRole, getByText } = render(
      <LocalStorage localStorage={mockStorage} />
    );

    const tableRows = getAllByRole("row");
    expect(tableRows).toHaveLength(3);

    // The first item in the list here is the static header row
    const [, firstRow, secondRow] = tableRows;

    expect(firstRow).toContainElement(getByText("name1"));
    expect(firstRow).toContainElement(getByText(`"value1"`));
    expect(secondRow).toContainElement(getByText("name2"));
    expect(secondRow).toContainElement(getByText(`"value2"`));
  });
});

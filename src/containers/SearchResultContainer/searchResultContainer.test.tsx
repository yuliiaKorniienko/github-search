import "@testing-library/jest-dom";

import * as React from "react";
import { render, screen } from "@testing-library/react";
import SearchResultContainer from "../SearchResultContainer";

const noItemsMessage =
  "Sorry, nothing came up. Try again with a different search query.";
const loadingMessage = "Loading...";

test("shows message if there are no results", () => {
  render(<SearchResultContainer loading={false} itemsList={[]} />);
  expect(screen.getByText(noItemsMessage)).toBeInTheDocument();
});

test("shows loading message", () => {
  render(<SearchResultContainer loading={true} itemsList={[]} />);
  expect(screen.getByText(loadingMessage)).toBeInTheDocument();
});

test("shows nothing", () => {
  const loadingMessage = "Loading...";
  render(<SearchResultContainer loading={false} itemsList={null} />);
  const noItemsElement = screen.queryByText(noItemsMessage);
  const loadingElement = screen.queryByText(loadingMessage);
  expect(noItemsElement).toBeNull();
  expect(loadingElement).toBeNull();
});

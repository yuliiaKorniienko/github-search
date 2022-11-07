import "@testing-library/jest-dom";

import * as React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SearchForm from "../SearchForm";

test("check users radio button", () => {
  render(
    <SearchForm
      searchType="organizations"
      onSubmit={() => new Promise(() => undefined)}
      setSearchType={() => {}}
      searchValue=""
      onChange={() => {}}
    />
  );
  const usersRadioButton = screen.getByLabelText("Find users");
  const organizationsRadioButton = screen.getByLabelText("Find organizations");

  expect(usersRadioButton).not.toBeChecked();
  expect(organizationsRadioButton).toBeChecked();
  fireEvent.change(usersRadioButton, { target: { checked: true } });
  expect(usersRadioButton).toBeChecked();
  expect(organizationsRadioButton).not.toBeChecked();
});

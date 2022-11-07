import React from "react";

export type TProps = {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  searchType: string;
  setSearchType: (value: string) => void;
  searchValue: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

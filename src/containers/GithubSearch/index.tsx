import React, { useState } from "react";

import SearchSettings from "../SearchSettings";
import SearchResultContainer from "../SearchResultContainer";
import { TSearchResultItem } from "../SearchResultContainer/types";
import styles from "./githubSearch.module.scss";

const GithubSearch = () => {
  const [itemsList, setItemsList] = useState<TSearchResultItem[] | null>(null);
  const [loading, setLoading] = useState(false);

  return (
    <main className={styles.container}>
      <SearchSettings setLoading={setLoading} setItemsList={setItemsList} />
      <SearchResultContainer loading={loading} itemsList={itemsList} />
    </main>
  );
};

export default GithubSearch;

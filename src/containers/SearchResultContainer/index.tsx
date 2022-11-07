import React, { memo } from "react";

import SearchResultItem from "../../components/SearchResultItem";
import Loader from "../../components/Loader";
import { TProps } from "./types";
import styles from "./SearchResultContainer.module.scss";

const SearchResultContainer = ({ itemsList, loading }: TProps) => {
  if (loading) {
    return (
      <div className={styles.wrapper}>
        <Loader />
        <p>Loading...</p>
      </div>
    );
  }

  if (!itemsList) {
    return null;
  }

  if (!itemsList.length) {
    return (
      <div className={styles.wrapper}>
        <p>Sorry, nothing came up. Try again with a different search query.</p>
      </div>
    );
  }
  return (
    <div className={styles.items}>
      {itemsList.map(({ id, login, html_url, avatar_url }) => (
        <SearchResultItem
          key={id}
          login={login}
          link={html_url}
          avatar={avatar_url}
        />
      ))}
    </div>
  );
};

export default memo(SearchResultContainer);

import React from "react";

import { TSearchResultItem } from "./types";
import styles from "./item.module.scss";

const SearchResultItem = ({ login, link, avatar }: TSearchResultItem) => {
  return (
    <div className={styles.item}>
      <div className={styles.item_avatar}>
        <img src={avatar} alt="user avatar" width="60" height="60" />
      </div>
      <div className={styles.item_info}>
        <div className={styles.item_login}>{login}</div>
        <div>
          <a
            className={styles.item_link}
            href={link}
            target="_blank"
            rel="noreferrer"
          >
            Open GitHub profile
          </a>
        </div>
      </div>
    </div>
  );
};

export default SearchResultItem;

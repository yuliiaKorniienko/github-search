import React from "react";

import { TProps } from "./types";
import styles from "./paginationButtons.module.scss";

const PaginationButtons = ({
  page,
  lastPage,
  onClickPrevButton,
  onClickNextButton,
  searchValue,
}: TProps) => {
  return (
    <div className={styles.pagination}>
      <button
        type="button"
        className={styles.pagination_button}
        disabled={page === 1 || !searchValue}
        onClick={onClickPrevButton}
      >
        Prev
      </button>
      <button
        type="button"
        className={styles.pagination_button}
        disabled={page === lastPage || !lastPage || !searchValue}
        onClick={onClickNextButton}
      >
        Next
      </button>
    </div>
  );
};

export default PaginationButtons;

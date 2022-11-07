import React from "react";

import { TProps } from "./types";
import { TYPE } from "../../constants/common";
import styles from "./searchForm.module.scss";

const SearchForm = ({
  onSubmit,
  searchType,
  setSearchType,
  searchValue,
  onChange,
}: TProps) => {
  return (
    <form
      onSubmit={onSubmit}
      className={styles.form}
      aria-label="GitHub search"
    >
      <section>
        <h1>GitHub search</h1>
        <fieldset className={styles.fieldset}>
          <legend aria-labelledby="Filter by" className={styles.legend}>
            Filter by
          </legend>
          <div className={styles.radio_button}>
            <input
              type="radio"
              name="search_type"
              id="users"
              value={TYPE.USERS}
              checked={searchType === TYPE.USERS}
              onChange={(e) => setSearchType(e.target.value)}
            />
            <label aria-labelledby="users" htmlFor="users">
              Find users
            </label>
          </div>
          <div className={styles.radio_button}>
            <input
              type="radio"
              name="search_type"
              id="organizations"
              value={TYPE.ORGANIZATIONS}
              checked={searchType === TYPE.ORGANIZATIONS}
              onChange={(e) => setSearchType(e.target.value)}
            />
            <label aria-labelledby="organizations" htmlFor="organizations">
              Find organizations
            </label>
          </div>
        </fieldset>
        <div className={styles.search}>
          <label
            aria-labelledby="Search query"
            className={styles.search_label}
            htmlFor="search"
          >
            Search query
          </label>
          <input
            className={styles.search_input}
            value={searchValue}
            type="search"
            id="search"
            name="search_input"
            placeholder="Enter a search query"
            onChange={onChange}
          />
        </div>
        <div className={styles.submit}>
          <button
            className={styles.submit_button}
            type="submit"
            disabled={!searchValue.length}
          >
            Search
          </button>
        </div>
      </section>
    </form>
  );
};

export default SearchForm;

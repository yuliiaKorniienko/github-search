import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { TProps } from "./types";
import { FIRST_PAGE, PER_PAGE, TYPE } from "../../constants/common";
import fetchWithError from "../../utils/asyncThrowableFetch";
import PaginationButtons from "../../components/PaginationButtons";
import SearchForm from "../../components/SearchForm";

const SearchSettings = ({ setLoading, setItemsList }: TProps) => {
  const { value: urlSearchValue } = useParams();
  const [page, setPage] = useState(FIRST_PAGE);
  const [lastPage, setLastPage] = useState<number | null>(null);
  const [searchType, setSearchType] = useState(TYPE.USERS);
  const [searchValue, setSearchValue] = useState(urlSearchValue || "");

  const filter =
    searchType === TYPE.USERS ? searchValue : `${searchValue} type:org`;

  const fetchItems = async (page: number) => {
    const paramsObj = {
      q: filter,
      page: page.toString(),
      per_page: PER_PAGE.toString(),
    };
    const searchParams = new URLSearchParams(paramsObj);

    setLoading(true);
    try {
      const { items, total_count } = await fetchWithError(
        `https://api.github.com/search/users?${searchParams}`
      );
      if (page === FIRST_PAGE) {
        const lastPageNumber = Math.ceil(total_count / PER_PAGE);
        setLastPage(lastPageNumber);
      }
      setItemsList(items);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchItems(FIRST_PAGE);
    setPage(FIRST_PAGE);
  };

  useEffect(() => {
    if (urlSearchValue) {
      fetchItems(FIRST_PAGE);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    global.history.replaceState(null, "", `/search/${e.target.value}`);
    setSearchValue(e.target.value);
  };

  const onClickPrevButton = () => {
    setPage((prevState) => prevState - 1);
    fetchItems(page - 1);
  };

  const onClickNextButton = () => {
    setPage((prevState) => prevState + 1);
    fetchItems(page + 1);
  };

  return (
    <>
      <SearchForm
        onSubmit={onSubmit}
        searchType={searchType}
        setSearchType={setSearchType}
        searchValue={searchValue}
        onChange={onChange}
      />
      <PaginationButtons
        page={page}
        lastPage={lastPage}
        onClickPrevButton={onClickPrevButton}
        onClickNextButton={onClickNextButton}
        searchValue={searchValue}
      />
    </>
  );
};

export default SearchSettings;

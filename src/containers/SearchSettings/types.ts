import { TSearchResultItem } from "../SearchResultContainer/types";

export type TProps = {
  setLoading: (value: boolean) => void;
  setItemsList: (value: TSearchResultItem[]) => void;
};

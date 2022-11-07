export type TProps = {
  page: number;
  lastPage: number | null;
  onClickPrevButton: () => void;
  onClickNextButton: () => void;
  searchValue: string;
};

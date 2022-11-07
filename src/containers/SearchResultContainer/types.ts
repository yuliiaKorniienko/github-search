export type TSearchResultItem = {
  id: string;
  login: string;
  html_url: string;
  avatar_url: string;
};

export type TProps = {
  itemsList: TSearchResultItem[] | null;
  loading: boolean;
};

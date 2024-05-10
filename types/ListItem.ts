export interface IListItem {
  title: string;
  subtitle: string;
  image: string;
  extraData: string;
  locked?: boolean;
  onClick: () => void;
}

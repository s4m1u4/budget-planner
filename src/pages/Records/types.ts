import { ICategory, IHistory } from "types";

export interface RecordsProps {
  limit: number;
  histories: IHistory[];
  getHistories: (page?: number | null, limit?: number | null) => void;
  getFilteredHistories: (type: string, category: string, page: number) => void;
  deleteAllHistories: () => void;
  deleteHistory: (id: string) => void;
  categories: ICategory[];
  getCategories: () => void;
}

export interface IFilters {
  type: string;
  category: string;
}

export interface IPasswordData {
  password: string;
  repeatedPassword: string;
}

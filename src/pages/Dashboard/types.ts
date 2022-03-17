import { ICategory, IHistory, IRecord } from "types";

export interface DashboardProps {
  records: IRecord[];
  histories: IHistory[];
  categories: ICategory[];
  getHistories: (page?: number | null, limit?: number | null) => void;
  getCategories: () => void;
  setNewHistory: (historyData: IHistoryData) => void;
  setNewCategory: (categoryData: ICategoryData) => void;
  deleteCategory: (id: string) => void;
}

export interface IHistoryData {
  type: string;
  amount: string;
  category: string;
}

export interface ICategoryData {
  title: string;
  description: string;
}

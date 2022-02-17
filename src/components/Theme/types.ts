import { ReactChild, ReactNode } from "react";

export interface ThemeProps {
  theme: string;
  children: ReactChild | ReactNode;
}

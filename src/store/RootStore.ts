import { API } from "../services";
import { UserStore } from "./UserStore";
import { DashboardStore } from "../pages/Dashboard";
import { IAPI, IUserStore } from "../types";

export class RootStore {
  api: IAPI = new API();
  userStore: IUserStore = new UserStore(this.api);
  dashboardStore = new DashboardStore(this.api);
}

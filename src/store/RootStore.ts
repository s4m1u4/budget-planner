import { API } from "../services";
import { IUserStore, UserStore } from "./UserStore";
import { DashboardStore } from "../pages/Dashboard";
import { IDashboardStore } from "../pages/Dashboard/DashboardStore";
import { IAPI } from "../services/API.service";

export class RootStore {
  api: IAPI = new API();
  userStore: IUserStore = new UserStore(this.api);
  dashboardStore: IDashboardStore = new DashboardStore(this.api);
}

import { API, IAPI } from "services/api";
import { UserStore, IUserStore } from "store/UserStore";
import { DashboardStore, IDashboardStore } from "pages/Dashboard";

export class RootStore {
  api: IAPI = new API();
  userStore: IUserStore = new UserStore(this.api);
  dashboardStore: IDashboardStore = new DashboardStore(this.api);
}

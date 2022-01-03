import { API } from "../services";
import { UserStore } from "./UserStore";
import { DashboardStore } from "../pages/Dashboard";

export class RootStore {
  api = new API();
  userStore = new UserStore(this.api);
  dashboardStore = new DashboardStore(this.api);
}

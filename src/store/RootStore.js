import { API } from "../services";
import { UserStore } from "./UserStore";

export class RootStore {
  api = new API();
  userStore = new UserStore(this.api);
}

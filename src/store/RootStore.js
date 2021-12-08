import API from "../services/API";
import UserStore from "./UserStore";

export default class RootStore {
  API = new API();
  userStore = new UserStore();
}

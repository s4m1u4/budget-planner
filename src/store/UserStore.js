import { makeAutoObservable } from "mobx";

class UserStore {
  isAuth = false;
  userData = {};

  constructor() {
    makeAutoObservable(this);
  }

  setIsAuth() {
    this.isAuth = true;
  }

  setSignupData(data) {
    this.userData = data;
  }
}

const userStore = new UserStore();

export default userStore;

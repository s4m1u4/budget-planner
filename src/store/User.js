import { makeAutoObservable } from "mobx";

class User {
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

const user = new User();

export default user;

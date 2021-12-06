import { makeAutoObservable } from "mobx";

class User {
  login = false;
  signupData = {};

  constructor() {
    makeAutoObservable(this);
  }

  setSignupData(data) {
    this.signupData = data;
  }

  setLogin() {
    this.login = true;
  }
}

const user = new User();

export default user;

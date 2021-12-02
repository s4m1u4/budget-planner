import { makeAutoObservable } from "mobx";

class User {
  login = false;

  constructor() {
    makeAutoObservable(this);
  }

  setUser() {
    this.login = true;
  }
}

export default new User();

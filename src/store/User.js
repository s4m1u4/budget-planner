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

const user = new User();

export default user;

import { makeAutoObservable } from "mobx";

export default class UserStore {
  isAuth = false;
  userData = {};

  constructor() {
    makeAutoObservable(this);
  }

  setIsAuth = () => {
    this.isAuth = true;
  };

  setUserData = (data) => {
    this.userData = data;
  };
}

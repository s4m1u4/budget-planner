export const setToken = (token) => {
  return sessionStorage.setItem("token", token);
};

export const getToken = () => {
  return sessionStorage.getItem("token") || "";
};

export const clearToken = () => {
  return sessionStorage.removeItem("token");
};

export const isAuth = () => {
  return Boolean(getToken());
};

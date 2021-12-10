import axios from "axios";

export class API {
  fetchRequest = async ({ url, method, body, token }) => {
    const { data } = await axios({
      url,
      method,
      data: body,
      headers: {
        "Content-Type": "application/json",
        Authorization: token ? `Bearer ${token}` : "",
      },
      baseURL: "http://localhost:3001/api",
    });
    return data;
  };

  // fetchRegisterUser = async (userData) => {
  //   try {
  //     const { data } = await api.post("/user/register", userData);
  //     return data;
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  //
  // fetchLoginUser = async (userData) => {
  //   try {
  //     const { data } = await api.post("/user/Login", userData);
  //     LocalStorage.set("token", data.token);
  //     return data;
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  //
  // fetchUserData = async () => {
  //   const token = LocalStorage.get("token");
  //
  //   try {
  //     const { data } = await api.get("/user", {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });
  //     return data;
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
}

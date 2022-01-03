import axios from "axios";

export class API {
  fetchRequest = async ({ url, method, params, body, token }) => {
    const { data } = await axios({
      url,
      method,
      params,
      data: body,
      headers: {
        "Content-Type": "application/json",
        Authorization: token ? `Bearer ${token}` : "",
      },
      baseURL: "http://localhost:3001/api",
    });
    return data;
  };
}

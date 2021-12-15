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
}

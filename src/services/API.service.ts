import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { IFetchRequestValues } from "../types";

export interface IAPI {
  fetchRequest: (values: IFetchRequestValues) => any;
}

export class API implements IAPI {
  fetchRequest = async ({
    url,
    method,
    params,
    body,
    token,
  }: IFetchRequestValues) => {
    const config: AxiosRequestConfig = {
      url,
      method,
      params,
      data: body,
      headers: {
        "Content-Type": "application/json",
        Authorization: token ? `Bearer ${token}` : "",
      },
      baseURL: "http://localhost:3001/api",
    };
    const response: AxiosResponse = await axios(config);
    return response.data;
  };
}

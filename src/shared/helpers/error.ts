import { AxiosError } from "axios";

export const structureError = (error: AxiosError<any, any>) =>
  error && error.response
    ? {
        status: error.response.status,
        message: error.response.toString(),
      }
    : {
        status: -1,
        message: error.message,
      };

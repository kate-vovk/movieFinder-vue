import { IError } from '@/interfaces/errorInterfaces';

export default class CustomError extends Error {
  errorMessage: string;

  errorStatus?: number;

  constructor(err: IError) {
    console.warn('err', err);
    if (!err.response) {
      super(String(err));
      this.errorMessage = String(err);
      this.errorStatus = 400;
    } else {
      const {
        response: { statusText, status },
      } = err;
      super(statusText);
      this.errorMessage = statusText;
      this.errorStatus = status;
    }
  }
}

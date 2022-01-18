export interface IErrorState {
  route?: null | string;
  errorMessage: null | string;
  errorStatus: null | number;
}

export interface IResponse {
  status?: number;
  statusText: string;
}

export interface IError {
  response: IResponse | undefined;
}

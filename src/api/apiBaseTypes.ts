export interface BaseListModel<T> {
  total: number;
  list: T[];
}

export interface BaseResponseModel<T> {
  code: string;
  message: string;
  data: T;
}

export type BaseResponseType<T> = Promise<BaseResponseModel<T>>;

export type BaseListResponseType<T> = Promise<BaseResponseModel<BaseListModel<T>>>;

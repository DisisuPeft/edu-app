export interface Response {
  message: string;
}

type ErrorMessage = {
  detail: string;
};

export type SuccessMessage = {
  message: string;
};

export interface ErrorResponse {
  data: ErrorMessage;
  status: number;
}

export interface MessageResponse {
  message: SuccessMessage;
}

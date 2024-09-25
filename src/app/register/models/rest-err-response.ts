/* tslint:disable */
/* eslint-disable */
export interface RestErrResponse {

  /**
   * Application-specific error code.
   */
  code?: number;

  /**
   * Application context.
   */
  context?: {
[key: string]: any;
};

  /**
   * Error message.
   */
  error?: string;

  /**
   * Status text.
   */
  status?: string;
}

/* tslint:disable */
/* eslint-disable */
export interface UsersSubmitOtpRequest {

  /**
   * opaque value that was provided in response to GenerateOTP request
   */
  client_id: string;

  /**
   * 6 digit OTP that was sent to the registered mobile number of the Aadhar
   */
  otp: string;
}

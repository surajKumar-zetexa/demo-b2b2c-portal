/* tslint:disable */
/* eslint-disable */
export interface UsersUser {

  /**
   * billing address of the user including state/union territory
   */
  address?: string;

  /**
   * city as per the billing address
   */
  city?: string;

  /**
   * country as per billing address
   */
  country?: string;

  /**
   * user's date of birth
   */
  date_of_birth?: string;

  /**
   * email of the user. Invoice and QRCode would be sent to this email'
   */
  email: string;

  /**
   * Phone number including country code, without any special characters
   */
  phone?: string;

  /**
   * postal code as per billing address
   */
  postal_code?: string;

  /**
   * reserved for future use
   */
  primary_account?: boolean;

  /**
   * photo of the user converted to base64 encoded string
   */
  profile_img?: string;
  user_name: string;
}

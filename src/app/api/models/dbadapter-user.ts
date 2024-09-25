/* tslint:disable */
/* eslint-disable */
export interface DbadapterUser {
  address?: string;

  /**
   * name of the agent who manages the user
   */
  agent?: string;
  city?: string;
  country?: string;
  created?: string;

  /**
   * Date of birth of user
   */
  date_of_birth?: string;

  /**
   * read-only field that indicaes whether user EKYC is completed
   */
  ekyc_completed?: boolean;

  /**
   * read-only field that indicates whether the user requires EKYC. Citizens from India require EKYC, independent of destination
   */
  ekyc_required?: boolean;

  /**
   * email of the user. Invoice and QRCode would be sent to this email'
   */
  email: string;

  /**
   * customer-id
   */
  id?: string;

  /**
   * Phone number including country code, without any special characters
   */
  phone?: string;
  points?: number;
  postal_code?: string;
  primary_account?: boolean;
  profile_img?: string;
  resource_version?: number;
  updated?: string;

  /**
   * name of the user
   */
  user_name: string;
}

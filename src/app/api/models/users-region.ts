/* tslint:disable */
/* eslint-disable */
export interface UsersRegion {

  /**
   * country code
   */
  country_code: number;

  /**
   * Name of the country
   */
  region_name: string;

  /**
   * plan markup for the user of a specific region, currently unused
   */
  regional_markup?: number;

  /**
   * list of EKYC documents for a country. The array can consist of Passport, National ID Card or both. Currently unused
   */
  supported_documents?: Array<string> | null;
}

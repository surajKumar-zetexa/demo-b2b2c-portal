/* tslint:disable */
/* eslint-disable */
export interface DbadapterRegion {
  country_code?: number;

  /**
   * time of creation of the region record
   */
  created_at?: string;

  /**
   * time of last updation of the region record
   */
  last_updated?: string;
  region_name?: string;
  regional_markup?: number;

  /**
   * Agent object version. Ensures concurrent updates do not lead to inconsitency
   */
  resource_version?: number;
  supported_documents?: Array<string> | null;
}

/* tslint:disable */
/* eslint-disable */
export interface DbadapterAgent {
  address?: string;

  /**
   * Agent ID
   */
  agent_id?: string;

  /**
   * Agent or company name
   */
  agent_name?: string;

  /**
   * Agent's main business'. Used for analytics
   */
  agent_type?: 'Travel Agent' | 'Forex' | 'Corporate' | 'Insurance' | 'None';
  city?: string;
  country?: string;

  /**
   * time of creation of the agent record
   */
  created?: string;

  /**
   * Certifcate image converted to base64 string for upload
   */
  crn?: string;

  /**
   * Date of company formation
   */
  date_of_birth?: string;

  /**
   * The category of the agent. This dictates discount
   */
  discount_category?: 'Essential' | 'Basic' | 'Silver' | 'Gold';

  /**
   * email of the agent
   */
  email?: string;

  /**
   * Phone number including country code, without any special characters
   */
  phone?: string;
  postal_code?: string;

  /**
   * base64 string that contains image/logo of the agent
   */
  profile_img?: Array<number> | null;

  /**
   * Agent object version. Ensures concurrent updates do not lead to inconsitency
   */
  resource_version?: number;

  /**
   * PAN number (India), TIN (USA) or equivalent
   */
  tin?: string;

  /**
   * time of last updation of the agent record
   */
  updated?: string;
}

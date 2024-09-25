/* tslint:disable */
/* eslint-disable */
export interface RegistrationAgentValidationRequest {
  agent_name?: string;
  agent_type: 'Forex' | 'Travel Agent' | 'Corporate' | 'Insurance' | 'None';
  email: string;
  otp: number;
  register_agent: boolean;
}

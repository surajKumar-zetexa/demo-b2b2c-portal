/* tslint:disable */
/* eslint-disable */
export interface RegistrationAgentRegistrationRequest {
  agent_name?: string;
  agent_type: 'Forex' | 'Travel Agent' | 'Corporate' | 'Insurance' | 'None';
  email: string;
  register_agent: boolean;
}

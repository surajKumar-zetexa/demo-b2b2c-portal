/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { createAgent } from '../fn/agent-lcm/create-agent';
import { CreateAgent$Params } from '../fn/agent-lcm/create-agent';
import { deleteAgentById } from '../fn/agent-lcm/delete-agent-by-id';
import { DeleteAgentById$Params } from '../fn/agent-lcm/delete-agent-by-id';
import { deleteAgentByQuery } from '../fn/agent-lcm/delete-agent-by-query';
import { DeleteAgentByQuery$Params } from '../fn/agent-lcm/delete-agent-by-query';
import { discountForAgent } from '../fn/agent-lcm/discount-for-agent';
import { DiscountForAgent$Params } from '../fn/agent-lcm/discount-for-agent';
import { getAgentById } from '../fn/agent-lcm/get-agent-by-id';
import { GetAgentById$Params } from '../fn/agent-lcm/get-agent-by-id';
import { getAgentByQuery } from '../fn/agent-lcm/get-agent-by-query';
import { GetAgentByQuery$Params } from '../fn/agent-lcm/get-agent-by-query';
import { listAgents } from '../fn/agent-lcm/list-agents';
import { ListAgents$Params } from '../fn/agent-lcm/list-agents';
import { updateAgent } from '../fn/agent-lcm/update-agent';
import { UpdateAgent$Params } from '../fn/agent-lcm/update-agent';
import { UsersAgentResponse } from '../models/users-agent-response';
import { UsersAgentsResponse } from '../models/users-agents-response';
import { UsersGetAgentDiscountResponse } from '../models/users-get-agent-discount-response';

@Injectable({ providedIn: 'root' })
export class AgentLcmService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `listAgents()` */
  static readonly ListAgentsPath = '/api/v1/agents';

  /**
   * List Agents.
   *
   * This would list agents based on filter criteria: city, postalcode,country and discount category. For city/postalcode based queries, the country field shouldalso be provided in addition to city/postalcode
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `listAgents()` instead.
   *
   * This method doesn't expect any request body.
   */
  listAgents$Response(params: ListAgents$Params, context?: HttpContext): Observable<StrictHttpResponse<UsersAgentsResponse>> {
    return listAgents(this.http, this.rootUrl, params, context);
  }

  /**
   * List Agents.
   *
   * This would list agents based on filter criteria: city, postalcode,country and discount category. For city/postalcode based queries, the country field shouldalso be provided in addition to city/postalcode
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `listAgents$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  listAgents(params: ListAgents$Params, context?: HttpContext): Observable<UsersAgentsResponse> {
    return this.listAgents$Response(params, context).pipe(
      map((r: StrictHttpResponse<UsersAgentsResponse>): UsersAgentsResponse => r.body)
    );
  }

  /** Path part for operation `createAgent()` */
  static readonly CreateAgentPath = '/api/v1/agents';

  /**
   * Create Agent.
   *
   * Create an agent of corporate, travel, or other types and configure the discount
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createAgent()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createAgent$Response(params: CreateAgent$Params, context?: HttpContext): Observable<StrictHttpResponse<UsersAgentResponse>> {
    return createAgent(this.http, this.rootUrl, params, context);
  }

  /**
   * Create Agent.
   *
   * Create an agent of corporate, travel, or other types and configure the discount
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createAgent$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createAgent(params: CreateAgent$Params, context?: HttpContext): Observable<UsersAgentResponse> {
    return this.createAgent$Response(params, context).pipe(
      map((r: StrictHttpResponse<UsersAgentResponse>): UsersAgentResponse => r.body)
    );
  }

  /** Path part for operation `deleteAgentByQuery()` */
  static readonly DeleteAgentByQueryPath = '/api/v1/agents';

  /**
   * Delete Agent By Query.
   *
   * Use Name, Email or Phone number of the agent to Delete. Only one of the three is accepted. This deletes without checking for resource versions
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteAgentByQuery()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteAgentByQuery$Response(params: DeleteAgentByQuery$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteAgentByQuery(this.http, this.rootUrl, params, context);
  }

  /**
   * Delete Agent By Query.
   *
   * Use Name, Email or Phone number of the agent to Delete. Only one of the three is accepted. This deletes without checking for resource versions
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteAgentByQuery$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteAgentByQuery(params: DeleteAgentByQuery$Params, context?: HttpContext): Observable<void> {
    return this.deleteAgentByQuery$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `getAgentByQuery()` */
  static readonly GetAgentByQueryPath = '/api/v1/agents/agent';

  /**
   * Get Agent.
   *
   * Using this API to fetch agent based on Name, Email or Phone number. Do not use this for fetching agent by ID
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAgentByQuery()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAgentByQuery$Response(params: GetAgentByQuery$Params, context?: HttpContext): Observable<StrictHttpResponse<UsersAgentResponse>> {
    return getAgentByQuery(this.http, this.rootUrl, params, context);
  }

  /**
   * Get Agent.
   *
   * Using this API to fetch agent based on Name, Email or Phone number. Do not use this for fetching agent by ID
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAgentByQuery$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAgentByQuery(params: GetAgentByQuery$Params, context?: HttpContext): Observable<UsersAgentResponse> {
    return this.getAgentByQuery$Response(params, context).pipe(
      map((r: StrictHttpResponse<UsersAgentResponse>): UsersAgentResponse => r.body)
    );
  }

  /** Path part for operation `discountForAgent()` */
  static readonly DiscountForAgentPath = '/api/v1/agents/{agent_name}/discount';

  /**
   * Get Discounts for Agent.
   *
   * This API is used internally. It would fetch the discount value for an agent
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `discountForAgent()` instead.
   *
   * This method doesn't expect any request body.
   */
  discountForAgent$Response(params: DiscountForAgent$Params, context?: HttpContext): Observable<StrictHttpResponse<UsersGetAgentDiscountResponse>> {
    return discountForAgent(this.http, this.rootUrl, params, context);
  }

  /**
   * Get Discounts for Agent.
   *
   * This API is used internally. It would fetch the discount value for an agent
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `discountForAgent$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  discountForAgent(params: DiscountForAgent$Params, context?: HttpContext): Observable<UsersGetAgentDiscountResponse> {
    return this.discountForAgent$Response(params, context).pipe(
      map((r: StrictHttpResponse<UsersGetAgentDiscountResponse>): UsersGetAgentDiscountResponse => r.body)
    );
  }

  /** Path part for operation `getAgentById()` */
  static readonly GetAgentByIdPath = '/api/v1/agents/{id}';

  /**
   * Get Agent By Id.
   *
   * Using Id, fetch the Agent Information
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAgentById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAgentById$Response(params: GetAgentById$Params, context?: HttpContext): Observable<StrictHttpResponse<UsersAgentResponse>> {
    return getAgentById(this.http, this.rootUrl, params, context);
  }

  /**
   * Get Agent By Id.
   *
   * Using Id, fetch the Agent Information
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAgentById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAgentById(params: GetAgentById$Params, context?: HttpContext): Observable<UsersAgentResponse> {
    return this.getAgentById$Response(params, context).pipe(
      map((r: StrictHttpResponse<UsersAgentResponse>): UsersAgentResponse => r.body)
    );
  }

  /** Path part for operation `updateAgent()` */
  static readonly UpdateAgentPath = '/api/v1/agents/{id}/resource_version/{resource_version}';

  /**
   * Update Agent.
   *
   * Modify the different parameters of an agent
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateAgent()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateAgent$Response(params: UpdateAgent$Params, context?: HttpContext): Observable<StrictHttpResponse<UsersAgentResponse>> {
    return updateAgent(this.http, this.rootUrl, params, context);
  }

  /**
   * Update Agent.
   *
   * Modify the different parameters of an agent
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateAgent$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateAgent(params: UpdateAgent$Params, context?: HttpContext): Observable<UsersAgentResponse> {
    return this.updateAgent$Response(params, context).pipe(
      map((r: StrictHttpResponse<UsersAgentResponse>): UsersAgentResponse => r.body)
    );
  }

  /** Path part for operation `deleteAgentById()` */
  static readonly DeleteAgentByIdPath = '/api/v1/agents/{id}/resource_version/{resource_version}';

  /**
   * Delete Agent By Id.
   *
   * Using the Id of the agent, delete. This also checks if the resource version matches to ensure consistency across parallel executions
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteAgentById()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteAgentById$Response(params: DeleteAgentById$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteAgentById(this.http, this.rootUrl, params, context);
  }

  /**
   * Delete Agent By Id.
   *
   * Using the Id of the agent, delete. This also checks if the resource version matches to ensure consistency across parallel executions
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteAgentById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteAgentById(params: DeleteAgentById$Params, context?: HttpContext): Observable<void> {
    return this.deleteAgentById$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}

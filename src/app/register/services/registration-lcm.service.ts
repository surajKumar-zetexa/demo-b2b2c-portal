/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { internalUser } from '../fn/registration-lcm/internal-user';
import { InternalUser$Params } from '../fn/registration-lcm/internal-user';
import { registerAgent } from '../fn/registration-lcm/register-agent';
import { RegisterAgent$Params } from '../fn/registration-lcm/register-agent';
import { registerUser } from '../fn/registration-lcm/register-user';
import { RegisterUser$Params } from '../fn/registration-lcm/register-user';
import { RegistrationAgentValidationResponse } from '../models/registration-agent-validation-response';
import { RegistrationInternalUserAaaResponse } from '../models/registration-internal-user-aaa-response';
import { RegistrationUserValidationResponse } from '../models/registration-user-validation-response';
import { validateAgent } from '../fn/registration-lcm/validate-agent';
import { ValidateAgent$Params } from '../fn/registration-lcm/validate-agent';
import { validateUser } from '../fn/registration-lcm/validate-user';
import { ValidateUser$Params } from '../fn/registration-lcm/validate-user';

@Injectable({ providedIn: 'root' })
export class RegistrationLcmService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `internalUser()` */
  static readonly InternalUserPath = '/api/v1/admin/internal/validate';

  /**
   * Obtain access for internal user.
   *
   * Internal users would use this API to get access for communicating with other services
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `internalUser()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  internalUser$Response(params?: InternalUser$Params, context?: HttpContext): Observable<StrictHttpResponse<RegistrationInternalUserAaaResponse>> {
    return internalUser(this.http, this.rootUrl, params, context);
  }

  /**
   * Obtain access for internal user.
   *
   * Internal users would use this API to get access for communicating with other services
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `internalUser$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  internalUser(params?: InternalUser$Params, context?: HttpContext): Observable<RegistrationInternalUserAaaResponse> {
    return this.internalUser$Response(params, context).pipe(
      map((r: StrictHttpResponse<RegistrationInternalUserAaaResponse>): RegistrationInternalUserAaaResponse => r.body)
    );
  }

  /** Path part for operation `registerAgent()` */
  static readonly RegisterAgentPath = '/api/v1/agents/login';

  /**
   * Register Agent.
   *
   * This API is used to Send the OTP to the email
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `registerAgent()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  registerAgent$Response(params?: RegisterAgent$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return registerAgent(this.http, this.rootUrl, params, context);
  }

  /**
   * Register Agent.
   *
   * This API is used to Send the OTP to the email
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `registerAgent$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  registerAgent(params?: RegisterAgent$Params, context?: HttpContext): Observable<void> {
    return this.registerAgent$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `validateAgent()` */
  static readonly ValidateAgentPath = '/api/v1/agents/validate';

  /**
   * Validates Agent.
   *
   * This API is used to validate the agent and register on our website
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `validateAgent()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  validateAgent$Response(params?: ValidateAgent$Params, context?: HttpContext): Observable<StrictHttpResponse<RegistrationAgentValidationResponse>> {
    return validateAgent(this.http, this.rootUrl, params, context);
  }

  /**
   * Validates Agent.
   *
   * This API is used to validate the agent and register on our website
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `validateAgent$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  validateAgent(params?: ValidateAgent$Params, context?: HttpContext): Observable<RegistrationAgentValidationResponse> {
    return this.validateAgent$Response(params, context).pipe(
      map((r: StrictHttpResponse<RegistrationAgentValidationResponse>): RegistrationAgentValidationResponse => r.body)
    );
  }

  /** Path part for operation `registerUser()` */
  static readonly RegisterUserPath = '/api/v1/agents/{agent}/users/login';

  /**
   * Register User.
   *
   * This API is used to Send the OTP to the email
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `registerUser()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  registerUser$Response(params: RegisterUser$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return registerUser(this.http, this.rootUrl, params, context);
  }

  /**
   * Register User.
   *
   * This API is used to Send the OTP to the email
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `registerUser$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  registerUser(params: RegisterUser$Params, context?: HttpContext): Observable<void> {
    return this.registerUser$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `validateUser()` */
  static readonly ValidateUserPath = '/api/v1/agents/{agent}/users/validate';

  /**
   * Validates User.
   *
   * This API is used to validate the user
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `validateUser()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  validateUser$Response(params: ValidateUser$Params, context?: HttpContext): Observable<StrictHttpResponse<RegistrationUserValidationResponse>> {
    return validateUser(this.http, this.rootUrl, params, context);
  }

  /**
   * Validates User.
   *
   * This API is used to validate the user
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `validateUser$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  validateUser(params: ValidateUser$Params, context?: HttpContext): Observable<RegistrationUserValidationResponse> {
    return this.validateUser$Response(params, context).pipe(
      map((r: StrictHttpResponse<RegistrationUserValidationResponse>): RegistrationUserValidationResponse => r.body)
    );
  }

}

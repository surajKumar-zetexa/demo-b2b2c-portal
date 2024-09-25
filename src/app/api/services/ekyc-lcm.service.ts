/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { createEkyc } from '../fn/ekyc-lcm/create-ekyc';
import { CreateEkyc$Params } from '../fn/ekyc-lcm/create-ekyc';
import { deleteEkycByAgent } from '../fn/ekyc-lcm/delete-ekyc-by-agent';
import { DeleteEkycByAgent$Params } from '../fn/ekyc-lcm/delete-ekyc-by-agent';
import { deleteEkycById } from '../fn/ekyc-lcm/delete-ekyc-by-id';
import { DeleteEkycById$Params } from '../fn/ekyc-lcm/delete-ekyc-by-id';
import { deleteEkycByUser } from '../fn/ekyc-lcm/delete-ekyc-by-user';
import { DeleteEkycByUser$Params } from '../fn/ekyc-lcm/delete-ekyc-by-user';
import { deleteVisa } from '../fn/ekyc-lcm/delete-visa';
import { DeleteVisa$Params } from '../fn/ekyc-lcm/delete-visa';
import { generateAadharOtp } from '../fn/ekyc-lcm/generate-aadhar-otp';
import { GenerateAadharOtp$Params } from '../fn/ekyc-lcm/generate-aadhar-otp';
import { getEkycById } from '../fn/ekyc-lcm/get-ekyc-by-id';
import { GetEkycById$Params } from '../fn/ekyc-lcm/get-ekyc-by-id';
import { getEkycByUserId } from '../fn/ekyc-lcm/get-ekyc-by-user-id';
import { GetEkycByUserId$Params } from '../fn/ekyc-lcm/get-ekyc-by-user-id';
import { getLatestStatusByUserId } from '../fn/ekyc-lcm/get-latest-status-by-user-id';
import { GetLatestStatusByUserId$Params } from '../fn/ekyc-lcm/get-latest-status-by-user-id';
import { getStatusOptionsForEkyc } from '../fn/ekyc-lcm/get-status-options-for-ekyc';
import { GetStatusOptionsForEkyc$Params } from '../fn/ekyc-lcm/get-status-options-for-ekyc';
import { getSupportedDocumentsForCountry } from '../fn/ekyc-lcm/get-supported-documents-for-country';
import { GetSupportedDocumentsForCountry$Params } from '../fn/ekyc-lcm/get-supported-documents-for-country';
import { getVisa } from '../fn/ekyc-lcm/get-visa';
import { GetVisa$Params } from '../fn/ekyc-lcm/get-visa';
import { listEkycByCategory } from '../fn/ekyc-lcm/list-ekyc-by-category';
import { ListEkycByCategory$Params } from '../fn/ekyc-lcm/list-ekyc-by-category';
import { submitAadharOtp } from '../fn/ekyc-lcm/submit-aadhar-otp';
import { SubmitAadharOtp$Params } from '../fn/ekyc-lcm/submit-aadhar-otp';
import { triggerEkyc } from '../fn/ekyc-lcm/trigger-ekyc';
import { TriggerEkyc$Params } from '../fn/ekyc-lcm/trigger-ekyc';
import { triggerInternationalPassportOcrForUser } from '../fn/ekyc-lcm/trigger-international-passport-ocr-for-user';
import { TriggerInternationalPassportOcrForUser$Params } from '../fn/ekyc-lcm/trigger-international-passport-ocr-for-user';
import { triggerPassportOcrForUser } from '../fn/ekyc-lcm/trigger-passport-ocr-for-user';
import { TriggerPassportOcrForUser$Params } from '../fn/ekyc-lcm/trigger-passport-ocr-for-user';
import { updateEkyc } from '../fn/ekyc-lcm/update-ekyc';
import { UpdateEkyc$Params } from '../fn/ekyc-lcm/update-ekyc';
import { uploadVisa } from '../fn/ekyc-lcm/upload-visa';
import { UploadVisa$Params } from '../fn/ekyc-lcm/upload-visa';
import { UsersDeleteVisaResponse } from '../models/users-delete-visa-response';
import { UsersEkycDocumentOptions } from '../models/users-ekyc-document-options';
import { UsersEkycResponse } from '../models/users-ekyc-response';
import { UsersEkyCsResponse } from '../models/users-eky-cs-response';
import { UsersEkycStatusOptions } from '../models/users-ekyc-status-options';
import { UsersGenerateOtpResponse } from '../models/users-generate-otp-response';
import { UsersGetVisaResponse } from '../models/users-get-visa-response';
import { UsersSubmitOtpResponse } from '../models/users-submit-otp-response';
import { UsersTriggerPassportInterOcrResponse } from '../models/users-trigger-passport-inter-ocr-response';
import { UsersTriggerPassportOcrResponse } from '../models/users-trigger-passport-ocr-response';
import { UsersUploadVisaResponse } from '../models/users-upload-visa-response';

@Injectable({ providedIn: 'root' })
export class EkycLcmService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `deleteEkycByAgent()` */
  static readonly DeleteEkycByAgentPath = '/api/v1/agents/{agent}/ekycs';

  /**
   * Delete EKYC Based on Agent Name.
   *
   * For a given agent delete ALL the EKYC records. Typically used by admin when deleting agents
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteEkycByAgent()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteEkycByAgent$Response(params: DeleteEkycByAgent$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteEkycByAgent(this.http, this.rootUrl, params, context);
  }

  /**
   * Delete EKYC Based on Agent Name.
   *
   * For a given agent delete ALL the EKYC records. Typically used by admin when deleting agents
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteEkycByAgent$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteEkycByAgent(params: DeleteEkycByAgent$Params, context?: HttpContext): Observable<void> {
    return this.deleteEkycByAgent$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `listEkycByCategory()` */
  static readonly ListEkycByCategoryPath = '/api/v1/agents/{agent}/ekycs/{category}';

  /**
   * Fetch EKYC Records by Category.
   *
   * Get the list of EKYC records based on the current status. This can be used by Backend engineer to review failures in KYC
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `listEkycByCategory()` instead.
   *
   * This method doesn't expect any request body.
   */
  listEkycByCategory$Response(params: ListEkycByCategory$Params, context?: HttpContext): Observable<StrictHttpResponse<UsersEkyCsResponse>> {
    return listEkycByCategory(this.http, this.rootUrl, params, context);
  }

  /**
   * Fetch EKYC Records by Category.
   *
   * Get the list of EKYC records based on the current status. This can be used by Backend engineer to review failures in KYC
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `listEkycByCategory$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  listEkycByCategory(params: ListEkycByCategory$Params, context?: HttpContext): Observable<UsersEkyCsResponse> {
    return this.listEkycByCategory$Response(params, context).pipe(
      map((r: StrictHttpResponse<UsersEkyCsResponse>): UsersEkyCsResponse => r.body)
    );
  }

  /** Path part for operation `generateAadharOtp()` */
  static readonly GenerateAadharOtpPath = '/api/v1/agents/{agent}/users/{user_id}/aadhar/{aadhar_num}/generate-otp';

  /**
   * Generate Aadhar OTP.
   *
   * Generate Aadhar based OTP for a user
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `generateAadharOtp()` instead.
   *
   * This method doesn't expect any request body.
   */
  generateAadharOtp$Response(params: GenerateAadharOtp$Params, context?: HttpContext): Observable<StrictHttpResponse<UsersGenerateOtpResponse>> {
    return generateAadharOtp(this.http, this.rootUrl, params, context);
  }

  /**
   * Generate Aadhar OTP.
   *
   * Generate Aadhar based OTP for a user
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `generateAadharOtp$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  generateAadharOtp(params: GenerateAadharOtp$Params, context?: HttpContext): Observable<UsersGenerateOtpResponse> {
    return this.generateAadharOtp$Response(params, context).pipe(
      map((r: StrictHttpResponse<UsersGenerateOtpResponse>): UsersGenerateOtpResponse => r.body)
    );
  }

  /** Path part for operation `getLatestStatusByUserId()` */
  static readonly GetLatestStatusByUserIdPath = '/api/v1/agents/{agent}/users/{user_id}/ekyc/result';

  /**
   * Get the status of Latest EKYC activity of a given User Id.
   *
   * Using user Id, fetch the EKYC Information. For the same userId, there could be multiple EKYC checks
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getLatestStatusByUserId()` instead.
   *
   * This method doesn't expect any request body.
   */
  getLatestStatusByUserId$Response(params: GetLatestStatusByUserId$Params, context?: HttpContext): Observable<StrictHttpResponse<UsersEkycResponse>> {
    return getLatestStatusByUserId(this.http, this.rootUrl, params, context);
  }

  /**
   * Get the status of Latest EKYC activity of a given User Id.
   *
   * Using user Id, fetch the EKYC Information. For the same userId, there could be multiple EKYC checks
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getLatestStatusByUserId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getLatestStatusByUserId(params: GetLatestStatusByUserId$Params, context?: HttpContext): Observable<UsersEkycResponse> {
    return this.getLatestStatusByUserId$Response(params, context).pipe(
      map((r: StrictHttpResponse<UsersEkycResponse>): UsersEkycResponse => r.body)
    );
  }

  /** Path part for operation `triggerEkyc()` */
  static readonly TriggerEkycPath = '/api/v1/agents/{agent}/users/{user_id}/ekyc/trigger';

  /**
   * Trigger EKYC.
   *
   * Trigger EKYC for a user
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `triggerEkyc()` instead.
   *
   * This method doesn't expect any request body.
   */
  triggerEkyc$Response(params: TriggerEkyc$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return triggerEkyc(this.http, this.rootUrl, params, context);
  }

  /**
   * Trigger EKYC.
   *
   * Trigger EKYC for a user
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `triggerEkyc$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  triggerEkyc(params: TriggerEkyc$Params, context?: HttpContext): Observable<void> {
    return this.triggerEkyc$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `getEkycByUserId()` */
  static readonly GetEkycByUserIdPath = '/api/v1/agents/{agent}/users/{user_id}/ekycs';

  /**
   * Get EKYC using User Id.
   *
   * Using user Id, fetch the EKYC Information. For the same userId, there could be multiple EKYC checks
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getEkycByUserId()` instead.
   *
   * This method doesn't expect any request body.
   */
  getEkycByUserId$Response(params: GetEkycByUserId$Params, context?: HttpContext): Observable<StrictHttpResponse<UsersEkyCsResponse>> {
    return getEkycByUserId(this.http, this.rootUrl, params, context);
  }

  /**
   * Get EKYC using User Id.
   *
   * Using user Id, fetch the EKYC Information. For the same userId, there could be multiple EKYC checks
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getEkycByUserId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getEkycByUserId(params: GetEkycByUserId$Params, context?: HttpContext): Observable<UsersEkyCsResponse> {
    return this.getEkycByUserId$Response(params, context).pipe(
      map((r: StrictHttpResponse<UsersEkyCsResponse>): UsersEkyCsResponse => r.body)
    );
  }

  /** Path part for operation `createEkyc()` */
  static readonly CreateEkycPath = '/api/v1/agents/{agent}/users/{user_id}/ekycs';

  /**
   * Create EKYC.
   *
   * Create an EKYC entry for users and agents
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createEkyc()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createEkyc$Response(params: CreateEkyc$Params, context?: HttpContext): Observable<StrictHttpResponse<UsersEkycResponse>> {
    return createEkyc(this.http, this.rootUrl, params, context);
  }

  /**
   * Create EKYC.
   *
   * Create an EKYC entry for users and agents
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createEkyc$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createEkyc(params: CreateEkyc$Params, context?: HttpContext): Observable<UsersEkycResponse> {
    return this.createEkyc$Response(params, context).pipe(
      map((r: StrictHttpResponse<UsersEkycResponse>): UsersEkycResponse => r.body)
    );
  }

  /** Path part for operation `deleteEkycByUser()` */
  static readonly DeleteEkycByUserPath = '/api/v1/agents/{agent}/users/{user_id}/ekycs';

  /**
   * Delete EKYC By UserId.
   *
   * Using the UserId delete the EKYC. This deletes without checking for resource versions
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteEkycByUser()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteEkycByUser$Response(params: DeleteEkycByUser$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteEkycByUser(this.http, this.rootUrl, params, context);
  }

  /**
   * Delete EKYC By UserId.
   *
   * Using the UserId delete the EKYC. This deletes without checking for resource versions
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteEkycByUser$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteEkycByUser(params: DeleteEkycByUser$Params, context?: HttpContext): Observable<void> {
    return this.deleteEkycByUser$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `getEkycById()` */
  static readonly GetEkycByIdPath = '/api/v1/agents/{agent}/users/{user_id}/ekycs/{id}';

  /**
   * Get EKYC By Id.
   *
   * Using Id, fetch the EKYC Information
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getEkycById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getEkycById$Response(params: GetEkycById$Params, context?: HttpContext): Observable<StrictHttpResponse<UsersEkycResponse>> {
    return getEkycById(this.http, this.rootUrl, params, context);
  }

  /**
   * Get EKYC By Id.
   *
   * Using Id, fetch the EKYC Information
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getEkycById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getEkycById(params: GetEkycById$Params, context?: HttpContext): Observable<UsersEkycResponse> {
    return this.getEkycById$Response(params, context).pipe(
      map((r: StrictHttpResponse<UsersEkycResponse>): UsersEkycResponse => r.body)
    );
  }

  /** Path part for operation `submitAadharOtp()` */
  static readonly SubmitAadharOtpPath = '/api/v1/agents/{agent}/users/{user_id}/ekycs/{id}/aadhar/submit-otp';

  /**
   * Submit Aadhar OTP.
   *
   * Submit Aadhar based OTP for a user
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `submitAadharOtp()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  submitAadharOtp$Response(params: SubmitAadharOtp$Params, context?: HttpContext): Observable<StrictHttpResponse<UsersSubmitOtpResponse>> {
    return submitAadharOtp(this.http, this.rootUrl, params, context);
  }

  /**
   * Submit Aadhar OTP.
   *
   * Submit Aadhar based OTP for a user
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `submitAadharOtp$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  submitAadharOtp(params: SubmitAadharOtp$Params, context?: HttpContext): Observable<UsersSubmitOtpResponse> {
    return this.submitAadharOtp$Response(params, context).pipe(
      map((r: StrictHttpResponse<UsersSubmitOtpResponse>): UsersSubmitOtpResponse => r.body)
    );
  }

  /** Path part for operation `updateEkyc()` */
  static readonly UpdateEkycPath = '/api/v1/agents/{agent}/users/{user_id}/ekycs/{id}/resource_version/{resource_version}';

  /**
   * Update EKYC.
   *
   * Modify the different parameters of an EKYC
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateEkyc()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateEkyc$Response(params: UpdateEkyc$Params, context?: HttpContext): Observable<StrictHttpResponse<UsersEkycResponse>> {
    return updateEkyc(this.http, this.rootUrl, params, context);
  }

  /**
   * Update EKYC.
   *
   * Modify the different parameters of an EKYC
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateEkyc$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateEkyc(params: UpdateEkyc$Params, context?: HttpContext): Observable<UsersEkycResponse> {
    return this.updateEkyc$Response(params, context).pipe(
      map((r: StrictHttpResponse<UsersEkycResponse>): UsersEkycResponse => r.body)
    );
  }

  /** Path part for operation `deleteEkycById()` */
  static readonly DeleteEkycByIdPath = '/api/v1/agents/{agent}/users/{user_id}/ekycs/{id}/resource_version/{resource_version}';

  /**
   * Delete EKYC By Id.
   *
   * Using the Id of the EKYC, delete. This also checks if the resource version matches to ensure consistency across parallel executions
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteEkycById()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteEkycById$Response(params: DeleteEkycById$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteEkycById(this.http, this.rootUrl, params, context);
  }

  /**
   * Delete EKYC By Id.
   *
   * Using the Id of the EKYC, delete. This also checks if the resource version matches to ensure consistency across parallel executions
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteEkycById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteEkycById(params: DeleteEkycById$Params, context?: HttpContext): Observable<void> {
    return this.deleteEkycById$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `triggerInternationalPassportOcrForUser()` */
  static readonly TriggerInternationalPassportOcrForUserPath = '/api/v1/agents/{agent}/users/{user_id}/international/passport/ocr/trigger';

  /**
   * Trigger International Passport OCR.
   *
   * For a given user-id, Trigger International Passport OCR. Required for Passport as EKYC document
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `triggerInternationalPassportOcrForUser()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  triggerInternationalPassportOcrForUser$Response(params: TriggerInternationalPassportOcrForUser$Params, context?: HttpContext): Observable<StrictHttpResponse<UsersTriggerPassportInterOcrResponse>> {
    return triggerInternationalPassportOcrForUser(this.http, this.rootUrl, params, context);
  }

  /**
   * Trigger International Passport OCR.
   *
   * For a given user-id, Trigger International Passport OCR. Required for Passport as EKYC document
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `triggerInternationalPassportOcrForUser$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  triggerInternationalPassportOcrForUser(params: TriggerInternationalPassportOcrForUser$Params, context?: HttpContext): Observable<UsersTriggerPassportInterOcrResponse> {
    return this.triggerInternationalPassportOcrForUser$Response(params, context).pipe(
      map((r: StrictHttpResponse<UsersTriggerPassportInterOcrResponse>): UsersTriggerPassportInterOcrResponse => r.body)
    );
  }

  /** Path part for operation `triggerPassportOcrForUser()` */
  static readonly TriggerPassportOcrForUserPath = '/api/v1/agents/{agent}/users/{user_id}/passport/ocr/trigger';

  /**
   * Trigger Passport OCR.
   *
   * For a given user-id, Trigger Passport OCR. Required for Passport as EKYC document
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `triggerPassportOcrForUser()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  triggerPassportOcrForUser$Response(params: TriggerPassportOcrForUser$Params, context?: HttpContext): Observable<StrictHttpResponse<UsersTriggerPassportOcrResponse>> {
    return triggerPassportOcrForUser(this.http, this.rootUrl, params, context);
  }

  /**
   * Trigger Passport OCR.
   *
   * For a given user-id, Trigger Passport OCR. Required for Passport as EKYC document
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `triggerPassportOcrForUser$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  triggerPassportOcrForUser(params: TriggerPassportOcrForUser$Params, context?: HttpContext): Observable<UsersTriggerPassportOcrResponse> {
    return this.triggerPassportOcrForUser$Response(params, context).pipe(
      map((r: StrictHttpResponse<UsersTriggerPassportOcrResponse>): UsersTriggerPassportOcrResponse => r.body)
    );
  }

  /** Path part for operation `getVisa()` */
  static readonly GetVisaPath = '/api/v1/agents/{agent}/users/{user_id}/visa';

  /**
   * Get Visa.
   *
   * For a given user-id, Get Visa of indian traveller
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getVisa()` instead.
   *
   * This method doesn't expect any request body.
   */
  getVisa$Response(params: GetVisa$Params, context?: HttpContext): Observable<StrictHttpResponse<UsersGetVisaResponse>> {
    return getVisa(this.http, this.rootUrl, params, context);
  }

  /**
   * Get Visa.
   *
   * For a given user-id, Get Visa of indian traveller
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getVisa$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getVisa(params: GetVisa$Params, context?: HttpContext): Observable<UsersGetVisaResponse> {
    return this.getVisa$Response(params, context).pipe(
      map((r: StrictHttpResponse<UsersGetVisaResponse>): UsersGetVisaResponse => r.body)
    );
  }

  /** Path part for operation `uploadVisa()` */
  static readonly UploadVisaPath = '/api/v1/agents/{agent}/users/{user_id}/visa';

  /**
   * Upload Visa.
   *
   * For a given user-id, Upload Visa of indian traveller
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `uploadVisa()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  uploadVisa$Response(params: UploadVisa$Params, context?: HttpContext): Observable<StrictHttpResponse<UsersUploadVisaResponse>> {
    return uploadVisa(this.http, this.rootUrl, params, context);
  }

  /**
   * Upload Visa.
   *
   * For a given user-id, Upload Visa of indian traveller
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `uploadVisa$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  uploadVisa(params: UploadVisa$Params, context?: HttpContext): Observable<UsersUploadVisaResponse> {
    return this.uploadVisa$Response(params, context).pipe(
      map((r: StrictHttpResponse<UsersUploadVisaResponse>): UsersUploadVisaResponse => r.body)
    );
  }

  /** Path part for operation `deleteVisa()` */
  static readonly DeleteVisaPath = '/api/v1/agents/{agent}/users/{user_id}/visa';

  /**
   * Delete Visa.
   *
   * For a given user-id, Delete Visa of indian traveller
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteVisa()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteVisa$Response(params: DeleteVisa$Params, context?: HttpContext): Observable<StrictHttpResponse<UsersDeleteVisaResponse>> {
    return deleteVisa(this.http, this.rootUrl, params, context);
  }

  /**
   * Delete Visa.
   *
   * For a given user-id, Delete Visa of indian traveller
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteVisa$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteVisa(params: DeleteVisa$Params, context?: HttpContext): Observable<UsersDeleteVisaResponse> {
    return this.deleteVisa$Response(params, context).pipe(
      map((r: StrictHttpResponse<UsersDeleteVisaResponse>): UsersDeleteVisaResponse => r.body)
    );
  }

  /** Path part for operation `getSupportedDocumentsForCountry()` */
  static readonly GetSupportedDocumentsForCountryPath = '/api/v1/countries/{country}/ekyc_docs';

  /**
   * Get a list of supported EKYC Documents for the given country.
   *
   * Get the different documents that are allowed for a country. User would choose one and uploads it to our DB
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getSupportedDocumentsForCountry()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSupportedDocumentsForCountry$Response(params: GetSupportedDocumentsForCountry$Params, context?: HttpContext): Observable<StrictHttpResponse<UsersEkycDocumentOptions>> {
    return getSupportedDocumentsForCountry(this.http, this.rootUrl, params, context);
  }

  /**
   * Get a list of supported EKYC Documents for the given country.
   *
   * Get the different documents that are allowed for a country. User would choose one and uploads it to our DB
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getSupportedDocumentsForCountry$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSupportedDocumentsForCountry(params: GetSupportedDocumentsForCountry$Params, context?: HttpContext): Observable<UsersEkycDocumentOptions> {
    return this.getSupportedDocumentsForCountry$Response(params, context).pipe(
      map((r: StrictHttpResponse<UsersEkycDocumentOptions>): UsersEkycDocumentOptions => r.body)
    );
  }

  /** Path part for operation `getStatusOptionsForEkyc()` */
  static readonly GetStatusOptionsForEkycPath = '/api/v1/ekyc_status_options';

  /**
   * Get EKYC Status Options.
   *
   * Get the different status options that are allowed. It can be used by other developers to update EKYC
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getStatusOptionsForEkyc()` instead.
   *
   * This method doesn't expect any request body.
   */
  getStatusOptionsForEkyc$Response(params?: GetStatusOptionsForEkyc$Params, context?: HttpContext): Observable<StrictHttpResponse<UsersEkycStatusOptions>> {
    return getStatusOptionsForEkyc(this.http, this.rootUrl, params, context);
  }

  /**
   * Get EKYC Status Options.
   *
   * Get the different status options that are allowed. It can be used by other developers to update EKYC
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getStatusOptionsForEkyc$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getStatusOptionsForEkyc(params?: GetStatusOptionsForEkyc$Params, context?: HttpContext): Observable<UsersEkycStatusOptions> {
    return this.getStatusOptionsForEkyc$Response(params, context).pipe(
      map((r: StrictHttpResponse<UsersEkycStatusOptions>): UsersEkycStatusOptions => r.body)
    );
  }

}

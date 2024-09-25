/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { createRegion } from '../fn/region-lcm/create-region';
import { CreateRegion$Params } from '../fn/region-lcm/create-region';
import { deleteRegionByCode } from '../fn/region-lcm/delete-region-by-code';
import { DeleteRegionByCode$Params } from '../fn/region-lcm/delete-region-by-code';
import { deleteRegionByName } from '../fn/region-lcm/delete-region-by-name';
import { DeleteRegionByName$Params } from '../fn/region-lcm/delete-region-by-name';
import { getRegionByCode } from '../fn/region-lcm/get-region-by-code';
import { GetRegionByCode$Params } from '../fn/region-lcm/get-region-by-code';
import { getRegionByName } from '../fn/region-lcm/get-region-by-name';
import { GetRegionByName$Params } from '../fn/region-lcm/get-region-by-name';
import { listRegions } from '../fn/region-lcm/list-regions';
import { ListRegions$Params } from '../fn/region-lcm/list-regions';
import { updateRegion } from '../fn/region-lcm/update-region';
import { UpdateRegion$Params } from '../fn/region-lcm/update-region';
import { UsersCreateRegionsResponse } from '../models/users-create-regions-response';
import { UsersRegionResponse } from '../models/users-region-response';
import { UsersRegionsResponse } from '../models/users-regions-response';

@Injectable({ providedIn: 'root' })
export class RegionLcmService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `createRegion()` */
  static readonly CreateRegionPath = '/api/v1/regions';

  /**
   * Create Region.
   *
   * Create an Region to which user/agent belongs to. Also contains the EKYC documents supported for a user's country/region
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createRegion()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createRegion$Response(params: CreateRegion$Params, context?: HttpContext): Observable<StrictHttpResponse<UsersCreateRegionsResponse>> {
    return createRegion(this.http, this.rootUrl, params, context);
  }

  /**
   * Create Region.
   *
   * Create an Region to which user/agent belongs to. Also contains the EKYC documents supported for a user's country/region
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createRegion$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createRegion(params: CreateRegion$Params, context?: HttpContext): Observable<UsersCreateRegionsResponse> {
    return this.createRegion$Response(params, context).pipe(
      map((r: StrictHttpResponse<UsersCreateRegionsResponse>): UsersCreateRegionsResponse => r.body)
    );
  }

  /** Path part for operation `listRegions()` */
  static readonly ListRegionsPath = '/api/v1/regions/';

  /**
   * List Regions.
   *
   * This would list all the region related data. If region name is provided a partial match is done. If no region name is provided, then all regions are returned
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `listRegions()` instead.
   *
   * This method doesn't expect any request body.
   */
  listRegions$Response(params?: ListRegions$Params, context?: HttpContext): Observable<StrictHttpResponse<UsersRegionsResponse>> {
    return listRegions(this.http, this.rootUrl, params, context);
  }

  /**
   * List Regions.
   *
   * This would list all the region related data. If region name is provided a partial match is done. If no region name is provided, then all regions are returned
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `listRegions$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  listRegions(params?: ListRegions$Params, context?: HttpContext): Observable<UsersRegionsResponse> {
    return this.listRegions$Response(params, context).pipe(
      map((r: StrictHttpResponse<UsersRegionsResponse>): UsersRegionsResponse => r.body)
    );
  }

  /** Path part for operation `getRegionByCode()` */
  static readonly GetRegionByCodePath = '/api/v1/regions/country_code/{country_code}';

  /**
   * Get Region By Region Code.
   *
   * Using Code, fetch the Region Information
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getRegionByCode()` instead.
   *
   * This method doesn't expect any request body.
   */
  getRegionByCode$Response(params: GetRegionByCode$Params, context?: HttpContext): Observable<StrictHttpResponse<UsersRegionResponse>> {
    return getRegionByCode(this.http, this.rootUrl, params, context);
  }

  /**
   * Get Region By Region Code.
   *
   * Using Code, fetch the Region Information
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getRegionByCode$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getRegionByCode(params: GetRegionByCode$Params, context?: HttpContext): Observable<UsersRegionResponse> {
    return this.getRegionByCode$Response(params, context).pipe(
      map((r: StrictHttpResponse<UsersRegionResponse>): UsersRegionResponse => r.body)
    );
  }

  /** Path part for operation `getRegionByName()` */
  static readonly GetRegionByNamePath = '/api/v1/regions/region_name/{region_name}';

  /**
   * Get Region.
   *
   * Using Name, fetch the Region Information
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getRegionByName()` instead.
   *
   * This method doesn't expect any request body.
   */
  getRegionByName$Response(params: GetRegionByName$Params, context?: HttpContext): Observable<StrictHttpResponse<UsersRegionResponse>> {
    return getRegionByName(this.http, this.rootUrl, params, context);
  }

  /**
   * Get Region.
   *
   * Using Name, fetch the Region Information
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getRegionByName$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getRegionByName(params: GetRegionByName$Params, context?: HttpContext): Observable<UsersRegionResponse> {
    return this.getRegionByName$Response(params, context).pipe(
      map((r: StrictHttpResponse<UsersRegionResponse>): UsersRegionResponse => r.body)
    );
  }

  /** Path part for operation `deleteRegionByCode()` */
  static readonly DeleteRegionByCodePath = '/api/v1/regions/{country_code}';

  /**
   * Delete Region By Region Code.
   *
   * Delete region using the region code. This deletes without checking for resource versions
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteRegionByCode()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteRegionByCode$Response(params: DeleteRegionByCode$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteRegionByCode(this.http, this.rootUrl, params, context);
  }

  /**
   * Delete Region By Region Code.
   *
   * Delete region using the region code. This deletes without checking for resource versions
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteRegionByCode$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteRegionByCode(params: DeleteRegionByCode$Params, context?: HttpContext): Observable<void> {
    return this.deleteRegionByCode$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `updateRegion()` */
  static readonly UpdateRegionPath = '/api/v1/regions/{region_name}/resource_version/{resource_version}';

  /**
   * Update Region.
   *
   * Modify the different parameters of an Region
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateRegion()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateRegion$Response(params: UpdateRegion$Params, context?: HttpContext): Observable<StrictHttpResponse<UsersRegionResponse>> {
    return updateRegion(this.http, this.rootUrl, params, context);
  }

  /**
   * Update Region.
   *
   * Modify the different parameters of an Region
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateRegion$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateRegion(params: UpdateRegion$Params, context?: HttpContext): Observable<UsersRegionResponse> {
    return this.updateRegion$Response(params, context).pipe(
      map((r: StrictHttpResponse<UsersRegionResponse>): UsersRegionResponse => r.body)
    );
  }

  /** Path part for operation `deleteRegionByName()` */
  static readonly DeleteRegionByNamePath = '/api/v1/regions/{region_name}/resource_version/{resource_version}';

  /**
   * Delete Region By Region Name.
   *
   * Using the Region Name of the Region, delete. This also checks if the resource version matches to ensure consistency across parallel executions
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteRegionByName()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteRegionByName$Response(params: DeleteRegionByName$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteRegionByName(this.http, this.rootUrl, params, context);
  }

  /**
   * Delete Region By Region Name.
   *
   * Using the Region Name of the Region, delete. This also checks if the resource version matches to ensure consistency across parallel executions
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteRegionByName$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteRegionByName(params: DeleteRegionByName$Params, context?: HttpContext): Observable<void> {
    return this.deleteRegionByName$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}

/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { UsersRegionsResponse } from '../../models/users-regions-response';

export interface ListRegions$Params {

/**
 * maximum number of records to be returned; must be less than 100
 */
  limit?: number;

/**
 * page number of the page to be retrieved; starts from 0.
 */
  page_marker?: number;

/**
 * region name for returning partial match of results. If no region name is provided, all results are returned
 */
  region_name?: string;

/**
 * jwt token of the user invoking this api
 */
  'bearer-token'?: string;
}

export function listRegions(http: HttpClient, rootUrl: string, params?: ListRegions$Params, context?: HttpContext): Observable<StrictHttpResponse<UsersRegionsResponse>> {
  const rb = new RequestBuilder(rootUrl, listRegions.PATH, 'get');
  if (params) {
    rb.query('limit', params.limit, {});
    rb.query('page_marker', params.page_marker, {});
    rb.query('region_name', params.region_name, {});
    rb.header('bearer-token', params['bearer-token'], {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<UsersRegionsResponse>;
    })
  );
}

listRegions.PATH = '/api/v1/regions/';

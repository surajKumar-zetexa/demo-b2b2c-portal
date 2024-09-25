/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { UsersRegionResponse } from '../../models/users-region-response';
import { UsersUpdateRegionRequest } from '../../models/users-update-region-request';

export interface UpdateRegion$Params {

/**
 * Name of the country
 */
  region_name: string;

/**
 * region object version. Ensures concurrent updates do not lead to inconsitency
 */
  resource_version: number;

/**
 * jwt token of the user invoking this api
 */
  'bearer-token': string;
      body?: UsersUpdateRegionRequest
}

export function updateRegion(http: HttpClient, rootUrl: string, params: UpdateRegion$Params, context?: HttpContext): Observable<StrictHttpResponse<UsersRegionResponse>> {
  const rb = new RequestBuilder(rootUrl, updateRegion.PATH, 'put');
  if (params) {
    rb.path('region_name', params.region_name, {});
    rb.path('resource_version', params.resource_version, {});
    rb.header('bearer-token', params['bearer-token'], {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<UsersRegionResponse>;
    })
  );
}

updateRegion.PATH = '/api/v1/regions/{region_name}/resource_version/{resource_version}';

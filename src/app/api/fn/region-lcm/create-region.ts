/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { UsersCreateRegionsRequest } from '../../models/users-create-regions-request';
import { UsersCreateRegionsResponse } from '../../models/users-create-regions-response';

export interface CreateRegion$Params {

/**
 * jwt token of the user invoking this api
 */
  'bearer-token': string;
      body?: UsersCreateRegionsRequest
}

export function createRegion(http: HttpClient, rootUrl: string, params: CreateRegion$Params, context?: HttpContext): Observable<StrictHttpResponse<UsersCreateRegionsResponse>> {
  const rb = new RequestBuilder(rootUrl, createRegion.PATH, 'post');
  if (params) {
    rb.header('bearer-token', params['bearer-token'], {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<UsersCreateRegionsResponse>;
    })
  );
}

createRegion.PATH = '/api/v1/regions';

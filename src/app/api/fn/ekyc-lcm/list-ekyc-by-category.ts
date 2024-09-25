/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { UsersEkyCsResponse } from '../../models/users-eky-cs-response';

export interface ListEkycByCategory$Params {
  limit?: number;
  page_marker?: number;
  category: string;
  agent: string;
  'bearer-token'?: string;
}

export function listEkycByCategory(http: HttpClient, rootUrl: string, params: ListEkycByCategory$Params, context?: HttpContext): Observable<StrictHttpResponse<UsersEkyCsResponse>> {
  const rb = new RequestBuilder(rootUrl, listEkycByCategory.PATH, 'get');
  if (params) {
    rb.query('limit', params.limit, {});
    rb.query('page_marker', params.page_marker, {});
    rb.path('category', params.category, {});
    rb.path('agent', params.agent, {});
    rb.header('bearer-token', params['bearer-token'], {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<UsersEkyCsResponse>;
    })
  );
}

listEkycByCategory.PATH = '/api/v1/agents/{agent}/ekycs/{category}';

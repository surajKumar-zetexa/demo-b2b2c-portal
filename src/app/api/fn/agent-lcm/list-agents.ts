/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { UsersAgentsResponse } from '../../models/users-agents-response';

export interface ListAgents$Params {

/**
 * maximum number of records to be returned; must be less than 100
 */
  limit?: number;

/**
 * page number of the page to be retrieved; starts from 0.
 */
  page_marker?: number;

/**
 * country of the agent'
 */
  country?: string;

/**
 * postal code for the agent
 */
  postalcode?: string;

/**
 * city where agent is registered
 */
  city?: string;

/**
 * discount category of the agent. This dictates discount
 */
  discount?: 'Essential' | 'Basic' | 'Silver' | 'Gold' | '';

/**
 * jwt token of the user invoking this api
 */
  'bearer-token': string;
}

export function listAgents(http: HttpClient, rootUrl: string, params: ListAgents$Params, context?: HttpContext): Observable<StrictHttpResponse<UsersAgentsResponse>> {
  const rb = new RequestBuilder(rootUrl, listAgents.PATH, 'get');
  if (params) {
    rb.query('limit', params.limit, {});
    rb.query('page_marker', params.page_marker, {});
    rb.query('country', params.country, {});
    rb.query('postalcode', params.postalcode, {});
    rb.query('city', params.city, {});
    rb.query('discount', params.discount, {});
    rb.header('bearer-token', params['bearer-token'], {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<UsersAgentsResponse>;
    })
  );
}

listAgents.PATH = '/api/v1/agents';

/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface DeleteUserByQuery$Params {

/**
 * email of the user
 */
  email?: string;

/**
 * phone number of the user
 */
  phone?: string;

/**
 * name of the user
 */
  name?: string;

/**
 * name of the agent managing the user
 */
  agent: string;

/**
 * jwt token of the caller invoking this api
 */
  'bearer-token': string;
}

export function deleteUserByQuery(http: HttpClient, rootUrl: string, params: DeleteUserByQuery$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, deleteUserByQuery.PATH, 'delete');
  if (params) {
    rb.query('email', params.email, {});
    rb.query('phone', params.phone, {});
    rb.query('name', params.name, {});
    rb.path('agent', params.agent, {});
    rb.header('bearer-token', params['bearer-token'], {});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
    })
  );
}

deleteUserByQuery.PATH = '/api/v1/agents/{agent}/users';

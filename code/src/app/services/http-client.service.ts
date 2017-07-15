import { Injectable } from '@angular/core';
import { Http, Headers, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { UserDataStoreService } from './user-data-store.service';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class HttpClientService {

    serverURL: string = "https://rmajay.com/";

    appComponent: any;

  	constructor(private http: Http, private userDataStoreService: UserDataStoreService) {}

    createAuthorizationHeader(headers: Headers) {
      headers.append('x-api-key', this.userDataStoreService.userInfo.api_key); 
    }

    serverPath(path: string): string {
      return `${this.serverURL}${path}`;
    }

  	get(url, params = {}): Promise<any> {
      let headers = new Headers();
      this.createAuthorizationHeader(headers);
	  	let url_params = new URLSearchParams();      
	  	for(var key in params)
	  		if(params.hasOwnProperty(key))
	  			url_params.set(key, params[key]);
      return this.http.get(`${this.serverURL}${url}`, { search: url_params, headers: headers })
        .toPromise()
        .then((response) => {
          return response;
        })
        .catch(function(){});
  	}

    getObservable(url, params = {}): Observable<any> {
      let headers = new Headers();
      this.createAuthorizationHeader(headers);
      let url_params = new URLSearchParams();
      for(var key in params)
        if(params.hasOwnProperty(key))
          url_params.set(key, params[key]);
      return this.http.get(`${this.serverURL}${url}`, { search: url_params, headers: headers })
        .map((response: Response) => {
          return response;
        })
        .catch((error: any) => {
          return Observable.throw(error.json().error || 'Server error');
        })
    }

  	post(url, data): Promise<any> {
      this.appComponent.showLoading();
      let headers = new Headers();
      let scope = this;
      this.createAuthorizationHeader(headers);
      return this.http.post(`${this.serverURL}${url}`, data, { headers: headers })
        .toPromise()
        .then((response) => {
          this.appComponent.dismissLoading();
          return response;
        })
        .catch(function(){scope.appComponent.dismissLoading();});
  	}

    purePost(url, data): Promise<any> {
      //url = url.replace('rmajay.com', 'rmajay.com:3000').replace('https', 'http');
      this.appComponent.showLoading();
      let scope = this;
      let headers = new Headers();
      this.createAuthorizationHeader(headers);
      return this.http.post(`${url}`, data, { headers: headers })
        .toPromise()
        .then((response) => {
          this.appComponent.dismissLoading();
          return response;
        })
        .catch(function(){scope.appComponent.dismissLoading();});
    }

    put(url, data): Promise<any> {
      let headers = new Headers();
      this.createAuthorizationHeader(headers);
      return this.http.put(`${this.serverURL}${url}`, data, { headers: headers }).toPromise()
        .then((response) => {
          return response;
        })
        .catch(function(){});
    }

    delete(url): Promise<any> {
      let headers = new Headers();
      this.createAuthorizationHeader(headers);
      return this.http.delete(`${this.serverURL}${url}`, { headers: headers }).toPromise()
        .then((response) => {
          return response;
        })
        .catch(function(){});
    }
}

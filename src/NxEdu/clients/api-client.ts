import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

/**
 * 
 * api-client: provide the service to call the EduApi by the {templateId, version} or {api-id} with request body
 * 
 */
 @Injectable({
    providedIn: 'root'
  })
  export class NxApiProxyClient {

    domain:string | undefined;    

    constructor(private _httpClient: HttpClient){

    }

    build(domain:string = 'http://localhost:10139/v3/edu/ApiProxy/'){
        this.domain = domain;
    }

    callAPI(apiId:string, request:any){
        return this._httpClient.post<any>(this.domain+apiId, request);
    }


  }


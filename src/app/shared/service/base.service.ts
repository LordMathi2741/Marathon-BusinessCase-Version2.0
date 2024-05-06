import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from "../../../environments/environment";
import {HttpErrorResponse} from "@angular/common/http";
import {catchError, retry, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BaseService<T> {
  baseUrl:string=environment.baseUrl;
  resourceEndPoint:string = "";
  constructor(private http:HttpClient) { }
  httpOptions = {
    headers: {
      'Content-Type': 'application/json',
    }
  }
  handleError(error: HttpErrorResponse) {
     if(error.error instanceof ErrorEvent){
       console.error('An error occurred:', error.error.message);
     }
      else{
        console.error(
          `Backend returned code ${error.status}, ` +
          `body was: ${error.error}`);
      }
      return throwError('Something bad happened; please try again later.');
  }
  resourcePath(){
    return this.baseUrl + this.resourceEndPoint;
  }

  getWinner(){
     return this.http.get<T>(this.resourcePath() + "?ranking=1",this.httpOptions ).pipe(retry(2),catchError(this.handleError));
  }

  getCenters(){
      return this.http.get<T>(this.resourcePath(),this.httpOptions).pipe(retry(2),catchError(this.handleError));;
  }
  getParticipantsByCenter(centerId:number){
     return this.http.get<T>(this.resourcePath() + `/${centerId}`+"/participants", this.httpOptions).pipe(retry(2),catchError(this.handleError));;
  }




}

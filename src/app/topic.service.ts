import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { TopicRequest } from './shared/topicRequest';

import { GlobalVariables } from './shared/globalVariables';

import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class TopicService {

  constructor(private http: HttpClient) { }

  getAllTopics(){
    return this.http.get("http://localhost:8080/topics")
               .subscribe(data => {
                                    console.log(data);
                                 });  
  }

  private handleError(error: HttpErrorResponse) {
  if (error.error instanceof ErrorEvent) {
    console.error('An error occurred:', error.error.message);
  } else {
    console.error(
      `Backend returned code ${error.status}, ` +
      `body was: ${error.error}`);
  }
  return new ErrorObservable(
    'Something bad happened; please try again later.');
};

}

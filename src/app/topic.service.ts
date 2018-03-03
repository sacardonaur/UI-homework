import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { TopicRequest } from './shared/topicRequest';

import { GlobalVariables } from './shared/globalVariables';

import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, retry } from 'rxjs/operators';

import { Topic } from './shared/topic';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class TopicService {
  static httpOptions = {
                         headers: new HttpHeaders({
                            'Content-Type':  'application/json'
                            })
                        };



  constructor(private http: HttpClient) { }

  getAllTopics(){
    return this.http.get<TopicRequest[]>("http://localhost:8080/topics");  
  }

  deleteTopic(name :string){
    name = "http://localhost:8080/topics/" + name;
    console.log(name);
    return this.http.delete(name, TopicService.httpOptions);
  }

  createTopic(topic: Topic){
         console.log(topic);
     return this.http.post<Topic>("http://localhost:8080/topics", JSON.stringify(topic), TopicService.httpOptions);

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

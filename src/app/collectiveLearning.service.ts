import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { TopicRequest } from './shared/topicRequest';

import { GlobalVariables } from './shared/globalVariables';

import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, retry } from 'rxjs/operators';

import { Topic } from './shared/topic';
import { HttpHeaders } from '@angular/common/http';

import { Collaborator } from './shared/collaborator';
import { Detail } from './shared/detail';

@Injectable()
export class CollectiveLearningService {
  static httpOptions = {
                         headers: new HttpHeaders({
                            'Content-Type':  'application/json'
                            })
                        };

  constructor(private http: HttpClient) { } 

  //------------------------------Collaborator-------------------------------------------//
  
  static collaboratorURL = GlobalVariables.apiLocation + GlobalVariables.collaborators;

  getAllCollaborators(){
    return this.http.get<Collaborator[]>(CollectiveLearningService.collaboratorURL);
  }

  getCollaborator(id:string){
    return this.http.get<Collaborator>(CollectiveLearningService.collaboratorURL + "/" + id);    
  }

  getAllDetails(collaboratorId:string){
    return this.http.get<Detail[]>(CollectiveLearningService.collaboratorURL + "/" + 
                                    collaboratorId + "/" + GlobalVariables.details);
  }

  addDetail(collaboratorId:string, detail:Detail){
    let url = CollectiveLearningService.collaboratorURL + "/" + collaboratorId  + 
                GlobalVariables.details;
    
    detail.topic.createdAt = null;
    return this.http.post<Detail>(url, JSON.stringify(detail), CollectiveLearningService.httpOptions);

  }

    deleteDetail(collaboratorId:string, topic:string){
        let url = CollectiveLearningService.collaboratorURL + "/" + collaboratorId  + 
                GlobalVariables.details + "/" + topic;
    
        return this.http.delete(url, CollectiveLearningService.httpOptions);

   }

  //------------------------------Collaborator-------------------------------------------//
  //-----------------------------------Topics---------------------------------------------//   
  getAllTopics(){
    return this.http.get<TopicRequest[]>(GlobalVariables.apiLocation + GlobalVariables.topics);  
  }

  getTopic(name:string){
    console.log(GlobalVariables.apiLocation + GlobalVariables.findByName + name);
    return this.http.get<TopicRequest[]>(GlobalVariables.apiLocation + GlobalVariables.topics + 
                                            GlobalVariables.findByName + name);

  }

  deleteTopic(name :string){
    name = GlobalVariables.apiLocation + GlobalVariables.topics + "/" + name;
    return this.http.delete(name, CollectiveLearningService.httpOptions);
  }

  createTopic(topic: Topic){
     return this.http.post<Topic>(GlobalVariables.apiLocation + GlobalVariables.topics, 
                                    JSON.stringify(topic), CollectiveLearningService.httpOptions);

  }

  update(topic: Topic){
     return this.http.put<Topic>(GlobalVariables.apiLocation + GlobalVariables.topics, 
                                    JSON.stringify(topic), CollectiveLearningService.httpOptions);

  }

  //---------------------------------------Topics-------------------------------------------------//

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

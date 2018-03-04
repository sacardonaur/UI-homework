import { Component, OnInit } from '@angular/core';

import { CollectiveLearningService } from '../collectiveLearning.service';

import { TopicRequest } from '../shared/topicRequest';
import { Topic } from '../shared/topic';

import { Window } from '../shared/windows';

import { Collaborator } from '../shared/collaborator';
import { Detail } from '../shared/detail';
import { DetailFormTemplate } from '../shared/detailFormTemplate';

@Component({
  selector: 'app-topic',
  templateUrl: './collectiveLearning.component.html',
  styleUrls: ['./collectiveLearning.component.css']
})
export class CollectiveLearningComponent implements OnInit {

  tRequest: TopicRequest[];
  localTopics = [];
  topic:Topic;
  collaborators: Collaborator[]; //Demo only!!!!
  detail: DetailFormTemplate;
  isDataAvailable:boolean;

  constructor(private service : CollectiveLearningService) {
    this.topic = new Topic();
    this.detail = new DetailFormTemplate();
    this.isDataAvailable = false;
  }

  ngOnInit() {
    this.getAllTopics(); 
    this.getAllCollaborators();
  }


  //---------------------------Collaborator-----------------------------------//

  fillCollaborators(data: Collaborator[]){
    this.collaborators = { ...data };
    this.isDataAvailable = true;
    //this.getCollaborator("yes");
    //this.getAllDetails(this.collaborators[0].id);
  }

  getAllCollaborators(){
    return this.service.getAllCollaborators().subscribe(data => this.fillCollaborators(data));
  }

  getCollaborator(collaboratorId:string){
    this.service.getCollaborator(this.collaborators[0].id).subscribe(data => console.log(data));
  }

  getAllDetails(collaboratorId:string){
    this.service.getAllDetails(collaboratorId).subscribe(data => console.log(data));
  }

  addDetail(){
    let detail = new Detail();
    for(let value of Object.values(this.tRequest)){
        if(value.name == this.detail.topic){
            detail.topic = new Topic(value);
        }
    } 
    detail.expertise = this.detail.expertise;
    console.log(detail);
    detail.topic.createdAt = null;
    this.service.addDetail(this.collaborators[0].id, detail).subscribe(data => console.log(data));
  }

  //---------------------------Collaborator-----------------------------------//

  //---------------------------Topic Related----------------------------------//  
  getAllTopics(){
    return this.service.getAllTopics().subscribe(data => this.listTopics(data));
  }

  listTopics(data){
    this.tRequest = { ...data };
    this.localTopics = [];
    for (let value of Object.values(this.tRequest)){
        this.localTopics.push({name:value.name, description:value.description});
    }
  }

  postTopic(){
    this.service.createTopic(this.topic).subscribe(data => this.getAllTopics());
  }

  deleteTopic(){
    this.service.deleteTopic(this.searchTopicByName(this.topic.name)).subscribe(data => this.getAllTopics());
  }

  searchTopicByName(name: string){
    for(let value of Object.values(this.tRequest)){
        if(value.name == name){
            return value.id;
        }
    }
  }

  searchTopic(name:string){
    if(name){
        return this.service.getTopic(name);
    }
    this.service.getTopic(this.topic.name).subscribe(data => this.listTopics(data));
  }

  updateTopic(){
    this.topic.id = this.searchTopicByName(this.topic.name); 
    this.service.update(this.topic).subscribe(data => this.getAllTopics());
  }

  //-----------------------------------Topic Related---------------------------------------------//

}

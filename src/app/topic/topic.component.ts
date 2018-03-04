import { Component, OnInit } from '@angular/core';

import { TopicService } from '../topic.service';

import { TopicRequest } from '../shared/topicRequest';
import { Topic } from '../shared/topic';

import { Window } from '../shared/windows';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {

  tRequest: TopicRequest[];
  localTopics = [];
  topic:Topic;

  constructor(private service : TopicService) {
    this.topic=new Topic();
  }

  ngOnInit() {
    this.getAllTopics(); 
  }

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

  searchTopic(){
    this.service.getTopic(this.topic.name).subscribe(data => this.listTopics(data));
  }

  updateTopic(){
    this.topic.id = this.searchTopicByName(this.topic.name); 
    this.service.update(this.topic).subscribe(data => this.getAllTopics());
  }

}

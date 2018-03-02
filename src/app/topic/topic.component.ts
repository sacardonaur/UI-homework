import { Component, OnInit } from '@angular/core';

import { TopicService } from '../topic.service';

import { TopicRequest } from '../shared/topicRequest';
import { Topic } from '../shared/topic';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {

  tRequest: TopicRequest[];
  localTopics : Array<Topic>;
  constructor(private service : TopicService) {
    this.localTopics = new Array<Topic>();
  }

  ngOnInit() {
    this.getAllTopics(); 
  }

  getAllTopics(){
    return this.service.getAllTopics().subscribe(data => this.listTopics(data));
  }

  listTopics(data){
    this.tRequest = { ...data };
    for (let value of Object.values(this.tRequest)){
        this.localTopics.push(value);
    }
  }

}

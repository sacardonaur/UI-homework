import { Component, OnInit } from '@angular/core';

import { TopicService } from '../topic.service';

import { TopicRequest } from '../shared/topicRequest';
import { Topic } from '../shared/topic';

import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MenuItem } from 'primeng/api';
import { Window } from '../shared/windows';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {

  newTopicForm: FormGroup;
  tRequest: TopicRequest[];
  localTopics = [{name:"Nicolas", description:"Description"}];

  constructor(private fBuilder: FormBuilder, private service : TopicService) {
  }

  ngOnInit() {
    this.getAllTopics(); 
  }

  getAllTopics(){
    return this.service.getAllTopics().subscribe(data => this.listTopics(data));
  }

  listTopics(data){
    this.newTopicForm = this.fBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
    });
    this.tRequest = { ...data };
    for (let value of Object.values(this.tRequest)){
        this.localTopics.push({name:value.name, description:value.description});
    }
    console.log(this.localTopics);
  }



}

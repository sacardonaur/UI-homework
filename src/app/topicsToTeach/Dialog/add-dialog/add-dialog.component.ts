import { Component,Inject, OnInit} from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { TopicsToTeachService } from '../../../topicsToTeach.service';

import { TopicRequest } from '../../../shared/topicRequest';
import { Topic } from '../../../shared/topic';

import { Window } from '../../../shared/windows';

import { FormGroup, FormBuilder, ReactiveFormsModule, Validators, FormControl, FormArray } from '@angular/forms';

import {Observable} from 'rxjs/Observable';
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';

import { Collaborator } from '../../../shared/collaborator';
import { DetailTable } from '../../../shared/detailTable';
import { Detail } from '../../../shared/detail';
import { DetailFormTemplate } from '../../../shared/detailFormTemplate';

@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.css']
})
export class AddDialogComponent implements OnInit {
  localTopics = [];
  detail: DetailFormTemplate;
  windows : Window;
  collaboratorDemo: Collaborator; 
  addDetailForm: FormGroup;
  addDetailAndTopicForm: FormGroup;
  detailExists: boolean;
  addDescription:boolean;
  filteredTopics:Observable<any[]>;
  topics:string[];
    
  ngOnInit() {
   

  }

  constructor(public dialog: MatDialog, 
              private service : TopicsToTeachService, 
              @Inject(MAT_DIALOG_DATA) public data: any,
              private dialogRef: MatDialogRef<AddDialogComponent>
             ) {
        this.topics = [""];
        this.localTopics = data.localTopics;
        this.detail = data.detail;
        this.collaboratorDemo = data.collaboratorDemo;
        this.windows = data.windows;
        this.detailExists = false;
        this.addDescription = false;
        this.addDetailForm = new FormGroup({
            'topic':new FormControl(this.detail.topic, Validators.required),
            'expertise': new FormControl({ value: 0, disabled: false },
                                            [Validators.max(3), Validators.min(1)])
        });

        this.addDetailAndTopicForm = new FormGroup({
            'topic':new FormControl(this.detail.topic, Validators.required),
            'expertise': new FormControl({ value: 0, disabled: false },
                                            [Validators.max(3), Validators.min(1)]),
            'description': new FormControl(this.detail.description, Validators.required)
        });
        
  }

  searchTopic(name:string){
    var cnt = 0;
    for(let value of this.localTopics){
        if(value.name.toLowerCase() == name.toLowerCase()){
            return cnt;
        }
        cnt++;
    }
    return -1;
  }

  addDetail(){
    let detailA = new Detail();
    detailA.topic = new Topic();
    let cnt = this.searchTopic(this.detail.topic);
    console.log(this.collaboratorDemo.topicsToTeach);
    for(let value of this.collaboratorDemo.topicsToTeach){
        if(value.topic.name.toLowerCase() == this.detail.topic.toLowerCase()){
            this.detailExists = true;
            this.detail = new DetailFormTemplate();
            return;
        }
    }
    if(cnt > -1){
       this.windows.createDetail = false;
       let aux = this.localTopics[cnt];
       detailA.topic.name = aux.name;
       detailA.topic.description = aux.description;
       detailA.topic.id = aux.id;
       detailA.expertise = this.detail.expertise;
       this.detail = new DetailFormTemplate();
       this.service.addDetail(this.collaboratorDemo.id, detailA).subscribe(data => this.dialogRef.close(data));
       ;
    }else{
        this.addDescription = true;
        this.windows.showDefaultCreateDetail = false;
        this.windows.createTopicAndDetail = true;
        return;
    }
  }

 
  addDetailAndTopic(){
    
    let detailA = new Detail();
    detailA.topic = new Topic();
    detailA.topic.name = this.detail.topic;
    detailA.topic.description = this.detail.description;
    detailA.expertise = this.detail.expertise;
    this.windows.createTopicAndDetail = false;
    this.detail = new DetailFormTemplate();

    this.service.addDetail(this.collaboratorDemo.id, detailA).subscribe(data =>  this.dialogRef.close(data));
  }

  cancelTopicCreation(){
    this.windows.createTopicAndDetail = false;
    this.windows.showDefaultCreateDetail = true;
    this.detail = new DetailFormTemplate();
    this.dialogRef.close("canceled");
  }

  resetForms(){
    this.windows.createTopic = false;
    this.cancelTopicCreation();

  }

  filterTopics(name: string): string[] {
    this.detail.topic = this.topics.filter(topic =>
      topic.toLowerCase().indexOf(name.toLowerCase()) === 0)[0];

    return this.topics.filter(topic =>
      topic.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }

}

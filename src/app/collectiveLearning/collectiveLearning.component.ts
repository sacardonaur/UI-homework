import { Component, OnInit, ViewChild, Inject} from '@angular/core';

import { CollectiveLearningService } from '../collectiveLearning.service';

import { TopicRequest } from '../shared/topicRequest';
import { Topic } from '../shared/topic';

import { Window } from '../shared/windows';

import { Collaborator } from '../shared/collaborator';
import { Detail } from '../shared/detail';
import { DetailFormTemplate } from '../shared/detailFormTemplate';

import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-topic',
  templateUrl: './collectiveLearning.component.html',
  styleUrls: ['./collectiveLearning.component.css']
})
export class CollectiveLearningComponent implements OnInit {

  tRequest: TopicRequest[];
  localTopics = [];
  topic:Topic;
  detail: DetailFormTemplate;
  isDataAvailable:boolean;
  windows : Window;

  //Material-Table
  displayedColumns = ['name', 'description', 'delete', 'Edit'];
  dataSource: MatTableDataSource<Topic>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  //Material-Table


  collaboratorDemo = {name:"Luis", topicsToTeach:[]}; //Demo only!!!!
  searchTopicsArray = []; //Demo Only!!!


  constructor(private service : CollectiveLearningService) {
    this.topic = new Topic();
    this.detail = new DetailFormTemplate();
    this.dataSource = new MatTableDataSource(this.localTopics);
    //this.isDataAvailable = false;
  }

  ngOnInit() {
    /*
    this.getAllTopics(); 
    this.getAllCollaborators();
    */
    //Mock
    this.collaboratorDemo.topicsToTeach = []; //demo
    this.collaboratorDemo.name = "Luis";
    this.isDataAvailable = true;
    this.windows = new Window();
  }


  //--------------------------mock Collaborator-------------------------------//
  addDetail(){
    let detailA = new Detail();
    detailA.topic = new Topic();
    let cnt = 0;
    for(let value of this.localTopics){
        if(this.detail.topic == value.name){
            detailA.topic.name = value.name;
            detailA.topic.description = value.description;
            detailA.expertise = this.detail.expertise;
            break;
        }
        cnt = cnt + 1;
    }
    this.collaboratorDemo.topicsToTeach.push(detailA);
  }
    

  //---------------------------Topic Related Mock----------------------------------//  


  postTopic(){
    this.localTopics.push({name:this.topic.name, description:this.topic.description});
    this.dataSource.data = this.localTopics;
    this.windows.createTopic = false;
    this.topic = new Topic();
  }

  deleteTopic(name:string){
    let cnt = 0;
    for(let value of this.localTopics){
        if(name == value.name){
            this.localTopics.splice(cnt, 1);
            this.dataSource.data = this.localTopics;
            break;
        }
        cnt = cnt + 1;
    }
  }

  searchTopic(){
    this.searchTopicsArray = [];
    for(let value of this.localTopics){
        if(value.name.indexOf(this.topic.name) != -1){
            this.searchTopicsArray.push({name:value.name, description:value.description});
        }
    }
  }

  updateTopic(){
    let cnt = 0;
    for(let value of this.localTopics){
        if(this.topic.name == value.name){
            this.localTopics[cnt] = {name:this.topic.name, description:this.topic.description};
            this.dataSource.data = this.localTopics;
            this.windows.updateTopic = false;
            this.topic = new Topic();
            break;
        }
        cnt = cnt + 1;
    }
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  addTopicWindow(){
    this.windows.createTopic = !this.windows.createTopic;
  }

  updateTopicWindow(name:string){
    this.topic.name = name;
    this.windows.updateTopic = !this.windows.updateTopic;
  }
  //-----------------------------------Topic Related---------------------------------------------//

  
  
/* BackEnd 
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
*/

  //---------------------------Collaborator-----------------------------------//
/*
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
*/
  //---------------------------Collaborator-----------------------------------//

}

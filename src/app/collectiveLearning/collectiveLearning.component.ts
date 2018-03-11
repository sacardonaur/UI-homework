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
  windows : Window;
  collaborators: Collaborator[];

  //Material-Table
  displayedColumns = ['name', 'description', 'delete', 'Edit'];
  dataSource: MatTableDataSource<Topic>;

  expertiseOptions = ["1", "2", "3"];

  displayedColumsCollaborator = ['name', 'description', 'expertise', 'delete'];
  dataSourceCollaborator: MatTableDataSource<Detail>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  //Material-Table


  collaboratorDemo: Collaborator; //Demo only!!!!


  constructor(private service : CollectiveLearningService) {
    this.topic = new Topic();
    this.detail = new DetailFormTemplate();
    }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.localTopics);
    this.dataSourceCollaborator = new MatTableDataSource();
    this.getAllTopics(); 
    this.getAllCollaborators();
    this.windows = new Window();
  }


  //--------------------------mock Collaborator-------------------------------//
 
  
  addDetail(){
    let detailA = new Detail();
    detailA.topic = new Topic();
    let cnt = this.searchTopic(this.detail.topic);
    for(let value of this.collaboratorDemo.topicsToTeach){
        if(value.topic.name == this.detail.topic){
            alert("The topic already exists");
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
       //this.service.deleteTopic(this.searchTopicByName(aux.name)).subscribe(data => this.getAllTopics());
       this.service.addDetail(this.collaborators[0].id, detailA).subscribe(data => this.getAllDetails(this.collaboratorDemo.id));
       this.detail = new DetailFormTemplate();
    }else{
        alert("The topic does not exist. A new topic will be created\n Please add the description of the new topic");
        this.windows.showDefaultCreateDetail = false;
        this.windows.createTopicAndDetail = true;
        return;
    }
  }


  deleteDetail(name:string){
    for(let value of this.collaboratorDemo.topicsToTeach){
        if(name == value.topic.name){
            this.service.deleteDetail(this.collaborators[0].id, value.topic.id)
                    .subscribe(data => this.getAllDetails(this.collaboratorDemo.id));
            break;
        }
    }
    

  }    
 
 addDetailAndTopic(){
    this.windows.createDetail = false;
    this.windows.showDefaultCreateDetail = true;
    let detailA = new Detail();
    detailA.topic = new Topic();
    detailA.topic.name = this.detail.topic;
    detailA.topic.description = this.detail.description;
    detailA.expertise = this.detail.expertise;
    this.service.addDetail(this.collaboratorDemo.id, detailA).subscribe(data => this.getAllDetails(this.collaboratorDemo.id));
    this.windows.createTopicAndDetail = false;
    this.detail = new DetailFormTemplate();
  
  }

  searchTopic(name:string){
    var cnt = 0;
    for(let value of this.localTopics){
        if(value.name == name){
            return cnt;
        }
        cnt++;
    }
    return -1;
  }

  showCollaboratorDemo(){
    this.windows.collaboratorDemo = true;
    this.windows.topicDemo = false;
  }

  updateEditWindow(name:string){
    this.windows.updateDetail = true;
    this.detail.topic = name;
  }

  createDetailWindow(){
    this.windows.createDetail = !this.windows.createDetail;
  }

  updateDetail(){
    let cnt = 0;
    for(let value of this.collaboratorDemo.topicsToTeach){
        if(this.detail.topic == value.topic.name){
            this.collaboratorDemo.topicsToTeach[cnt].expertise = this.detail.expertise;
            this.service.addDetail(this.collaborators[0].id, this.collaboratorDemo.topicsToTeach[cnt])
                .subscribe(data => this.getAllDetails(this.collaboratorDemo.id));
            this.windows.updateDetail = false;
            this.detail = new DetailFormTemplate();
            break;
        }
        cnt = cnt + 1;
   }
  }

  //---------------------------Topic Related Mock----------------------------------//  

  showTopicDemo(){
    this.getAllTopics();
    this.windows.collaboratorDemo = false;
    this.windows.topicDemo = true;
  }
  postTopic(){
    if(this.topic.name){
        for(let value of this.localTopics){
            if(this.topic.name == value.name){
                alert("That topic already exists");
                this.topic = new Topic();
                return;
            }
        }        
    }else{
        alert("Name field is required");
        return;
    }
    console.log(this.topic);
    this.service.createTopic(this.topic).subscribe(data => this.getAllTopics());
    this.windows.createTopic = false;
    this.topic = new Topic();
  }

  deleteTopic(name:string){
    let cnt = 0;
    for(let value of this.localTopics){
        if(name == value.name){
         this.service.deleteTopic(this.searchTopicByName(name)).subscribe(data => this.getAllTopics());
         break;
        }
        cnt = cnt + 1;
    }
    cnt = 0;
    for(let value of this.collaboratorDemo.topicsToTeach){
        if(name == value.topic.name){
            this.service.deleteDetail(this.collaboratorDemo.id, value.topic.id)
                    .subscribe(data => this.getAllDetails(this.collaboratorDemo.id));
            break;
        }
        cnt = cnt + 1;

    }

  }


  updateTopic(){
    let cnt = 0;
    for(let value of this.localTopics){
        if(this.topic.name == value.name){
            this.topic.id = this.searchTopicByName(this.topic.name); 
            this.service.update(this.topic).subscribe(data => this.getAllTopics());
            this.searchDetail(this.topic.name, this.topic.description); 
            this.windows.updateTopic = false;
            this.topic = new Topic();
            break;
        }
        cnt = cnt + 1;
    }
  }

  searchDetail(name:string, description){
    for (let value of this.collaboratorDemo.topicsToTeach){
        if(value.topic.name == name){
            let exp = value;
            exp.topic.description = description;
            this.service.addDetail(this.collaboratorDemo.id, exp)
                .subscribe(data => this.getAllDetails(this.collaboratorDemo.id));
        }
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

  applyFilterC(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSourceCollaborator.filter = filterValue;
  }

  addTopicWindow(){
    this.windows.createTopic = !this.windows.createTopic;
  }

  updateTopicWindow(name:string){
    this.topic.name = name;
    this.windows.updateTopic = !this.windows.updateTopic;
  }
  //-----------------------------------Topic Related---------------------------------------------//

  
  
/* BackEnd*/ 
  //---------------------------Topic Related----------------------------------// 

  getAllTopics(){
    return this.service.getAllTopics().subscribe(data => this.listTopics(data));
  }

  listTopics(data){
    this.tRequest = { ...data };
    this.localTopics = [];
    for (let value of Object.values(this.tRequest)){
        this.localTopics.push({name:value.name, description:value.description, id:value.id});
    }
    this.dataSource.data = this.localTopics;
  }

  searchTopicByName(name: string){
    for(let value of Object.values(this.tRequest)){
        if(value.name == name){
            return value.id;
        }
    }
  }


  //---------------------------Collaborator-----------------------------------//

  fillCollaborators(data: Collaborator[]){
    this.collaborators = { ...data };
    this.collaboratorDemo = this.collaborators[0];
    this.windows.isColDemoInit = true;
    this.dataSourceCollaborator.data = this.collaborators[0].topicsToTeach;
  }

  getAllCollaborators(){
    return this.service.getAllCollaborators().subscribe(data => this.fillCollaborators(data));
  }
  getAllDetails(collaboratorId:string){
    this.service.getAllDetails(collaboratorId)
        .subscribe(data => this.initializeDetails(data));
  }

  initializeDetails(data:Detail[]){
    this.dataSourceCollaborator.data=data;
    this.collaboratorDemo.topicsToTeach=data;
  }

  //---------------------------Collaborator-----------------------------------//

}

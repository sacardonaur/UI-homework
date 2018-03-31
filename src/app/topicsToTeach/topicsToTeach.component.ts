import { Component, OnInit, ViewChild, Inject} from '@angular/core';

import { TopicsToTeachService } from '../topicsToTeach.service';

import { TopicRequest } from '../shared/topicRequest';
import { Topic } from '../shared/topic';

import { Window } from '../shared/windows';

import { Collaborator } from '../shared/collaborator';
import { DetailTable } from '../shared/detailTable';
import { Detail } from '../shared/detail';
import { DetailFormTemplate } from '../shared/detailFormTemplate';

import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

import { MatDialog } from '@angular/material';

import { AddDialogComponent } from './Dialog/add-dialog/add-dialog.component';
import { EditDialogComponent } from './Dialog/edit-dialog/edit-dialog.component';
import { DeleteDialogComponent } from './Dialog/delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-topic',
  templateUrl: './topicsToTeach.component.html',
  styleUrls: ['./topicsToTeach.component.css']
})
export class TopicsToTeachComponent implements OnInit {

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

  displayedColumsCollaborator = ['name', 'description', 'expertise', 'Date of Creation', "link",  'edit',  'delete'];
  dataSourceCollaborator: MatTableDataSource<DetailTable>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  //Material-Table


  collaboratorDemo: Collaborator; //Demo only!!!!


  constructor(private service : TopicsToTeachService,
              private modalDialog: MatDialog) {
    this.topic = new Topic();
    this.detail = new DetailFormTemplate();
    }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.localTopics);
    this.dataSourceCollaborator = new MatTableDataSource<DetailTable>();
    this.getAllTopics(); 
    this.getAllCollaborators();
    this.windows = new Window();
  }


  //--------------------------mock Collaborator-------------------------------//
 
  
  addDetailDialog(){
    const modalRef = this.modalDialog.open(AddDialogComponent, {
        width: '235px',
        data: { localTopics: this.localTopics, detail:new DetailFormTemplate(), collaboratorDemo: this.collaboratorDemo, windows: this.windows }
    });
    modalRef.afterClosed().subscribe(result => {
      if(result === "canceled" || result === undefined){
        return;
      }
      this.windows.showDefaultCreateDetail = true;
      this.getAllTopics();
      this.initializeDetails(result);
    });
  }
  
  
  
 deleteDetail(name:string){
    const modalRef = this.modalDialog.open(DeleteDialogComponent, {
        width: 'auto',
    });
    modalRef.afterClosed().subscribe(result => {
      if(!result || result === undefined){
        return;
      }else{
        for(let value of this.collaboratorDemo.topicsToTeach){
            if(name == value.topic.name){
                this.service.deleteDetail(this.collaboratorDemo.id, value.topic.id)
                    .subscribe(data => this.getAllDetails(this.collaboratorDemo.id));
                break;
            }
        }     
      }
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

  showCollaboratorDemo(){
    this.resetForms();
  }

  updateEditWindow(name:string){
    this.detail.topic = name;
    this.updateDetail();
  }

  resetForms(){
    this.windows.createTopic = false;

  }


  updateDetail(){
    let cnt = 0;
    for(let value of this.collaboratorDemo.topicsToTeach){
        if(this.detail.topic == value.topic.name){
            const modalRef = this.modalDialog.open(EditDialogComponent, {
                width: '300px',
                data: { detail: this.collaboratorDemo.topicsToTeach[cnt], 
                        collaboratorId: this.collaboratorDemo.id, collaboratorName: this.collaboratorDemo.name }
        });
        modalRef.afterClosed().subscribe(result => {
            if(result === "canceled" || result === undefined){
                return;
            }else{
                this.initializeDetails(result);
            }
        });
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
    this.resetForms();
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
    this.dataSourceCollaborator.paginator = this.paginator;
    this.dataSourceCollaborator.sort = this.sort;
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
    for(let value of Object.values(this.collaborators)){
        if(value.name == "Luis"){
            this.collaboratorDemo = value;
            this.initializeDetails(value.topicsToTeach);
        }
    }
   }

  getAllCollaborators(){
    return this.service.getAllCollaborators().subscribe(data => this.fillCollaborators(data));
  }
  getAllDetails(collaboratorId:string){
    this.service.getAllDetails(collaboratorId)
        .subscribe(data => this.initializeDetails(data));
  }

  initializeDetails(data:Detail[]){
    this.collaboratorDemo.topicsToTeach=data;
    let cnt = 0;
    let array = [];
    for(let i = 0; i < data.length; i++){
        let addedAt = "";
        if(data[i].addedAt){
            addedAt = data[i].addedAt.substring(0,10);
        }else{
            addedAt = data[i].topic.createdAt.substring(0,10);
        }
        
        let expertise = "";
        if(data[i].expertise === "beginner"){
            expertise = "★";
        } else if (data[i].expertise === "expert"){
            expertise = "★★★";
        } else {
            expertise = "★★";
        }
        array.push(new DetailTable(data[i], addedAt, expertise));

    }
    this.dataSourceCollaborator = new MatTableDataSource(array);
    this.windows.isColDemoInit = true;
  }

  //---------------------------Collaborator-----------------------------------//

}

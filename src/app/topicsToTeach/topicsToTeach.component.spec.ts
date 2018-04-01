import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { GlobalVariables } from '../shared/globalVariables';
import { TopicsToTeachComponent } from './topicsToTeach.component';
import { TopicsToTeachService } from '../topicsToTeach.service';
import { Collaborator } from '../shared/collaborator';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from '../routes.module';
import { FormsModule } from '@angular/forms';
import { TopicsToTeachModule } from './topicsToTeach.module';
import { Topic } from '../shared/topic';
import { Detail } from '../shared/detail';
import { HttpClientModule } from '@angular/common/http';


describe('TopicsToTeachService', () => {
  let component: TopicsToTeachComponent;
  let fixture: ComponentFixture<TopicsToTeachComponent>;
  let collaboratorURL = GlobalVariables.apiLocation + GlobalVariables.collaborators;
  let boolAddition = false;
  let boolDeletion = false;

  //service testing
  let service: TopicsToTeachService; 
  let collaborator: Collaborator;

  beforeEach(async(() => {
        TestBed.configureTestingModule({
          imports: [ 
            RouterTestingModule,
            FormsModule,
            TopicsToTeachModule
          ],
          declarations: [ ],
          providers: [ 
            TopicsToTeachService 
          ]
        })
        .compileComponents();
        //testing getAllCollaborators
        service = TestBed.get(TopicsToTeachService);
        service.getAllCollaborators().subscribe(values => 
                    values.forEach(function(value){
                        if(value.name === "Jose"){
                            collaborator = value;
                            
                            let topic = new Topic();
                            topic.name = "C++";
                            topic.description = "topic created from a unit test";
                            let detail = new Detail(topic);
                            detail.expertise = "2";
                            //testing addition
                            service.addDetail(collaborator.id, detail).subscribe(function(values){
                                for(let value of values){
                                    if(value.topic.name === detail.topic.name && 
                                       value.expertise === "expert"   &&
                                       value.topic.description === detail.topic.description){
                                        boolAddition = true;

                                        //testing deletion of C++ after its the addition
                                        service.deleteDetail(collaborator.id, value.topic.id)
                                            .subscribe(function(data){
                                                let control = true;
                                                for(let val of data){
                                                    if(val.topic.name === "C++"){
                                                        control = false;
                                                    }
                                                }
                                                if(control){
                                                    boolDeletion = control;                                
                                                }
                                                return;
                                            });
                                        return;
                                    }   
                                }
                            }); 
                            
                            return;
                        }
                    })
        );
        
  }));

  beforeEach(() => {
        fixture = TestBed.createComponent(TopicsToTeachComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
  });

  it('should create', () => {
        expect(component).toBeDefined();
  });

  it('should get collaborator with name "Jose" correctly', ()=> {
        expect(collaborator).toBeDefined();
  });

  it('the array "topicsToTeach" must not be undefined', ()=> {
        let topicsToTeach = collaborator.topicsToTeach;
        expect(topicsToTeach).toBeDefined();         
  });

  it('each detail should have its creation date', ()=> {
        collaborator.topicsToTeach.forEach(value =>
            expect(value.addedAt).toBeDefined());
  });

  it('adding a new detail should affect topicsToTeach', ()=> {
        expect(boolAddition).toBeTruthy();      
  }); 

  it('deleting a detail should affect topicsToTeach ', ()=> {
        expect(boolDeletion).toBeTruthy();
  });

  
});






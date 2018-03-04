import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectiveLearningComponent } from './collectiveLearning.component';

describe('CollectiveLearningComponent', () => {
  let component: CollectiveLearningComponent;
  let fixture: ComponentFixture<CollectiveLearningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectiveLearningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

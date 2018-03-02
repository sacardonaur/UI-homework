import { Component, OnInit } from '@angular/core';

import { TopicService } from '../topic.service';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {

  constructor(private service : TopicService) { }

  ngOnInit() {
    this.service.getAllTopics();
  }

  getAllTopics(){
    
  }

}

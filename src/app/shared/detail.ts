import { Topic  } from './topic';

export class Detail {
    topic:Topic;
    addedAt:any;
    expertise:string;
    constructor(topic?: Topic){
        if(topic){
            this.topic = topic;
        }
    }
}

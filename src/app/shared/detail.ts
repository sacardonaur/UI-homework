import { Topic } from './topic';

export class Detail {
    topic : Topic;
    expertise : string;

    constructor(topic?: Topic){
        if(topic){
            this.topic = topic;
        }
    }
}

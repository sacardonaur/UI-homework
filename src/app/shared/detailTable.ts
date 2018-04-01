import { Detail } from './detail';

export class DetailTable {
    topic:string;
    description:string;
    createdAt:string;
    expertise:string;
    constructor(detail?: Detail, createdAt?:string, expertise?:string){
        if(detail){
            this.topic = detail.topic.name;
            this.description = detail.topic.description;
            this.createdAt = createdAt;
            this.expertise = expertise;
        }
    }
}

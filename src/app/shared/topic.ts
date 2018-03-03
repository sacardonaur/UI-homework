import { TopicRequest  } from './topicRequest';
export class Topic {
    name: string;
    description: string;
    createdAt: string;
    expiredAt: string;
    openedAt: string;
    teachers_count: number;
    students_count: number;
    constructor(topic?: TopicRequest){
        if(topic){
            this.name = topic.name;
            this.description = topic.description;
            this.createdAt = topic.createdAt;
            this.expiredAt = topic.expiredAt;
            this.openedAt = topic.openedAt;
            this.teachers_count = topic.teachers_count;
            this.students_count = topic.students_count;
        }else{
            this.teachers_count = 0;
            this.students_count = 0;
        }
    }
}

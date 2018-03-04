import { Detail } from './detail';
export interface Collaborator {
    id:string;
    name: string;
    topicsToTeach: Detail[];
}

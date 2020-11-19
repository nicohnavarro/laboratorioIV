import { Professor } from './professor';
import { Student } from './student';

export interface Subject {
    id?:string,
    name:string,
    term:number,
    quotas:number,
    profesor:Professor,
    students:Student[],
}
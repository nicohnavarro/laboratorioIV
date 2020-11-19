import { Professor } from './professor';

export interface Subject {
    id?:string,
    name:string,
    profesor:Professor,
}
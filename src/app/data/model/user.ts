export interface User {
    id?:string,
    email:string,
    password:string,
    type:string,
    isActive:boolean,
    image?:string;
    subjects?:string[],
    nota?:number,
}
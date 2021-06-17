export interface User {
    id?:string,
    email:string,
    password:string,
    type:string,
    isActive:boolean,
    subjects?:string[],
    nota?:number,
}
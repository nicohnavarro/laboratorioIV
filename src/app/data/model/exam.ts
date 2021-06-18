import { Student } from './student';
import { Subject } from './subject';
export interface Exam  {
  subject:Subject,
  student:Student,
  nota:number,
  date:Date
}
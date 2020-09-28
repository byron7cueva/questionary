import { Question } from './Question';

export interface Course {
  idCourse: number;
  name: string;
  questions: Question[];
}
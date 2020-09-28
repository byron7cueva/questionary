import { Question } from './Question';

export interface Course {
  idCourse: number | null;
  name: string;
  questions: Question[];
  // TODO Temporal id for mock data
  id?: string;
}
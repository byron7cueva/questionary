import { Optional } from 'questionary-common';

export interface Question {
  questionId: number;
  courseId: number;
  question: string;
  answere: string;
}

export interface QuestionCreate extends Optional<Question, 'questionId'> {}
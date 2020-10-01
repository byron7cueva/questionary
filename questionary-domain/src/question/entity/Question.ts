import { Optional } from 'questionary-common';

/**
 * Question Entity
 */
export interface Question {
  questionId: number;
  courseId: number;
  question: string;
  answere: string;
}

/**
 * Entity for create Question
 */
export interface QuestionCreate extends Optional<Question, 'questionId'> {}
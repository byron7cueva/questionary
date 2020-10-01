import { AbstUseCase } from 'questionary-common';

import { AbstQuestionRepository } from '../repository/AbstQuestionRepository';
import { Question, QuestionCreate } from '../entity/Question';

/**
 * Abstract class to QuestionUseCase
 */
export abstract class AbstQuestionUseCase extends AbstUseCase<AbstQuestionRepository> {

  /**
   * Save a new question
   * 
   * @param {Question} question Question to save
   * @return {Promise<Question>} Question saved
   */
  abstract save(question: QuestionCreate): Promise<Question>;

  /**
   * Update question
   * 
   * @param {Question} question Question to update
   * @return {Promise<Question>} QUestion updated
   */
  abstract update(question: Question): Promise<Question>;

  /**
   * Delete question
   * 
   * @param {number} questionId Question id
   * @return {Promise<boolean>} True id delete or False if not delete
   */
  abstract delete(questionId: number): Promise<boolean>;

  /**
   * Return all question of a Course
   * 
   * @param {number} courseId Course Id
   * @return {Promise<Question[]>} List of questions
   */
  abstract getQuestionsByCourseId(courseId: number): Promise<Question[]>;

  /**
   * Delete all question of coursessss
   * 
   * @param {number} courseId Course id
   * @return {Promise<boolean>} True if delete if not delete False
   */
  abstract deleteAllByCourseId(courseId: number): Promise<boolean>;
}
import { AbstRepository } from 'questionary-common';
import { Question, QuestionCreate } from '../entity/Question';

/**
 * Abstract class to define Question Repository
 */
export abstract class AbstQuestionRepository extends AbstRepository {

  /**
   * Create question
   * 
   * @param {QuestionCreate} question Question to create
   * @return {Promise<Question>} Question created
   */
  abstract create(question: QuestionCreate): Promise<Question>;

  /**
   * Update question
   * 
   * @param {Promise<Question>} question Question to update
   * @return {Promise<Question>} Question updated
   */
  abstract update(question: Question): Promise<Question>;

  /**
   * Delete question
   * 
   * @param {number} questionId Id of Question
   * @return {Promise<boolean>} True if delete question o false if don't delete
   */
  abstract declare(questionId: number): Promise<boolean>;
}
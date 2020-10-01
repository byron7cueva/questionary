import { AbstGateway } from 'questionary-common';

import { AbstQuestionUseCase } from '../usecase/AbstQuestionUseCase';
import { Question } from '../entity/Question';

export abstract class AbstQuestionGateway extends AbstGateway<AbstQuestionUseCase> {

  /**
   * Save a question
   * 
   * @param {any} question Question to save
   * @return {Promise<Question>} Question
   */
  abstract save(question: any): Promise<Question>;

  /**
   * Update a question
   * 
   * @param {number} questionId Id of question
   * @param {Promise<Question>} question Question
   * @return {Promise<Question>} Question
   */
  abstract update(questionId: number, question: any): Promise<Question>;

  /**
   * Delete a question
   * 
   * @param questionId Id of question
   * @return {Promise<boolean>} True if delete or False if not delete
   */
  abstract delete(questionId: number): Promise<boolean>;
}
import { AbstGateway } from 'questionary-common';

import { AbstQuestionUseCase } from '../usecase/AbstQuestionUseCase';

export abstract class AbstQuestionGateway extends AbstGateway<AbstQuestionUseCase> {

  /**
   * Save a question
   * 
   * @param {any} question Question to save
   * @return {Promise<any>} Question
   */
  abstract save(question: any): Promise<any>;

  /**
   * Update a question
   * 
   * @param {string} questionId Id of question
   * @param {any} question Question
   * @return {Promise<any>} Question
   */
  abstract update(questionId: string, question: any): Promise<any>;

  /**
   * Delete a question
   * 
   * @param questionId Id of question
   * @return {Promise<boolean>} True if delete or False if not delete
   */
  abstract delete(questionId: string): Promise<boolean>;

  /**
   * Return question iinclude query in question
   * 
   * @param {string | undefined} questionQuery Query
   * @return {Promise<any[]>} Collection
   */
  abstract findQuestionsIncludeQuery(questionQuery: string | undefined): Promise<any[]>;
}
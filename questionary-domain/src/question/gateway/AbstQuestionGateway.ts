import { AbstGateway, ServiceResponse } from 'questionary-common';

import { AbstQuestionUseCase } from '../usecase/AbstQuestionUseCase';

export abstract class AbstQuestionGateway extends AbstGateway<AbstQuestionUseCase> {

  /**
   * Save a question
   * 
   * @param {any} question Question to save
   * @return {Promise<ServiceResponse>} Question
   */
  abstract save(question: any): Promise<ServiceResponse>;

  /**
   * Update a question
   * 
   * @param {string} questionId Id of question
   * @param {any} question Question
   * @return {Promise<ServiceResponse>} Question
   */
  abstract update(questionId: string, question: any): Promise<ServiceResponse>;

  /**
   * Delete a question
   * 
   * @param questionId Id of question
   * @return {Promise<ServiceResponse>} True if delete or False if not delete
   */
  abstract delete(questionId: string): Promise<ServiceResponse>;

  /**
   * Return question iinclude query in question
   * 
   * @param {string | undefined} questionQuery Query
   * @return {Promise<ServiceResponse>} Collection
   */
  abstract findQuestionsIncludeQuery(questionQuery: string | undefined): Promise<ServiceResponse>;
}
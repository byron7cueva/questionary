import { AbstGateway, ServiceResponse } from 'questionary-common';

import { AbstQuestionUseCase } from '../usecase/AbstQuestionUseCase';

export abstract class AbstQuestionGateway extends AbstGateway<AbstQuestionUseCase> {

  /**
   * Save a question
   * 
   * @param {any} question Question to save
   * @return {Promise<ServiceResponse<any>>} Question
   */
  abstract save(question: any): Promise<ServiceResponse<any>>;

  /**
   * Update a question
   * 
   * @param {string} questionId Id of question
   * @param {any} question Question
   * @return {Promise<ServiceResponse<any>>} Question
   */
  abstract update(questionId: string, question: any): Promise<ServiceResponse<any>>;

  /**
   * Delete a question
   * 
   * @param questionId Id of question
   * @return {Promise<ServiceResponse<boolean>>} True if delete or False if not delete
   */
  abstract delete(questionId: string): Promise<ServiceResponse<boolean>>;

  /**
   * Return questions include query in question
   * 
   * @param {string | undefined} questionQuery Query
   * @return {Promise<ServiceResponse<any[]>>} Collection
   */
  abstract findQuestionsIncludeQuery(questionQuery: string | undefined): Promise<ServiceResponse<any[]>>;
}
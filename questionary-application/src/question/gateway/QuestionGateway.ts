import { injectable, inject } from 'tsyringe';
import {
  ErrorGateway,
  ServiceResponse,
  wrapperResponse
} from 'questionary-common';
import {
  AbstQuestionGateway,
  AbstQuestionUseCase,
  Question,
  QuestionCreate
} from 'questionary-domain';

import { ContainerToken } from '../../app/ContainerToken';
import { Message } from '../../app/Message';

@injectable()
export class QuestionGateway extends AbstQuestionGateway {

  constructor(
    @inject(ContainerToken.getInstance().AbstQuestionUseCase) useCase: AbstQuestionUseCase
  ) {
    super(useCase);
  }

  /**
   * Save a question
   * 
   * @param {any} question Question to save
   * @return {Promise<ServiceResponse<any>>} Question
   */
  async save(question: any): Promise<ServiceResponse<any>> {
    let newQuestion: QuestionCreate = {
      ...question
    };
    newQuestion = await this.useCase.save(newQuestion);
    return wrapperResponse(newQuestion);
  }

  /**
   * Update a question
   * 
   * @param {string} questionId Id of question
   * @param {any} question Question
   * @return {Promise<ServiceResponse<any>>} Question
   */
  async update(questionId: string, question: any): Promise<ServiceResponse<any>> {
    let updateQuestion: Question = {
      ...question,
      questionId: questionId as unknown as number
    };
    updateQuestion = await this.useCase.update(updateQuestion);
    return wrapperResponse(updateQuestion);
  }

  /**
   * Delete a question
   * 
   * @param questionId Id of question
   * @return {Promise<ServiceResponse<boolean>>} True if delete or False if not delete
   */
  async delete(questionId: string): Promise<ServiceResponse<boolean>> {
    const result = await this.useCase.delete(questionId as unknown as number);
    return wrapperResponse(result);
  }

  /**
   * Return question iinclude query in question
   * 
   * @param {string | undefined} questionQuery Query
   * @return {Promise<ServiceResponse<any[]>>} Collection
   */
  async findQuestionsIncludeQuery(questionQuery: string | undefined): Promise<ServiceResponse<any[]>> {
    if (questionQuery) {
      const questions = await this.useCase.findQuestionsIncludeQuery(questionQuery);
      return wrapperResponse(questions);
    }
    throw new ErrorGateway(Message.getInstance().getMessage('question_no_query_parameter'));
  }
  
}
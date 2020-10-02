import { injectable, inject } from 'tsyringe';
import {
  ErrorGateway,
  ServiceResponse,
  wrapperResponse
} from 'questionary-common';
import {
  AbstQuestionGateway,
  AbstQuestionUseCase,
  ContainerToken,
  Question,
  QuestionCreate
} from 'questionary-domain';

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
   * @return {Promise<ServiceResponse>} Question
   */
  async save(question: any): Promise<ServiceResponse> {
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
   * @return {Promise<ServiceResponse>} Question
   */
  async update(questionId: string, question: any): Promise<ServiceResponse> {
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
   * @return {Promise<ServiceResponse>} True if delete or False if not delete
   */
  async delete(questionId: string): Promise<ServiceResponse> {
    const result = await this.useCase.delete(questionId as unknown as number);
    return wrapperResponse(result);
  }

  /**
   * Return question iinclude query in question
   * 
   * @param {string | undefined} questionQuery Query
   * @return {Promise<ServiceResponse>} Collection
   */
  async findQuestionsIncludeQuery(questionQuery: string | undefined): Promise<ServiceResponse> {
    if (questionQuery) {
      const questions = await this.useCase.findQuestionsIncludeQuery(questionQuery);
      return wrapperResponse(questions);
    }
    throw new ErrorGateway('No se indico el parametro questionQuery');
  }
  
}
import { injectable, inject } from 'tsyringe';
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
   * @return {Promise<any>} Question
   */
  save(question: any): Promise<any> {
    const newQuestion: QuestionCreate = {
      ...question
    };
    return this.useCase.save(newQuestion);
  }

  /**
   * Update a question
   * 
   * @param {string} questionId Id of question
   * @param {any} question Question
   * @return {Promise<any>} Question
   */
  update(questionId: string, question: any): Promise<any> {
    const updateQuestion: Question = {
      ...question,
      questionId: questionId as unknown as number
    };
    return this.useCase.update(updateQuestion);
  }

  /**
   * Delete a question
   * 
   * @param questionId Id of question
   * @return {Promise<boolean>} True if delete or False if not delete
   */
  delete(questionId: string): Promise<boolean> {
    return this.useCase.delete(questionId as unknown as number);
  }

  /**
   * Return question iinclude query in question
   * 
   * @param {string | undefined} questionQuery Query
   * @return {Promise<any[]>} Collection
   */
  findQuestionsIncludeQuery(questionQuery: string | undefined): Promise<any[]> {
    if (questionQuery) {
      return this.useCase.findQuestionsIncludeQuery(questionQuery);
    }
    return Promise.resolve([]);
  }
  
}
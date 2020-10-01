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
   * @return {Promise<Question>} Question
   */
  save(question: any): Promise<Question> {
    const newQuestion: QuestionCreate = {
      ...question
    };
    return this.useCase.save(newQuestion);
  }

  /**
   * Update a question
   * 
   * @param {number} questionId Id of question
   * @param {Promise<Question>} question Question
   * @return {Promise<Question>} Question
   */
  update(questionId: number, question: any): Promise<Question> {
    const updateQuestion: Question = {
      ...question,
      questionId
    };
    return this.useCase.update(updateQuestion);
  }

  /**
   * Delete a question
   * 
   * @param questionId Id of question
   * @return {Promise<boolean>} True if delete or False if not delete
   */
  delete(questionId: number): Promise<boolean> {
    return this.useCase.delete(questionId);
  }
  
}
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
   */
  update(questionId: number, question: any): Promise<Question> {
    const updateQuestion: Question = {
      ...question,
      questionId
    };
    return this.useCase.update(updateQuestion);
  }

  delete(questionId: number): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
  
}
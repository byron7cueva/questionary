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

  update(question: any): Promise<Question> {
    throw new Error('Method not implemented.');
  }
  delete(questionId: number): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
  
}
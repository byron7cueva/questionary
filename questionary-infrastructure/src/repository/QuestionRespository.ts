import { AbstQuestionRepository, Question, QuestionCreate } from 'questionary-domain';
import { QuestionModel } from '../model';

/**
 * Implementation the question repository
 */
export class QuestionRepository extends AbstQuestionRepository {

  /**
   * Create Question
   * 
   * @param {QuestionCreate} question Question to create
   * @return {Promise<Question>} Question created
   */
  async create(question: QuestionCreate): Promise<Question> {
    const result = await QuestionModel.create(question);
    const savedQuestion: Question | any = {
      ...result.toJSON()
    };
    return savedQuestion;
  }

  /**
   * Update Question
   * 
   * @param {Question} question Question to update
   * @return {Promise<Question>} Question updated
   */
  async update(question: Question): Promise<Question> {
    const constraint = {
      where: {
        questionId: question.questionId
      }
    };

    await QuestionModel.update(question, constraint);
    const result = await QuestionModel.findOne(constraint);
    const updatedQuestion: Question | any = {
      ...result
    };
    return updatedQuestion;
  }

  async delete(questionId: number): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
  
}

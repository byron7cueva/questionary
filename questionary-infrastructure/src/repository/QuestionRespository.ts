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

  /**
   * Delete Question
   * 
   * @param {number} questionId Id of question
   * @return {Promise<boolean>} True if delete or False if don't delete
   */
  async delete(questionId: number): Promise<boolean> {
    const constraint = { where: { questionId } };
    const result = await QuestionModel.destroy(constraint);
    console.log(result);
    return true;
  }

  /**
   * Find question by course id
   * 
   * @param {number} courseId Id of course
   * @return {Promise<Question[]>} List of questions
   */
  findByCourseId(courseId: number): Promise<Question[]> {
    const constraint = {
      where: { courseId }
    };
    return QuestionModel.findAll(constraint);  
  }

  /**
   * Delete all questions by course id
   * 
   * @param {number} courseId Id of course
   * @return {Promise<boolean>} True if delete questions and False if not delete
   */
  async deleteAllByCourseId(courseId: number): Promise<boolean> {
    const constraint = { where: { courseId } };
    const result = await QuestionModel.destroy(constraint);
    console.log(result);
    return true;
  }
  
}

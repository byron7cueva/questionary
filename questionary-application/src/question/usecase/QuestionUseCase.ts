import {injectable, inject} from 'tsyringe';
import {
  ContainerToken,
  AbstQuestionRepository,
  AbstQuestionUseCase, Question, QuestionCreate
} from 'questionary-domain';

/**
 * Class implementation of Question use case
 */
@injectable()
export class QuestionUseCase extends AbstQuestionUseCase {
  
  /**
   * Constructor of class
   * 
   * @param {AbstQuestionRepository} repository Repository instance
   */
  constructor(
    @inject(ContainerToken.getInstance().AbstQuestionRepository) repository: AbstQuestionRepository
  ) {
    super(repository);
  }

  /**
   * Save a new question
   * 
   * @param {Question} question Question to save
   * @return {Promise<Question>} Question saved
   */
  save(question: QuestionCreate): Promise<Question> {
    return this.repository.create(question);
  }

  /**
   * Update question
   * 
   * @param {Question} question Question to update
   * @return {Promise<Question>} QUestion updated
   */
  update(question: Question): Promise<Question> {
    return this.repository.update(question);
  }

  /**
   * Delete question
   * 
   * @param {number} questionId Question id
   * @return {Promise<boolean>} True id delete or False if not delete
   */
  delete(questionId: number): Promise<boolean> {
    return this.repository.delete(questionId);
  }

  /**
   * Return all question of a Course
   * 
   * @param {number} courseId Course Id
   * @return {Promise<Question[]>} List of questions
   */
  getQuestionsByCourseId(courseId: number): Promise<Question[]> {
    return this.repository.findByCourseId(courseId);
  }

  /**
   * Delete all question of course
   * 
   * @param {number} courseId Course id
   * @return {Promise<boolean>} True if delete if not delete False
   */
  deleteAllByCourseId(courseId: number): Promise<boolean> {
    return this.repository.deleteAllByCourseId(courseId);
  }
}
import {injectable, inject} from 'tsyringe';
import { ErrorUseCase } from 'questionary-common';
import {
  AbstQuestionRepository,
  AbstQuestionUseCase,
  Question,
  QuestionCreate
} from 'questionary-domain';

import { ContainerToken } from '../../app/ContainerToken';
import { Message } from '../../app/Message';

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
  async save(question: QuestionCreate): Promise<Question> {
    try {
      return await this.repository.create(question);
    } catch (error) {
      throw new ErrorUseCase(Message.getInstance().getMessage('question_no_save', question.question), error.stack);
    }
  }

  /**
   * Update question
   * 
   * @param {Question} question Question to update
   * @return {Promise<Question>} QUestion updated
   */
  async update(question: Question): Promise<Question> {
    try {
      return await this.repository.update(question);
    } catch (error) {
      throw new ErrorUseCase(Message.getInstance().getMessage('question_no_update', question.questionId), error.stack);
    }
  }

  /**
   * Delete question
   * 
   * @param {number} questionId Question id
   * @return {Promise<boolean>} True id delete or False if not delete
   */
  async delete(questionId: number): Promise<boolean> {
    try {
      return await this.repository.delete(questionId);
    } catch (error) {
      throw new ErrorUseCase(Message.getInstance().getMessage('question_no_delete', questionId), error.stack);
    }
  }

  /**
   * Return all question of a Course
   * 
   * @param {number} courseId Course Id
   * @return {Promise<Question[]>} List of questions
   */
  async getQuestionsByCourseId(courseId: number): Promise<Question[]> {
    try {
      return await this.repository.findByCourseId(courseId);
    } catch (error) {
      throw new ErrorUseCase(Message.getInstance().getMessage('questions_no_find', courseId), error.stack);
    }
  }

  /**
   * Delete all question of course
   * 
   * @param {number} courseId Course id
   * @return {Promise<boolean>} True if delete if not delete False
   */
  async deleteAllByCourseId(courseId: number): Promise<boolean> {
    try {
      return await this.repository.deleteAllByCourseId(courseId);
    } catch (error) {
      throw new ErrorUseCase(Message.getInstance().getMessage('questions_no_delete', courseId), error.stack);
    }
  }

  /**
   * Find question that include questionQuery in field question
   * 
   * @param {string} questionQuery Query to search
   * @return {Promise<Question[]>} Collection of questions
   */
  async findQuestionsIncludeQuery(questionQuery: string): Promise<Question[]> {
    try {
      return await this.repository.findByLikeQuestion(questionQuery);
    } catch (error) {
      throw new ErrorUseCase(Message.getInstance().getMessage('question_no_find_query', questionQuery), error.stack);
    }
  }
}
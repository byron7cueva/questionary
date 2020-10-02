import {injectable, inject} from 'tsyringe';
import { ErrorUseCase } from 'questionary-common';
import {
  AbstCourseRepository,
  AbstCourseUseCase,
  AbstQuestionUseCase,
  Course,
  CourseCreate,
  Question
} from 'questionary-domain';

import { ContainerToken } from '../../app/ContainerToken';
import { Message } from '../../app/Message';

/**
 * Class CourseUseCase
 */
@injectable()
export class CourseUseCase extends AbstCourseUseCase {
  /**
   * Constructor of CourseUseCase
   * 
   * @param {AbstCourseRepository} repository Repository
   */
  constructor(
    @inject(ContainerToken.getInstance().AbstCourseRepository) repository: AbstCourseRepository,
    @inject(ContainerToken.getInstance().AbstQuestionUseCase) private _questionUseCase: AbstQuestionUseCase
  ) {
    super(repository);
  }

  /**
   * Get all Courses
   * 
   * @return {Promise<Course[]>} List of courses
   */
  async getAll(): Promise<Course[]> {
    try {
      const courses = await this.repository.findAll();
      return courses;
    } catch (error) {
      throw new ErrorUseCase(Message.getInstance().getMessage('courses_no_find'), error.stack);
    }
  }

  /**
   * Save a new course
   * 
   * @param {CourseCreate} course Course to save
   * @return {Promise<Course>} Course saved
   */
  async save(course: CourseCreate): Promise<Course> {
    try {
      const savedCourse = await this.repository.create(course);
      return savedCourse;
    } catch (error) {
      throw new ErrorUseCase(
        Message.getInstance().getMessage('course_no_save', course.name),
        error.stack);
    }
  }

  /**
   * Update course
   * 
   * @param {Course} course Course to update
   * @return {Promise<Course>} Course updated
   */
  async update(course: Course): Promise<Course> {
    try {
      const updatedCourse = await this.repository.update(course);
      return updatedCourse;
    } catch (error) {
      throw new ErrorUseCase(Message.getInstance().getMessage('course_no_update', course.courseId), error.stack);
    }
  }

  /**
   * Delete course id
   * 
   * @param {number} courseId Id of course
   * @return {Promise<boolean>} True if delete course if not delete False
   */
  async delete(courseId: number): Promise<boolean> {
    try {
      const questions: Question[] = await this._questionUseCase.getQuestionsByCourseId(courseId);
      if (questions && questions.length > 0) {
        await this._questionUseCase.deleteAllByCourseId(courseId);
      }
      const result = await this.repository.delete(courseId);
      return result;
    } catch (error) {
      throw new ErrorUseCase(Message.getInstance().getMessage('course_no_delete', courseId), error.stack);
    }
  }

  /**
   * Return course with your questions
   * 
   * @param {number} courseId Id of course
   * @return {Promise<Course>} Course
   */
  async getCourseAndQuestionsById(courseId: number): Promise<Course> {
    try {
      const course = await this.repository.findById(courseId);
      if (course) {
        const questions = await this._questionUseCase.getQuestionsByCourseId(courseId);
        course.questions = questions;
      }
      return course;
    } catch (error) {
      throw new ErrorUseCase(Message.getInstance().getMessage('course_no_find', courseId), error.stack);
    }
  }
}
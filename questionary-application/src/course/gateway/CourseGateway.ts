import { injectable, inject } from 'tsyringe';
import {
  ServiceResponse,
  wrapperResponse
} from 'questionary-common';
import {
  AbstCourseGateway,
  AbstCourseUseCase,
  Course,
  CourseCreate
} from 'questionary-domain';

import { ContainerToken } from '../../app/ContainerToken';

/**
 * Class CourseGateway implementation fof AbstCourseGateway
 */
@injectable()
export class CourseGateway extends AbstCourseGateway {

  /**
   * Constructor of CourseGateway
   * 
   * @param {AbstCourseUseCase} useCase Use case of course
   */
  constructor(
    @inject(ContainerToken.getInstance().AbstCourseUseCase) useCase: AbstCourseUseCase
  ) {
    super(useCase);
  }

  /**
   * Get all courses
   * 
   * @return {Promise<ServiceResponse<any[]>>} List of courses
   */
  async getAll(): Promise<ServiceResponse<any[]>> {
    const courses = await this.useCase.getAll();
    return wrapperResponse(courses);
  }

  /**
   * Save a course
   * 
   * @param {any} course Object with info of course
   * @return {Promise<ServiceResponse<any>>} Course saved
   */
  async save(course: any): Promise<ServiceResponse<any>> {
    let newCourse: CourseCreate = {
      ...course
    };
    newCourse = await this.useCase.save(newCourse);
    return wrapperResponse(newCourse);
  }

  /**
   * Update a course
   * 
   * @param {string} courseId Id of course
   * @param {any} course Object with info of course
   * @return {Promise<ServiceResponse<any>>} Course updated
   */
  async update(courseId: string, course: any): Promise<ServiceResponse<any>> {
    let updateCourse: Course = {
      ...course,
      courseId: courseId as unknown as number
    };
    updateCourse = await this.useCase.update(updateCourse);
    return wrapperResponse(updateCourse);
  }

  /**
   * Delete a course
   * 
   * @param {string} courseId Id of course
   * @return {Promise<ServiceResponse<boolean>>} True if delete or False if not delete
   */
  async delete(courseId: string): Promise<ServiceResponse<boolean>> {
    const result = await this.useCase.delete(courseId as unknown as number);
    return wrapperResponse(result);
  }

  /**
   * Return a course with your questions
   * 
   * @param {string} courseId Id of course
   * @return {Promise<ServiceResponse<any>>} Course
   */
  async getCourseWithQuestions(courseId: string): Promise<ServiceResponse<any>> {
    const course = await this.useCase.getCourseAndQuestionsById(courseId as unknown as number);
    return wrapperResponse(course);
  }
}
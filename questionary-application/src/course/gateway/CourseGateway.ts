import { injectable, inject } from 'tsyringe';
import {
  ServiceResponse,
  wrapperResponse
} from 'questionary-common';
import {
  ContainerToken,
  AbstCourseGateway,
  AbstCourseUseCase,
  Course,
  CourseCreate
} from 'questionary-domain';

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
   * @return {Promise<ServiceResponse>} List of courses
   */
  async getAll(): Promise<ServiceResponse> {
    const courses = await this.useCase.getAll();
    return wrapperResponse(courses);
  }

  /**
   * Save a course
   * 
   * @param {any} course Object with info of course
   * @return {Promise<ServiceResponse>} Course saved
   */
  async save(course: any): Promise<ServiceResponse> {
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
   * @return {Promise<ServiceResponse>} Course updated
   */
  async update(courseId: string, course: any): Promise<ServiceResponse> {
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
   * @return {Promise<ServiceResponse>} True if delete or False if not delete
   */
  async delete(courseId: string): Promise<ServiceResponse> {
    const result = await this.useCase.delete(courseId as unknown as number);
    return wrapperResponse(result);
  }

  /**
   * Return a course with your questions
   * 
   * @param {string} courseId Id of course
   * @return {Promise<ServiceResponse>} Course
   */
  async getCourseWithQuestions(courseId: string): Promise<ServiceResponse> {
    const course = await this.useCase.getCourseAndQuestionsById(courseId as unknown as number);
    return wrapperResponse(course);
  }
}
import { injectable, inject } from 'tsyringe';
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
   * @return {Promise<any[]>} List of courses
   */
  getAll(): Promise<any[]> {
    return this.useCase.getAll();
  }

  /**
   * Save a course
   * 
   * @param {any} course Object with info of course
   * @return {Promise<any>} Course saved
   */
  save(course: any): Promise<any> {
    const newCourse: CourseCreate = {
      ...course
    };
    return this.useCase.save(newCourse);
  }

  /**
   * Update a course
   * 
   * @param {string} courseId Id of course
   * @param {any} course Object with info of course
   * @return {Promise<any>} Course updated
   */
  update(courseId: string, course: any): Promise<any> {
    const updateCourse: Course = {
      ...course,
      courseId: courseId as unknown as number
    };
    return this.useCase.update(updateCourse);
  }

  /**
   * Delete a course
   * 
   * @param {string} courseId Id of course
   * @return {Promise<boolean>} True if delete or False if not delete
   */
  delete(courseId: string): Promise<boolean> {
    return this.useCase.delete(courseId as unknown as number);
  }

  /**
   * Return a course with your questions
   * 
   * @param {string} courseId Id of course
   * @return {Promise<any>} Course
   */
  getCourseWithQuestions(courseId: string): Promise<any> {
    return this.useCase.getCourseAndQuestionsById(courseId as unknown as number);
  }
}
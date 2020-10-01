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
   * @return {Promise<Course[]>} List of courses
   */
  getAll(): Promise<Course[]> {
    return this.useCase.getAll();
  }

  /**
   * Save a course
   * 
   * @param {any} course Object with info of course
   * @return {Promise<Course>} Course saved
   */
  save(course: any): Promise<Course> {
    const newCourse: CourseCreate = {
      ...course
    };
    return this.useCase.save(newCourse);
  }

  update(courseId: number, course: any): Promise<Course> {
    throw new Error('Method not implemented.');
  }
  delete(courseId: number): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
  getCourseWithQuestions(courseId: number): Promise<Course> {
    throw new Error('Method not implemented.');
  }
}
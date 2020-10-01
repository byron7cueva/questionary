import { injectable, inject } from 'tsyringe';
import {
  ContainerToken,
  AbstCourseGateway,
  AbstCourseUseCase,
  Course
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
}
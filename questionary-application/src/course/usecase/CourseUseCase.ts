import {injectable, inject} from 'tsyringe';
import { AbstCourseUseCase, AbstCourseRepository, Course } from 'questionary-domain';
import { ContainerToken } from '../../app/ContainerToken';

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
    @inject(ContainerToken.getInstance().AbstCourseRepository) repository: AbstCourseRepository
  ) {
    super(repository);
  }

  /**
   * Get all Courses
   * 
   * @return {Promise<Course[]>} List of courses
   */
  getAll(): Promise<Course[]> {
    return this.repository.findAll();
  }
}
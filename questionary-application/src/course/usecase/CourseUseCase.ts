import {injectable, inject} from 'tsyringe';
import {
  ContainerToken,
  AbstCourseUseCase,
  AbstCourseRepository,
  Course, CourseCreate
} from 'questionary-domain';

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

  /**
   * Save a new course
   * 
   * @param {CourseCreate} course Course to save
   * @return {Promise<Course>} Course saved
   */
  save(course: CourseCreate): Promise<Course> {
    return this.repository.create(course);
  }

  /**
   * Update course
   * 
   * @param {Course} course Course to update
   * @return {Promise<Course>} Course updated
   */
  update(course: Course): Promise<Course> {
    return this.repository.update(course);
  }

  delete(courseId: number): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
  getCourseAndQuestionsById(courseId: number): Promise<Course> {
    throw new Error('Method not implemented.');
  }
}
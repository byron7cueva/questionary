import {injectable, inject} from 'tsyringe';
import {
  AbstCourseRepository,
  AbstCourseUseCase,
  AbstQuestionUseCase,
  Course,
  CourseCreate,
  ContainerToken,
  Question
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

  /**
   * Delete course id
   * 
   * @param {number} courseId Id of course
   * @return {Promise<boolean>} True if delete course if not delete False
   */
  async delete(courseId: number): Promise<boolean> {
    const questions: Question[] = await this._questionUseCase.getQuestionsByCourseId(courseId);

    if (questions && questions.length > 0) {
      await this._questionUseCase.deleteAllByCourseId(courseId);
    }

    return this.repository.delete(courseId);
  }

  /**
   * Return course with your questions
   * 
   * @param {number} courseId Id of course
   * @return {Promise<Course>} Course
   */
  async getCourseAndQuestionsById(courseId: number): Promise<Course> {
    const course = await this.repository.findById(courseId);
    if (course) {
      const questions = await this._questionUseCase.getQuestionsByCourseId(courseId);
      course.questions = questions;
    }
    return course;
  }
}
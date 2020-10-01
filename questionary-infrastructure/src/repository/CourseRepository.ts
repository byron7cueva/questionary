import { Course, AbstCourseRepository, CourseCreate } from 'questionary-domain';
import { CourseModel } from '../model/CourseModel';

/**
 * Implementation of AbstCourseRepository
 */
export class CourseRepository implements AbstCourseRepository {
  
  /**
   * Return all courses
   * 
   * @return {Promise<Course[]>} List of courses
   */
  getAll(): Promise<Course[]> {
    return CourseModel.findAll();
  }

  /**
   * Create course
   * 
   * @param {CourseCreate} course Course to create
   * @return {Promise<Course | any>} Course created
   */
  async create(course: CourseCreate): Promise<Course | any> {
    const result = await CourseModel.create(course);
    const savedCourse: Course | any = {
      ...result.toJSON()
    }
    return savedCourse;
  }

  /**
   * Update course
   * 
   * @param {Course} course Course to update
   * @return {Promise<Course | any>} Course to updated
   */
  async update(course: Course): Promise<Course | any> {
    const constraint = {
      where: {
        courseId: course.courseId
      }
    };

    await CourseModel.update(course, constraint);
    const result = await CourseModel.findOne(constraint);
    const updatedCourse: Course | any = {
      ...result
    };
    return updatedCourse;
  }
  
  async delete(courseId: number): Promise<boolean> {
    throw new Error('Method not implemented.');
  }

  getById(courseId: number): Promise<Course> {
    throw new Error('Method not implemented.');
  }
}
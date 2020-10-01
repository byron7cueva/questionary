import { Optional } from 'questionary-common';

/**
 * Entity Course
 */
export interface Course {
  courseId: number;
  name: string;
}

/**
 * Entity for create course with con optional courseId
 */
export interface CourseCreate extends Optional<Course, 'courseId'> {}
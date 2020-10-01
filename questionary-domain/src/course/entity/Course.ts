import { Optional } from 'questionary-common';

import { Question } from '../../question';

/**
 * Entity Course
 */
export interface Course {
  courseId: number;
  name: string;
  questions?: Question[]
}

/**
 * Entity for create course with con optional courseId
 */
export interface CourseCreate extends Optional<Course, 'courseId'> {}
import { Optional } from 'questionary-common';

export interface Course {
  courseId: number;
  name: string;
}

export interface CourseCreate extends Optional<Course, 'courseId'> {}
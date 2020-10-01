import { Model, DataTypes } from 'sequelize';
import { Course, CourseCreate } from 'questionary-domain';

import { Connection } from '../database/Connection';

class CourseModel extends Model<Course, CourseCreate> implements Course {
  courseId!: number;
  name!: string;
}

CourseModel.init(
  {
    courseId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      field: 'course_id'
    },
    name: {
      type: new DataTypes.STRING(100),
      allowNull: false
    }
  }, 
  {
    tableName: 'course',
    sequelize: Connection.getInstance().connect,
    timestamps: false
  }
);

export {
  CourseModel
}
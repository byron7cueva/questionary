import { Model, DataTypes } from 'sequelize';
import { Question, QuestionCreate } from 'questionary-domain';

import { Connection } from '../database/Connection';

/**
 * Model to Question
 */
class QuestionModel extends Model<Question, QuestionCreate> implements Question {
  questionId!: number;
  courseId!: number;
  question!: string;
  answere!: string;
}

QuestionModel.init(
  {
    questionId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      field: 'question_id'
    },
    courseId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'course_id'
    },
    question: {
      type:new DataTypes.STRING(100),
      allowNull: false
    },
    answere: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  },
  {
    tableName: 'question',
    sequelize: Connection.getInstance().connect,
    timestamps: false
  }
);

export {
  QuestionModel
}
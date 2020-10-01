import { CourseModel } from './CourseModel';
import { QuestionModel } from './QuestionModel';

CourseModel.hasMany(QuestionModel, {
  sourceKey: 'courseId',
  foreignKey: 'courseId',
  as: 'questions'
});

QuestionModel.belongsTo(CourseModel, {
  targetKey: 'courseId'
});

export {
  CourseModel,
  QuestionModel
}
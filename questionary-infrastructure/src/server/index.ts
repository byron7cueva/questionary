import { Server } from './Server';

import { coursesRouter } from '../routes/courses';
import { questionsRouter } from '../routes/questions';

/* Register routes on server */
Server.getInstance().registerRoute('/courses', coursesRouter);
Server.getInstance().registerRoute('/questions', questionsRouter);

export {
  Server
}
import { Server } from './Server';

import { coursesRouter } from '../routes/courses';

/* Register routes on server */
Server.getInstance().registerRoute('/courses', coursesRouter);

export {
  Server
}
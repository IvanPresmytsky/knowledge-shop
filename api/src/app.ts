import 'express-async-errors';
import express, { Request, Response } from 'express';
import StatusCodes from 'http-status-codes';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import logger from 'jet-logger';

import apiRouter from '@routes/apiRouter';
import { CustomError } from '@errors/APIErrors';

// Create app
const app = express();

// Common middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(cors());

// Show routes called in console during development
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// Security (helmet recommended in express docs)
if (process.env.NODE_ENV === 'production') {
    app.use(helmet());
}

// handle routes
app.use(apiRouter);

// Error handling
app.use((err: Error | CustomError, _req: Request, res: Response) => {
  logger.err(err, true);
  const status = (err instanceof CustomError ? err.HttpStatus : StatusCodes.INTERNAL_SERVER_ERROR);

  return res.status(status).json({
      error: err.message,
  });
});

export default app;

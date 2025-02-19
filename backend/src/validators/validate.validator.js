import { validationResult } from 'express-validator';

import { globalErrorHandler } from '../middlewares/globalError.middleware.js';
import { apiError } from '../utils/apiError.js';

/**
 *
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} next
 *
 * @description This is the validate middleware responsible to centralize the error checking done by the `express-validator` `ValidationChains`.
 * This checks if the request validation has errors.
 * If yes then it structures them and throws an {@link apiError} which forwards the error to the {@link globalErrorHandler} middleware which throws a uniform response at a single place
 *
 */

export const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) return next();
  const extractedErrors = [];
  errors.array().map((err) => extractedErrors.push({ [err.path]: err.msg }));

  throw new apiError(420, 'Received data is invalid', extractedErrors);
};

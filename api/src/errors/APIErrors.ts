import { ValidationError } from 'express-validator';
import HttpStatusCodes from 'http-status-codes';

export abstract class CustomError extends Error {

  public readonly HttpStatus = HttpStatusCodes.BAD_REQUEST;

  constructor(msg: string, httpStatus: number) {
    super(msg);
    this.HttpStatus = httpStatus;
  }
}

export class ParamsInvalidError extends CustomError {

  public static readonly Msg = 'The following params are invalid: ';
  public static readonly HttpStatus = HttpStatusCodes.UNPROCESSABLE_ENTITY;

  constructor(errors: ValidationError[]) {
    const stringifiedErrors = JSON.stringify(errors);
    super(`${ParamMissingError.Msg}${stringifiedErrors}`, ParamMissingError.HttpStatus);
  }
}

export class ParamMissingError extends CustomError {

  public static readonly Msg = 'One or more of the required parameters was missing.';
  public static readonly HttpStatus = HttpStatusCodes.BAD_REQUEST;

  constructor() {
    super(ParamMissingError.Msg, ParamMissingError.HttpStatus);
  }
}

export class ProductNotFoundError extends CustomError {

  public static readonly Msg = 'A product with the given id does not exists in the database.';
  public static readonly HttpStatus = HttpStatusCodes.NOT_FOUND;

  constructor() {
    super(ProductNotFoundError.Msg, ProductNotFoundError.HttpStatus);
  }
}

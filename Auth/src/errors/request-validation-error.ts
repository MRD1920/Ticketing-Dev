import { ValidationError } from "express-validator";

export class RequestValidationError extends Error {
  public errors: ValidationError[];

  constructor(errors: ValidationError[]) {
    super();
    //Only because we are extending a built in class in typescript(its only specific to typescript)
    Object.setPrototypeOf(this, RequestValidationError.prototype);
    this.errors = errors;
  }
}

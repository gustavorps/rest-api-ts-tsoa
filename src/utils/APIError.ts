import msg from './message'
const httpStatus = require('http-status')

/**
 * @extends Error
 */
export class ExtendableError extends Error {
  public errors:any;
  public status:any;
  public isPublic:any;
  public isOperational:boolean;
  constructor( {message, errors, status, isPublic, stack}: ApiErrorOptions ) {
    super(message)
    this.name = this.constructor.name
    this.message = message
    this.errors = errors
    this.status = status
    this.isPublic = isPublic
    this.isOperational = true // This is required since bluebird 4 doesn't append it anymore.
    stack = stack
  }
}

export interface ApiErrorOptions {
  message: string,
  status: number,
  isPublic?: boolean,
  errors?: any,
  stack?: any,
  title?: string
}

/**
 * Class representing an API error.
 * @extends ExtendableError
 */
export class APIError extends ExtendableError {
  /**
   * Creates an API error.
   * @param {string} message - Error message.
   * @param {number} status - HTTP status code of error.
   * @param {boolean} isPublic - Whether the message should be visible to user or not.
   */

  public title:any;
  constructor({
    message = msg.MESSAGE.ERROR_DEFAULT,
    errors,
    stack,
    status = httpStatus.INTERNAL_SERVER_ERROR,
    isPublic = false,
    title = msg.TITLE.ERROR_DEFAULT,
  }: ApiErrorOptions) {
    const options:ApiErrorOptions  = {
      message,
      errors,
      status,
      isPublic,
      stack,
    }
    super(options)
    this.title = title
  }
}

import { APIError, ApiErrorOptions } from '../utils/APIError'
import { variables } from '../config/vars'
import httpStatus from 'http-status'
import msg from '../utils/message'

const { env } = variables

/**
 * Error handler. Send stacktrace only during development
 * @public
 */
const _handler = (err?: any, req?: any, res?: any, next?: any) => {
  const response = {
    code: err.status || '',
    message: err.message,
    title: err.title || msg.TITLE.ERROR_DEFAULT,
    buttonFirst: err.buttonFirst,
    buttonSecond: err.buttonSecond,
    errors: err.errors,
    stack: err.stack,
  }

  if (env !== 'development') {
    delete response.stack
  }
  res.status(err.status)
  res.json(response)
}
export const handler = _handler
/**
 * If error is not an instanceOf APIError, convert it.
 * @public
 */
const _converter = (err: any, req: any, res: any) => {
  let convertedError = err

  if (!(err instanceof APIError)) {
    const options: ApiErrorOptions = {
      message: err.message,
      status: ((err || {}).response || err).status || err.status || 500,
      stack: err.stack,
    }
    convertedError = new APIError(options)
  }

  return handler(convertedError, req, res, null)
}

export const converter = _converter

/**
 * Catch 404 and forward to error handler
 * @public
 */
export const notFound = (req: any, res: any) => {
  const options: ApiErrorOptions = {
    message: msg.MESSAGE.ERROR_DEFAULT,
    status: httpStatus.NOT_FOUND,
    title: msg.TITLE.ERROR_DEFAULT,
  }
  const err = new APIError(options)
  return handler(err, req, res)
}

export const apiError = (error?: any, title?: any, message?: any) =>
  new APIError({
    status: ((error || {}).response || {}).status || 500,
    title,
    message,
  })

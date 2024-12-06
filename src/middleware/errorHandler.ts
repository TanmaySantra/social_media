import { NextFunction, Request, Response } from "express";

export function handleError(err: any, req: Request, res: Response, next: NextFunction) {
  const statusCode = err.statusCode || 500;
  const errorMessage = err.message || 'Internal Server Error';
  const response = {
    success: false,
    message: errorMessage
  }
  res.status(statusCode).json(response);
}
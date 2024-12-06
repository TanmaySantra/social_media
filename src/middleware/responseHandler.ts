import { Request, Response } from "express"

export function responseHandler(req: Request, res: Response) {
  const response = {
    success: true,
    message: req.body
  }
  res.status(200).send(response)
}
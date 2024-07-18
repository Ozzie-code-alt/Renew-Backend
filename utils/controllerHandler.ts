import { Request, Response } from 'express';

export const toHandler =
  (controller: (request: Request, response: Response) => Promise<unknown>) =>
  async (request: Request, response: Response) => {
    try {
      const result = await controller(request, response);
      response.json(result);
    } catch (error: unknown) {
      response.status(400).json({ error });
    }
  };

export default toHandler;

import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUseCase } from "./CreateUserUseCase";

class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password, username, driver_license } = request.body;

    const createUserUseCase = container.resolve(CreateUseCase);
    await createUserUseCase.execute({
      name,
      email,
      password,
      username,
      driver_license,
    });

    return response.status(201).send();
  }
}

export { CreateUserController };

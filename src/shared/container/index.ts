import { container } from "tsyringe";

import { IUserRepository } from "@modules/accounts/Repositories/IUserRepository";

import "@shared/container/providers"

import { ICategoriesRepository } from "@modules/cars/repositories/ICategoriesRepository";

import { ISpecificationsRepository } from "@modules/cars/repositories/ISpecificationRepository";
import { UserRepository } from "@modules/accounts/infra/typeorm/repositories/UserRepository";
import { CategoriesRepository } from "@modules/cars/infra/typeorm/repositories/CategoriesRepository";
import { SpecificationRepository } from "@modules/cars/infra/typeorm/repositories/SpecificationRepository";
import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";
import { CarsRepository } from "@modules/cars/infra/typeorm/repositories/CarsRepository";
import { ICarsImageRepository } from "@modules/cars/repositories/ICarsImageRepository";
import { CarsImagesRepository } from "@modules/cars/infra/typeorm/repositories/CarsImagesRepository";
import { IRentalsCarsRepository } from "@modules/rentals/repositories/IRentalsCarsRepository";
import { RentalsRepository } from "@modules/rentals/repositories/RentalsRepository";
import { IUserTokensRepository } from "@modules/accounts/Repositories/IUserTokensRepository";
import { UsersTokensRepository } from "@modules/accounts/infra/typeorm/repositories/UsersTokensRepository";
// ICategoriesRepository
container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository",
  CategoriesRepository
);

// ISpecificationsRepository
container.registerSingleton<ISpecificationsRepository>(
  "SpecificationRepository",
  SpecificationRepository
);

// IUsersRepository
container.registerSingleton<IUserRepository>("UsersRepository", UserRepository);

// ICarsRepository
container.registerSingleton<ICarsRepository>("CarsRepository", CarsRepository);

// ICarsImageRepository
container.registerSingleton<ICarsImageRepository>("CarsImagesRepository", CarsImagesRepository)

// IRentalsRepository
container.registerSingleton<IRentalsCarsRepository>("RentalsRepository", RentalsRepository)

//IUsersTokensRepository
container.registerSingleton<IUserTokensRepository>("UsersTokensRepository", UsersTokensRepository)
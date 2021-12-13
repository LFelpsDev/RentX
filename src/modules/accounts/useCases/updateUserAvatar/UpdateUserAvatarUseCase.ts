import { inject, injectable } from "tsyringe";
import { IUserRepository } from "@modules/accounts/Repositories/IUserRepository";


import {deleteFIle} from '@utils/file'

interface IRequest {
  user_id: string;
  avatar_file: string;
}

// Adicionar coluna avatar na tabela de users
// Refatorar usuário com coluna avatar
// Configuração upload Multer
// Criar Regra de Negocio de Upload
// Criar Controller

@injectable()
class UpdateUserAvatarUSeCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUserRepository
  ) {}

  async execute({ avatar_file, user_id }: IRequest): Promise<void> {
    const user = await this.usersRepository.findById(user_id);

    if (user.avatar){
      await deleteFIle(`./tmp/avatar/${user.avatar}`);
    }

    user.avatar = avatar_file;

    await this.usersRepository.create(user);
  }
}

export { UpdateUserAvatarUSeCase };

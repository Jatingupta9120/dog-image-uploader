import { Injectable } from '@nestjs/common';
import { RoleRepository } from 'src/module/auth/repository/role.repository';
import { HttpExceptionWrapper } from '../../../utils/error/error.http.wrapper';
import { CreateUserDTO } from '../dto/create_user.dto';
import { UserRepository } from '../repository/user.repository';
import { errorName } from 'src/constants/error';

@Injectable()
export class UserService {
    constructor(
        private userRepository: UserRepository,
        private roleRepository: RoleRepository,
    ) {}

    async createUser(createUserDTO: CreateUserDTO) {
        const user = await this.userRepository.getByEmail(createUserDTO?.email);
        if (user) {
            throw new HttpExceptionWrapper(errorName.USER_EMAIL_EXIST);
        }

        const role = await this.roleRepository.getRole(createUserDTO.role);
        console.log('32000000000000000000000000000000000', createUserDTO);
        console.log('999999999999999', role);
        const createdUser = await this.userRepository.create({
            ...createUserDTO,
            roleId: role.id,
        });
        console.log(createdUser, '33333333222222222222222222');
        return createdUser.toJSON();
    }

    async getAllUser() {
        const users = await this.userRepository.getAll();
        return users;
    }

    async getUserById(id: string) {
        const user = await this.userRepository.getById(id);
        if (!user) {
            throw new HttpExceptionWrapper(errorName.USER_DOES_NOT_EXIST);
        }
        return { user };
    }

    async getUser(id: string) {
        const user = await this.userRepository.getById(id);
        if (!user) {
            throw new HttpExceptionWrapper(errorName.NO_USER_EXIST);
        }
        return { user };
    }
}

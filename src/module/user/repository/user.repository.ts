import { Injectable } from '@nestjs/common';
import { UserEntity } from '../entity/user.entity';
import { IGetUser, IListView } from '../interface/user.interface';

@Injectable()
export class UserRepository {
    async create(createUserDTO: any) {
        console.log(createUserDTO, '333333333349999999999');
        return await UserEntity.create(createUserDTO);
    }

    async getAll() {
        return await UserEntity.findAndCountAll();
    }

    async getById(id: string) {
        return await UserEntity.findByPk(id);
    }
    async getByUserName(userName: string) {
        return await UserEntity.findByPk(userName);
    }

    async getByEmail(email: string) {
        return await UserEntity.findOne({
            where: { email },
        });
    }

    async getUser(userInfo: IGetUser) {
        return await UserEntity.findOne({
            where: {
                ...(userInfo.userName && { userName: userInfo.userName }),
                ...(userInfo.id && { id: userInfo.id }),
            },
            attributes: ['id', 'userName', 'email', 'password', 'roleId'],
        });
    }

    async getUsers(listingInfo?: IListView) {
        return await UserEntity.findAndCountAll({
            attributes: [],
            order: [['created_at', 'DESC']],
        });
    }

    // IGetUser
}

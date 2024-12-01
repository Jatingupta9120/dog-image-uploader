import { Injectable } from '@nestjs/common';
import { RoleDto } from '../dto/role.dto';
import { Roles } from '../entity/roles.entity';

@Injectable()
export class RoleRepository {
    async getRoles() {
        return Roles.findAll();
    }

    async addRoles(roleInfo: RoleDto) {
        return await Roles.create(roleInfo);
    }

    async getRole(param: string) {
        return await Roles.findOne({ where: { name: param } });
    }

    async getRoleById(roleId: number) {
        return await Roles.findOne({ where: { id: roleId } });
    }
}

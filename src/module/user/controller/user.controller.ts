import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { userresponseName } from 'src/constants/response/user/user_response.constants';
import { RoleType } from 'src/module/auth/constants/auth.constants';
import { Roles as RoleGuard } from 'src/utils/guards/roleGuard.decorator';
import { responseName } from '../../../constants/response';
import { Response as ResponseCustom } from '../../../utils/response/response.decorator';
import { CreateUserDTO } from '../dto/create_user.dto';
import { UserIdParamDTO } from '../dto/user_param.dto';
import { UserService } from '../service/user.service';

@Controller()
export class UserController {
    constructor(private userService: UserService) {}

    @Post('signup')
    @ResponseCustom(userresponseName.USER_CREATED)
    async createUser(@Body() createUserDTO: CreateUserDTO) {
        // if(req.rile=='adomo'){

        // }
        return await this.userService.createUser(createUserDTO);
    }

    @Get()
    @RoleGuard(RoleType.ADMIN)
    @ResponseCustom(userresponseName.GET_ALL_USER)
    async getAllUser() {
        return await this.userService.getAllUser();
    }

    @Get(':id')
    @RoleGuard(RoleType.ADMIN)
    @ResponseCustom(responseName.GET_USER)
    async getUser(@Param() { id }: UserIdParamDTO) {
        return await this.userService.getUser(id);
    }
}

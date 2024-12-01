import {
    Column,
    DataType,
    ForeignKey,
    Model,
    Table,
} from 'sequelize-typescript';
import { UserDTO } from '../dto/create_user.dto';
import { Roles } from 'src/module/auth/entity/roles.entity';
@Table({ tableName: 'user' })
export class UserEntity extends Model<UserDTO> {
    @Column({
        primaryKey: true,
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
    })
    id: string;

    @Column({
        allowNull: false,
        type: DataType.STRING,
    })
    name: string;

    @Column({
        allowNull: false,
        type: DataType.STRING,
        unique: true,
    })
    email: string;

    @Column({
        allowNull: false,
        type: DataType.STRING,
        unique: true,
    })
    userName: string;

    @Column({
        allowNull: false,
        type: DataType.STRING,
    })
    password: string;

    @Column({
        allowNull: true,
        type: DataType.DATEONLY, // Assuming birthdate is a date without time
    })
    birthdate: Date;

    @ForeignKey(() => Roles)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    public roleId: number;
}

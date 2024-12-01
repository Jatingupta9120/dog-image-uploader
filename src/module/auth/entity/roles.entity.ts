import { Column, DataType, HasMany, Model } from 'sequelize-typescript';
import { UserEntity } from 'src/module/user/entity/user.entity';
import { CustomTable } from 'src/utils/custom-class-validator/validator/customTable.validator';

@CustomTable('role')
export class Roles extends Model<Roles> {
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    })
    public id: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
        unique: true,
    })
    public name: string;

    @HasMany(() => UserEntity, { onDelete: 'CASCADE' })
    users: UserEntity[];
}

import { Column, DataType, Model } from 'sequelize-typescript';
import { CustomTable } from 'src/utils/custom-class-validator/validator/customTable.validator';
@CustomTable('dogs')
export class DogEntity extends Model<DogEntity> {
    @Column({
        type: DataType.INTEGER,
        allowNull: true,
        defaultValue: 5,
    })
    public age: number;

    @Column({
        type: DataType.UUID,
        primaryKey: true,
        defaultValue: DataType.UUIDV4,
    })
    public id: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    public file_name: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    public file_path: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
        defaultValue: 'German',
    })
    public breed: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
        defaultValue: 'black',
    })
    public color: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    public mime_type: string;

    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    public compress_file_path: string;
}

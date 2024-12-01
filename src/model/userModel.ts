// import { Column, DataType, Table } from 'sequelize-typescript';
// import { CustomTable } from 'src/utils/custom-class-validator/validator/customTable';
// import { Post } from './postModel';
// /**
//  * Through @customTable decorator we can add createdAt and UpdatedAt in our model and we can pass as much as options
//  */
// @CustomTable('user')
// @Table({
//     timestamps: true,
// })
// export class User {
//     @Column({
//         primaryKey: true,
//         allowNull: false,
//         defaultValue: DataType.UUIDV4,
//     })
//     public id: string;

//     @Column({
//         type: DataType.STRING,
//         allowNull: false,
//     })
//     public name: string;

//     @Column({
//         type: DataType.STRING,
//         allowNull: false,
//         unique: true,
//     })
//     public email: string;

//     @Column({
//         type: DataType.STRING,
//         allowNull: false,
//         unique: true,
//     })
//     public username: string;

//     @Column({
//         type: DataType.STRING,
//         allowNull: false,
//     })
//     public password: string;

//     @Column({
//         type: DataType.DATE,
//         allowNull: false,
//     })
//     public birthdate: Date;

//     @Column({
//         type: DataType.ARRAY(DataType.STRING),
//         allowNull: true,
//         defaultValue: [],
//     })
//     public post: Post[];

//     @Column({
//         type: DataType.STRING,
//         allowNull: false,
//     })
//     public street: string;

//     @Column({
//         type: DataType.INTEGER,
//         allowNull: false,
//     })
//     public postalCode: number;

//     @Column({
//         type: DataType.STRING,
//         allowNull: false,
//     })
//     public city: string;

//     @Column({
//         type: DataType.STRING,
//         allowNull: false,
//     })
//     public district: string;

//     @Column({
//         type: DataType.STRING,
//         allowNull: false,
//     })
//     public state: string;

//     @Column({
//         type: DataType.DATE,
//         allowNull: true,
//     })
//     public createdAt: Date;

//     @Column({
//         type: DataType.DATE,
//         allowNull: true,
//     })
//     public updatedAt: Date;
// }

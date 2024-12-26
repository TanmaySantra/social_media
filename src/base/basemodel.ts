import { BaseEntity, Column, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export class Base extends BaseEntity
{
    @PrimaryGeneratedColumn("uuid")
    id:string;
    @CreateDateColumn({name:"created_at"})
    createdAt ?:Date;
    @UpdateDateColumn({name:"updated_at"})
    updatedAt?:Date;
    @Column({name:"active",type:"boolean",default:true})
    active!:Boolean;

}
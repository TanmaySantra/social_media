import {Column, Entity} from "typeorm";
import {Base} from "../../base/basemodel";
import { Gender } from "../../base/interface";

@Entity()
export class User extends Base{

    @Column({name:"name",type:"varchar"})
    name:string;

    @Column({name:"email",type:"varchar"})
    email:string;

    @Column({name:"password",type:"varchar"})
    password:string;

    @Column({name:"pronoun",type:"varchar", nullable: true})
    pronoun:string;

    @Column({
        type: 'enum',
        enum: Gender,
        transformer: {
          to(value) {
            return value;
          },
          from(value) {
            const index = Object.values(Gender).indexOf(value as unknown as Gender);
            return Object.keys(Gender)[index];
          },
        },
        nullable: true,
      })
    gender?: Gender;

    @Column({name:"profile_pic",type:"varchar", nullable: true})
    profile_pic:string;   
}
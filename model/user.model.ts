import {Column, Entity} from "typeorm";
import {Base} from "./basemodel";
import { Gender } from "./interface";

@Entity()
export class User extends Base{

    @Column({name:" name",type:"varchar"})
    name:string;

    @Column({name:"email",type:"varchar"})
    email:string;

    @Column({name:"password",type:"varchar"})
    password:string;

    @Column({name:"pronoun",type:"varchar"})
    pronoun:string;

    // TODO : Implement Gender
    // @Column({
    //     name:"gender",
    //     type:"enum",
    //     enum:Gender,
    //     transformer:{
    //         to(value)
    //         {
    //             return Gender[value as typeof Gender];
    //         },
    //         from(value)
    //         {
    //             const index = Object.values(Gender).indexOf(value as unknown as Gender);
    //             return Object.keys(Gender)[index];
    //         }
    //     }
    // })
    // gender:Gender;

    @Column({name:"profile_pic",type:"varchar"})
    profile_pic:string;

    
   
}
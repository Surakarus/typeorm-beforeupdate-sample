import {Entity, PrimaryGeneratedColumn, Column, OneToMany, BeforeUpdate} from "typeorm";
import {Child} from "./Child";

@Entity()
export class Parent {

	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column()
	name:string;

	@OneToMany( type => Child, child => child.parent )
	childs: Child[];

    @BeforeUpdate()
    before_update() {
        console.log('Parent was updated!');
    }
}

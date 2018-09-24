import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, BeforeUpdate} from "typeorm";
import {Parent} from "./Parent";

@Entity()
export class Child {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @ManyToOne(type => Parent, parent => parent.childs)
    parent: Parent;

    @BeforeUpdate()
    before_update() {
        console.log('Child was updated!');
    }
}

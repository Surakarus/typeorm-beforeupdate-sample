import "reflect-metadata";
import {createConnection} from "typeorm";
import {Child} from "./entity/Child";
import {Parent} from "./entity/Parent"

createConnection().then(async connection => {

	const parent = new Parent();
	parent.name = "Parent_1";
	await connection.manager.save(parent);

	const child = new Child();
	child.name = "Child_1";
	await connection.manager.save(child);

	parent.childs = [child];
	await connection.manager.save(parent);

}).catch(error => console.log(error));

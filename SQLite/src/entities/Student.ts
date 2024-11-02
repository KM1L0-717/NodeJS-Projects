import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import {Course} from "./Course"

@Entity()
export class Student {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    firstName: String;
    @Column()
    lastName: String;
    @Column()
    document: String;
    
    @OneToMany(type=>Course, course=>course.student, {eager: true, cascade: true})
    course: Course[];
}
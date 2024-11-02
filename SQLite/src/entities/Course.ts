import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, ManyToOne } from "typeorm";
import { Student } from "./Student";

@Entity()
export class Course {
    @PrimaryGeneratedColumn()
    id: Number;
    @Column()
    name: String;

    @ManyToOne(type=>Student, student=>student.course)
    student: Student;
}
import { Injectable } from '@angular/core';

import { Student } from '../models/student.model';

@Injectable()
export class StudentArrayService {

  private studentList: Array<Student> = [
    new Student(1, 'Bob', 'Dilan', 4.5),
    new Student(2, 'Stive', 'Jobs', 3),
    new Student(3, 'John', 'Slesh', 2),
    new Student(4, 'Mark', 'Bil', 4.7)
  ];

  getStudents(): Array<Student> {
    return this.studentList;
  }

  checkId(list: Array<Student>, id: number): boolean {
    return list.some((student) => student.id === id);
  }
}

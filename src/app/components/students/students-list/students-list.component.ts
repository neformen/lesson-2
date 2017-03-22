import { Component, OnInit, HostBinding, HostListener } from '@angular/core';

import { StudentArrayService } from '../../../services/student-array.service';

import { Student } from '../../../models/student.model';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {
  private studentList: Array<Student>;

  public hideForm = true;


  constructor(public studentService: StudentArrayService) { }

  deleteStudent(student: Student): void {
    const index = this.studentList.indexOf(student);
    this.studentList.splice(index, 1);
  }

  addStudentToList(student: Student): void {
    this.studentList.push(student);
  }

  ngOnInit() {
    this.studentList = this.studentService.getStudents();
  }

}

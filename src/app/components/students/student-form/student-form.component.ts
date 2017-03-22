import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Student } from '../../../models/student.model';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {
  @Input() hideForm: boolean;
  @Output() add: EventEmitter<Student>;

  constructor() {
    this.add = new EventEmitter<Student>();
   }

   addStudent(id, name, surname, avarageMark): void {
     this.add.emit(new Student(id, name, surname, avarageMark));
   }

  ngOnInit() {
  }

}

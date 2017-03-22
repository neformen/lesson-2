import { Component, OnInit, Input, Output, EventEmitter, HostBinding, HostListener } from '@angular/core';

import { Student } from '../../../models/student.model';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  @Input() student: Student;
  @Output() delete: EventEmitter<Student>;
  @HostBinding('class') class: string;

  public newMark = 0;
  public hidePanel = true;

  @HostListener('mouseenter') onmouseenter() {
    this.class = 'student';
  }

  @HostListener('mouseleave') onmouseleave() {
    this.class = '';
  }

  constructor() {
    this.delete = new EventEmitter<Student>();
   }

   deleteStudent(event: Event): void {
     this.delete.emit(this.student);
   }

   saveMark(): void {
     this.student.avarageMark = this.newMark;
     this.newMark = 0;
     this.hidePanel = false;
   }

  ngOnInit() {
  }

}

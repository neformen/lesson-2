import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StudentsListComponent } from './students-list/students-list.component';
import { StudentComponent } from './student/student.component';
import { StudentFormComponent } from './student-form/student-form.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [StudentsListComponent, StudentComponent, StudentFormComponent],
  exports: [
    StudentsListComponent
  ]
})
export class StudentsModule { }

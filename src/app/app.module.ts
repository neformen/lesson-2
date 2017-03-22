import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { StudentsModule } from './components/students/students.module';
import { TitleModule } from './components/title/title.module';

import { AppComponent } from './app.component';

import { StudentArrayService } from './services';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StudentsModule,
    TitleModule
  ],
  providers: [
    StudentArrayService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

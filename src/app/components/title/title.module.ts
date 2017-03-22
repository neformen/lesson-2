import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './title/title.component';

import { GreetingService } from './../../services';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TitleComponent],
  providers: [GreetingService],
  exports: [TitleComponent]
})
export class TitleModule { }

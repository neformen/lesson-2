import { Component, OnInit } from '@angular/core';

import { GreetingService } from './../../../services';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {
  public greeting: string;

  constructor(public grService: GreetingService) { }

  ngOnInit() {
    this.greeting = this.grService.getTitle();
  }

}

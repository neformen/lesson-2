import { Injectable } from '@angular/core';

@Injectable()
export class GreetingService {

  getTitle(): string {
    return 'Hello this is my Demo project';
  }

}

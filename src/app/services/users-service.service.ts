import { Injectable } from '@angular/core';
import {of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {

  users$ = of([
    { name: 'Ben', age: 37 },
    { name: 'Scott', age: 41 },
    { name: 'Nick', age: 53 }
  ]);

  users2$ = of([
    { name: 'Ben2', age: 37 },
    { name: 'Scott2', age: 41 },
    { name: 'Nick2', age: 53 }
  ]);

  constructor() { }
}

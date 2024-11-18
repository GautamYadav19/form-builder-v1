import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'form-test';
  obj = {
    con: {
      prop: [1, 2, 3, 4],
      row: {
        prop: [1, 2, 3, 4],
      },
    },
  };
  recursion(obj: any): any {
    for (let i in obj) {
      if (obj.hasOwnProperty(i)) {
        if (typeof obj[i] === 'object' && !Array.isArray(obj[i])) {
          // this.recursion(obj[i]);
          // console.log(obj[i]);
          this.recursion(obj[i]);
          // return obj[i];
        } else {
          if (Array.isArray(obj[i])) {
            for (let i = 0; i < obj.length; i++) {
              // console.log(obj[i]);
              this.recursion(obj[i]);
              // return obj[i];
            }
          }
        }
      }
    }
    return '';
  }
  constructor() {}
  ngOnInit(): void {
    this.recursion(this.obj);
  }
}

// else {

// }

import { Component, OnInit, VERSION } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;


  array: { value: }[] = [

  ]

  ngOnInit() {
    this.init();
  }

  init() {
    from([1, 2, 3])
      .pipe(last)
      .subscribe(console.log, null, () => console.log('complete'));
  }
}

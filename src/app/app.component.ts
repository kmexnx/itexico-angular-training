import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title: string = 'VR Application';
  hola: string = 'Hola Joel';

  ngOnInit() {
    this.title = 'Init';
  }

  ngOnDestroy() {
    this.title = 'Destroy';
  }

  changeTitle(e) {
    this.title = 'Changed';
  }


}

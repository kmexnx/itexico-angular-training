import { Component, OnInit, OnDestroy } from '@angular/core';
import { PoemsService } from '../services/poems.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit, OnDestroy {
  authors: Object;
  authorsObs$: any;

  constructor(private poemService: PoemsService) { }

  ngOnInit() {
   this.authorsObs$ = this.poemService.getAuthors().subscribe((data: any ) => this.authors = data.authors );
  }

  ngOnDestroy() {
    this.authorsObs$.unsubscribe();
  }

  setAuthor(e: any, author: any) {
   this.poemService.author = author;
  }

}

import { Component, OnInit, Output, EventEmitter, OnDestroy, Input } from '@angular/core';
import { PoemsService } from 'src/app/services/poems.service';

@Component({
  selector: 'app-poem-list',
  templateUrl: './poem-list.component.html',
  styleUrls: ['./poem-list.component.scss']
})
export class PoemListComponent implements OnInit, OnDestroy {

  @Output() selectPoem: EventEmitter<string> = new EventEmitter<string>();
  @Input() poems: Array<string>;

  public greet: string;
  authors: any;
  getAuthorsObs$: any;

  constructor(private poemService: PoemsService) { }

  ngOnInit() {
    this.poemService._selectedAuthor.subscribe(data=>console.log('click from poem-list'));
  }

  ngOnDestroy(): void {
    // Called once, before the instance is destroyed.
    // Add 'implements OnDestroy' to the class.
    // this.getAuthorsObs$.unsubscribe();
  }



}

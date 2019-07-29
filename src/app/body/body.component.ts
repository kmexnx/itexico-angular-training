import { Component, OnInit,  ElementRef, ViewChild, OnDestroy } from '@angular/core';
import { PoemsService } from '../services/poems.service';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})

export class BodyComponent implements OnInit, OnDestroy {
  selectedPoem: string;
  selectedAuthor: string;
  selectAuthorSub$: any;

  @ViewChild('poemListRef', {static: true}) private poemListRef: ElementRef<string>;
  poems: [];

  constructor(private poemService: PoemsService) {
  }

  ngOnInit() {
    this.selectAuthorSub$ =  this.poemService._selectedAuthor.subscribe( (data: any) => {
      this.selectedAuthor = data;
      this.poemService.getPoemsByAuthor(this.selectedAuthor).subscribe( (data: any) => this.poems = data);
    });
  }

  ngOnDestroy(): void {
    // Called once, before the instance is destroyed.
    // Add 'implements OnDestroy' to the class.
    this.selectAuthorSub$.unsubscribe();
  }

  selectPoem(e) {
    this.selectedPoem = e;
  }







}

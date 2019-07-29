import { Component, OnInit } from '@angular/core';
import { PoemsService } from '../services/poems.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-poem-details',
  templateUrl: './poem-details.component.html',
  styleUrls: ['./poem-details.component.scss']
})
export class PoemDetailsComponent implements OnInit {
  param : string;
  lines: any;
  constructor(private poemService: PoemsService, route: ActivatedRoute ) {
    route.params.subscribe(data=> this.param = data.poem);
  }

  ngOnInit() {
    this.poemService.getPoem(this.param).subscribe((data:any)=> {
      console.log(data);
      this.lines = data[0].lines
    });
  }

}

import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appWarning]',
})

export class WarningDirective implements OnInit {

  constructor(private eleRef: ElementRef) { }

  ngOnInit() {
    // this.eleRef.nativeElement.style.color = 'red';
    // this.eleRef.nativeElement.style.fontSize = '2rem';
    this.eleRef.nativeElement.classList.add('red-warning');
  }
}

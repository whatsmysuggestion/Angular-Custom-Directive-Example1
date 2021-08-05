import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appAdd]'
})
export class AddDirective implements OnInit {

@Input('t1') t1: string;
@Input('t2') t2: string;

  constructor(private el: ElementRef) { }

  ngOnInit() {
    this.el.nativeElement.value = eval(this.t1)+eval(this.t2);
  }

}

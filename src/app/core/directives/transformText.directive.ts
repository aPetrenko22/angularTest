import { Directive, Input, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appTransfromText]',
})
export class TransformTextDirective implements OnInit {
  @Input() appAutofocus: boolean;
  private el: any;

  constructor(private elementRef: ElementRef) {
    this.el = this.elementRef.nativeElement;
  }

  ngOnInit() {
    this.el.addEventListener('mouseover', this.addAnimation.bind(this));
  }

  public addAnimation() {
    this.el.classList.add('animate');
  }
}

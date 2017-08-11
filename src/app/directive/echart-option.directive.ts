import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: 'echart'
})
export class EChartOptionDirective1 implements OnInit {
  @Input('chartType') chartType: any;

  constructor(private el: ElementRef) {}

  public ngOnInit(): void {

  }
}

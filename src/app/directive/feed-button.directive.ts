import {Directive,ElementRef,HostListener,Input} from '@angular/core';

@Directive({
  selector:'[feedButton]'
})

export class FeedButtonDirective{
  constructor(private el:ElementRef){

  }

  @HostListener('touchstart') onMouseEnter() {
    this.feed('0.618');
  }

  @HostListener('touchend') onMouseLeave() {
    this.feed('1');
  }

  private feed(opacity){
    this.el.nativeElement.style.opacity = opacity;
  }

}

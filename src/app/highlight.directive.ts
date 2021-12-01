import { Directive,ElementRef,HostBinding,HostListener,Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el:ElementRef,private renderer:Renderer2) {
    el.nativeElement.style.color="red";
    el.nativeElement.style.background="tomato";
   }
   ngOnInit(){
     this.renderer.setStyle(this.el.nativeElement,'background-color','pink');
     this.renderer.setStyle(this.el.nativeElement,'value','welcome');

   }
  //  @HostBinding("style.backgroundColor") bgColor;
  // @HostListener('mouseenter') mouseenter(){
  //   this.changeColor("blue");
  //   this,this.bgColor="orange"
  // }
  
  // changeColor(color) {
  //   this.el.nativeElement.style.color=color;
  // }
  // @HostListener('mouseleave') mouseleave(){
  //   this.changeLeaveColor("hotpink");
  // }
  
  // changeLeaveColor(color) {
  //   this.el.nativeElement.style.color=color;
  // }
}

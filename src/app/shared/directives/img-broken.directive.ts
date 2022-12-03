import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]'
})
export class ImgBrokenDirective {

  @Input() customImg: string = ''

  @HostListener('error') handleError(): void {
    const elNative = this.elHost.nativeElement;
    console.log('Esta imagen revento --> ', this.elHost)
    //elNative.src = '../../../assets/images/img_not_found.png'
    elNative.src = this.customImg;
  }

  //TODO: host Host HOST

  constructor(private elHost: ElementRef) {
    console.log(this.elHost)
  }

}

import { Component, OnInit, Input, ElementRef, Renderer2 } from '@angular/core';
import { DomController } from '@ionic/angular';

@Component({
  selector: 'app-image-content-header',
  templateUrl: './image-content-header.component.html',
  styleUrls: ['./image-content-header.component.scss'],
})
export class ImageContentHeaderComponent implements OnInit {

  @Input() img_header: string;
  @Input() titulo: string;
  @Input() subtitulo: string;
  @Input() scrollArea: any;
  @Input() marginBottom: number;

  newMarginBottom: any;
  constructor(private element: ElementRef,
              private renderer: Renderer2,
              private domCtrl: DomController) { }
  ngOnInit() {
    this.renderer.setStyle(this.element.nativeElement, 'margin-bottom', this.marginBottom + 'px');

    this.scrollArea.ionScroll.subscribe((ev: any) => {
      this.remarginImageHeader(ev);
    });
  }

  remarginImageHeader(ev: any) {
    if (ev) {
      this.domCtrl.write(() => {
        // console.log(ev);
        this.newMarginBottom = this.marginBottom + ev.detail.scrollTop;
        // console.log(this.newHeaderHeight);

        if (this.newMarginBottom > 200) {
          this.newMarginBottom = 200;
        }

        this.renderer.setStyle(this.element.nativeElement, 'margin-bottom', this.newMarginBottom + 'px');
      });
    }
  }
}

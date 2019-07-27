import { Component, OnInit, Input, ElementRef, Renderer2 } from '@angular/core';
import { DomController } from '@ionic/angular';

@Component({
  selector: 'app-expandable-header',
  templateUrl: './expandable-header.component.html',
  styleUrls: ['./expandable-header.component.scss'],
})
export class ExpandableHeaderComponent implements OnInit {

  @Input() scrollArea: any;
  @Input() headerHeight: number;

  nLoop = 0;
  numAnterior = 0;
  contador = 0;
  inLoop = false;

  newHeaderHeight: any;
  constructor(private element: ElementRef,
              private renderer: Renderer2,
              private domCtrl: DomController) { }

  ngOnInit() {
    this.renderer.setStyle(this.element.nativeElement, 'height', this.headerHeight + 'px');

    this.scrollArea.ionScroll.subscribe((ev: any) => {
      this.resizeHeader(ev);
    });
  }

  resizeHeader(ev: any) {
    if (ev) {
      this.domCtrl.write(() => {
     //    console.log(ev);
        this.newHeaderHeight = this.headerHeight - ev.detail.scrollTop;
        // console.log(this.newHeaderHeight);

        if (this.newHeaderHeight < 0) {
          this.newHeaderHeight = 0;
        }

        if (this.numAnterior === this.newHeaderHeight) {
          this.nLoop = this.nLoop + 1;
        } else if (this.numAnterior !== this.newHeaderHeight && this.contador === 0) {
          this.numAnterior = this.newHeaderHeight;
        }

        this.contador = this.contador + 1;

        if (this.contador === 2) {
          this.contador = 0;

          if (this.nLoop > 1) {
            this.inLoop = true;
            this.nLoop = 0;
          } else {
            this.inLoop = false;
          }
        }

        if (!this.inLoop) {
          this.renderer.setStyle(this.element.nativeElement, 'height', this.newHeaderHeight + 'px');
        }
      });
    }
  }
}

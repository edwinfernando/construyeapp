import { Component, OnInit, ElementRef, Renderer2, ViewChild, Input } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-footer-encuesta',
  templateUrl: './footer-encuesta.component.html',
  styleUrls: ['./footer-encuesta.component.scss'],
})
export class FooterEncuestaComponent implements OnInit {

  @Input() posicion = 0;
  porcentaje = 0.5;
  factor_m = 0;
  @ViewChild('porcentValue', { read: ElementRef }) private porcentValue: ElementRef;
  @ViewChild('progressBar', { read: ElementRef }) private progressBar: ElementRef;

  titulo1: string;
  titulo2: string;
  titulo3: string;
  titulo4: string;

  lEncuesta: {nombre: string}[] = [
    {
      nombre: 'GENERO'
    },
    {
      nombre: 'ACTIVIDAD FÍSICA'
    },
    {
      nombre: 'COMIDAS'
    },
    {
      nombre: 'CARNES'
    },
    {
      nombre: 'VERDURAS'
    },
    {
      nombre: 'FRUTAS'
    },
    {
      nombre: 'PRODUCTOS'
    },
    {
      nombre: 'DIARIO'
    },
    {
      nombre: 'MALOS HÁBITOS'
    },
    {
      nombre: 'MEDIDAS'
    }
  ];

  constructor(private element: ElementRef,
              private renderer: Renderer2,
              private platform: Platform) { }

  ngOnInit() {
    this.porcentaje = this.posicion / 10;
    this.resizeMarginPorcentaje();
    this.getTitulosEncuesta(this.posicion);
  }

  resizeMarginPorcentaje() {
    console.log(this.platform.width());

    if (this.porcentaje !== 1) {
      this.factor_m = (this.platform.width() * this.porcentaje) - 36;
    } else {
      this.factor_m = (this.platform.width() * this.porcentaje) - 50;
    }

    console.log(this.factor_m);

    this.renderer.setStyle(this.porcentValue.nativeElement, 'margin-left', this.factor_m + 'px');
  }

  getTitulosEncuesta(numero: number) {

    console.log(numero);

    if (numero < 4) {
      this.titulo1 = this.lEncuesta[0].nombre;
      this.titulo2 = this.lEncuesta[1].nombre;
      this.titulo3 = this.lEncuesta[2].nombre;
      this.titulo4 = this.lEncuesta[3].nombre;
    } else if (numero < this.lEncuesta.length) {
      this.titulo1 = this.lEncuesta[numero - 3].nombre;
      this.titulo2 = this.lEncuesta[numero - 2].nombre;
      this.titulo3 = this.lEncuesta[numero - 1].nombre;
      this.titulo4 = this.lEncuesta[numero].nombre;
    } else {
      this.titulo1 = this.lEncuesta[numero - 4].nombre;
      this.titulo2 = this.lEncuesta[numero - 3].nombre;
      this.titulo3 = this.lEncuesta[numero - 2].nombre;
      this.titulo4 = this.lEncuesta[numero - 1].nombre;
    }
  }
}

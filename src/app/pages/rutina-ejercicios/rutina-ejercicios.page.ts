import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { isUndefined } from 'util';

@Component({
  selector: 'app-rutina-ejercicios',
  templateUrl: './rutina-ejercicios.page.html',
  styleUrls: ['./rutina-ejercicios.page.scss'],
})
export class RutinaEjerciciosPage implements OnInit {

  @Input() titulo: string;
  @Input() pagePadre: string;

  titulo_temp: string;
  series: {nombre: string, numSeries: number, numRepeticiones: number, numPeso: number}[] = [
    {
      nombre: 'PRESS BANCO',
      numSeries: 5,
      numRepeticiones: 5,
      numPeso: 30
    }, {
      nombre: 'PRESS 2',
      numSeries: 4,
      numRepeticiones: 4,
      numPeso: 30
    }, {
      nombre: 'PRESS 3',
      numSeries: 3,
      numRepeticiones: 3,
      numPeso: 30
    }, {
      nombre: 'PRESS 4',
      numSeries: 5,
      numRepeticiones: 5,
      numPeso: 30
    }, {
      nombre: 'PRESS 5',
      numSeries: 3,
      numRepeticiones: 5,
      numPeso: 30
    }, {
      nombre: 'PRESS 6',
      numSeries: 5,
      numRepeticiones: 5,
      numPeso: 30
    }, {
      nombre: 'PRESS 7',
      numSeries: 5,
      numRepeticiones: 5,
      numPeso: 30
    }, {
      nombre: 'PRESS 8',
      numSeries: 5,
      numRepeticiones: 5,
      numPeso: 30
    }
  ];
  constructor(private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activeRoute.queryParams.subscribe((res) => {
      if (res.nombre !== undefined) {
        this.titulo = res.nombre;
      }

      if (res.pagePadre !== undefined) {
        this.pagePadre = res.pagePadre;
        console.log(this.pagePadre);
      }
    });
  }

  onClickPlayTime() {}
}

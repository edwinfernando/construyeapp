import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-ejercicio',
  templateUrl: './item-ejercicio.component.html',
  styleUrls: ['./item-ejercicio.component.scss'],
})
export class ItemEjercicioComponent implements OnInit {

  @Input() pagePadre: string;
  @Input() nombre: string;
  @Input() numSeries: number;
  @Input() numRepeticiones: number;
  @Input() numPeso: number;
  listaSeries: {activateButtom: boolean, numSerie: number}[];
  activate: boolean;
  constructor(private router: Router) {
    this.listaSeries = new Array();
  }

  ngOnInit() {
    for (let i = 0; i < 5; i++) {
      this.activate = false;
      if (i === 0) {
        this.activate = true;
      }

      this.listaSeries.push({activateButtom: this.activate, numSerie: this.numRepeticiones});
    }
  }

  buttonClick(nombre) {
    this.router.navigate(['tabs/' + this.pagePadre + '/rutina-ejercicios/ejercicios'], {
      queryParams: {
        nombre: nombre
      }
    });
    console.log(this.pagePadre);
  }

  onClickDisplayDialog() {}

  onClickSub(event, i) {
    if (this.listaSeries[i].numSerie > 1) {
      this.listaSeries[i].numSerie = this.listaSeries[i].numSerie - 1;
    } else {
      console.log(event);
      if (i < this.numSeries) {
        this.listaSeries[i].activateButtom = false;
        this.listaSeries[i + 1].activateButtom = true;
      }
    }
  }

  numSeriesView(i) {
    if (i < this.numSeries) {
      return true;
    } else {
      return false;
    }
  }
}

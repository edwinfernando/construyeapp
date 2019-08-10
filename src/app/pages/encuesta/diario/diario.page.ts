import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-diario',
  templateUrl: './diario.page.html',
  styleUrls: ['./diario.page.scss'],
})
export class DiarioPage implements OnInit {

  img_fondo = '/assets/slides/slide-01.png';
  titulo = 'DIARIO';
  subtitulo = 'Cuentanos un poco, como pasas la mayor parte de tú día';
  posicionFooter = 8;

  lActividades: {actividad: string}[] = [
    {
      actividad: 'EN LA OFICINA'
    },
    {
      actividad: 'EN LA OFICINA, PERO SALGO REGULARMENTE'
    },
    {
      actividad: 'PASO LA MAYOR PARTE DEL DÍA CAMINANDO'
    },
    {
      actividad: 'LABOR MANUAL'
    },
    {
      actividad: 'PERMANEZCO EN MI CASA'
    }
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  siguientePregunta(respuesta: any) {
    this.router.navigate(['malos-habitos'], {
      queryParams: {
      }});
  }

  getFontSize(i: number) {
    if (this.lActividades[i].actividad.length > 15) {
      return '0.8em';
    }
  }
}

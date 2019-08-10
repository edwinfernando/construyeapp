import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-frutas',
  templateUrl: './frutas.page.html',
  styleUrls: ['./frutas.page.scss'],
})
export class FrutasPage implements OnInit {
  img_fondo = '/assets/slides/slide-01.png';
  posicion = 0;
  posicionFooter = 6;

  lEncuestaAlimentos: {titulo: string, subtitulo: string, lAlimentos: {alimento: string, img_alimento: string}[]}[] = [
    {
      titulo : 'FRUTAS',
      subtitulo : 'Por favor, selecciona la (s) frutas que desea incluir en su plan de alimentación',
      lAlimentos : [
        {
          alimento: 'NARANJA',
          img_alimento : '/assets/encuesta/naranja.svg'
        },
        {
          alimento: 'MANZANA',
          img_alimento : '/assets/encuesta/manzana.svg'
        },
        {
          alimento: 'BANANO',
          img_alimento : '/assets/encuesta/banano.svg'
        },
        {
          alimento: 'PIÑA',
          img_alimento : '/assets/encuesta/pina.svg'
        },
        {
          alimento: 'AGUACATE',
          img_alimento : '/assets/encuesta/aguacate.svg'
        },
        {
          alimento: 'FRESAS',
          img_alimento : '/assets/encuesta/fresas.svg'
        }
      ]
    }
  ];

  constructor(private activeRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  siguientePregunta() {
    if (this.posicion < this.lEncuestaAlimentos.length) {
      this.router.navigate(['productos'], {
        queryParams: {
        }});
    }
  }

  /*getFontSize(i: number) {
    if (this.lActividades[i].actividad.length > 15) {
      return '0.8em';
    }
  }*/
}

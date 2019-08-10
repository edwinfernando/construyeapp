import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-vegetales',
  templateUrl: './vegetales.page.html',
  styleUrls: ['./vegetales.page.scss'],
})
export class VegetalesPage implements OnInit {
  img_fondo = '/assets/slides/slide-01.png';
  posicion = 0;
  posicionFooter = 5;

  lEncuestaAlimentos: {titulo: string, subtitulo: string, lAlimentos: {alimento: string, img_alimento: string}[]}[] = [
    {
      titulo : 'VERDURAS',
      subtitulo : 'Por favor, selecciona la (s) verduras que desea incluir en su plan de alimentación',
      lAlimentos : [
        {
          alimento: 'FRIJOLES',
          img_alimento : '/assets/encuesta/frijoles.svg'
        },
        {
          alimento: 'ARROZ',
          img_alimento : '/assets/encuesta/arroz.svg'
        },
        {
          alimento: 'PAPA',
          img_alimento : '/assets/encuesta/papa.svg'
        },
        {
          alimento: 'QUINUA',
          img_alimento : '/assets/encuesta/quinua.svg'
        },
        {
          alimento: 'COLIFLOR',
          img_alimento : '/assets/encuesta/coliflor.svg'
        },
        {
          alimento: 'MAÍZ',
          img_alimento : '/assets/encuesta/maiz.svg'
        }
      ]
    }
  ];

  constructor(private activeRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  siguientePregunta() {
      this.router.navigate(['frutas'], {
        queryParams: {
        }});
  }

  /*getFontSize(i: number) {
    if (this.lActividades[i].actividad.length > 15) {
      return '0.8em';
    }
  }*/
}

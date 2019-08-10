import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-carnes',
  templateUrl: './carnes.page.html',
  styleUrls: ['./carnes.page.scss'],
})
export class CarnesPage implements OnInit {

  img_fondo = '/assets/slides/slide-01.png';
  posicion = 0;
  posicionFooter = 4;

  lEncuestaAlimentos: {titulo: string, subtitulo: string, lAlimentos: {alimento: string, img_alimento: string}[]}[] = [
    {
      titulo : 'CARNES',
      subtitulo : 'Por favor, selecciona la (s) carnes que desea incluir en su plan de alimentación',
      lAlimentos : [
        {
          alimento: 'POLLO',
          img_alimento : '/assets/encuesta/pollo.svg'
        },
        {
          alimento: 'RES',
          img_alimento : '/assets/encuesta/res.svg'
        },
        {
          alimento: 'PESCADO',
          img_alimento : '/assets/encuesta/pescado.svg'
        },
        {
          alimento: 'CERDO',
          img_alimento : '/assets/encuesta/cerdo.svg'
        },
        {
          alimento: 'PAVO',
          img_alimento : '/assets/encuesta/pavo.svg'
        },
        {
          alimento: 'NO',
          img_alimento : '/assets/encuesta/no_carne.svg'
        }
      ]
    }
  ];

  constructor(private activeRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  siguientePregunta() {
      this.router.navigate(['vegetales'], {
        queryParams: {
        }});
  }

  /*getFontSize(i: number) {
    if (this.lActividades[i].actividad.length > 15) {
      return '0.8em';
    }
  }*/
}

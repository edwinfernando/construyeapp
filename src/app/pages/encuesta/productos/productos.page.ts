import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {
  img_fondo = '/assets/slides/slide-01.png';
  posicion = 0;
  posicionFooter = 7;

  lEncuestaAlimentos: {titulo: string, subtitulo: string, lAlimentos: {alimento: string, img_alimento: string}[]}[] = [
    {
      titulo : 'PRODUCTOS',
      subtitulo : 'Por favor, selecciona la (s) productos que desea incluir en su plan de alimentación',
      lAlimentos : [
        {
          alimento: 'YOGUR',
          img_alimento : '/assets/encuesta/yogur.svg'
        },
        {
          alimento: 'HUEVO',
          img_alimento : '/assets/encuesta/huevo.svg'
        },
        {
          alimento: 'LECHE',
          img_alimento : '/assets/encuesta/leche.svg'
        },
        {
          alimento: 'QUESO',
          img_alimento : '/assets/encuesta/queso.svg'
        },
        {
          alimento: 'CAFÉ',
          img_alimento : '/assets/encuesta/cafe.svg'
        },
        {
          alimento: 'TORTA',
          img_alimento : '/assets/encuesta/torta.svg'
        }
      ]
    }
  ];

  constructor(private activeRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  siguientePregunta() {
      this.router.navigate(['diario'], {
        queryParams: {
        }});
  }

  /*getFontSize(i: number) {
    if (this.lActividades[i].actividad.length > 15) {
      return '0.8em';
    }
  }*/
}

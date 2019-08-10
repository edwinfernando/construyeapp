import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comidas',
  templateUrl: './comidas.page.html',
  styleUrls: ['./comidas.page.scss'],
})
export class ComidasPage implements OnInit {

  img_fondo = '/assets/slides/slide-01.png';
  titulo = 'COMIDAS';
  subtitulo = 'Por favor, selecciona el número de comidas que realizas en el día';
  posicionFooter = 3;

  lActividades: {actividad: string}[] = [
    {
      actividad: 'DOS COMIDAS'
    },
    {
      actividad: 'TRES COMIDAS'
    },
    {
      actividad: 'CUATRO COMIDAS'
    },
    {
      actividad: 'CINCO COMIDAS'
    },
    {
      actividad: 'SEIS COMIDAS'
    }
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  siguientePregunta(respuesta: any) {
    this.router.navigate(['carnes'], {
      queryParams: {
      }});
  }

  getFontSize(i: number) {
    if (this.lActividades[i].actividad.length > 15) {
      return '0.8em';
    }
  }
}

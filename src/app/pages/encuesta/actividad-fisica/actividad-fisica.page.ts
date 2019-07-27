import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actividad-fisica',
  templateUrl: './actividad-fisica.page.html',
  styleUrls: ['./actividad-fisica.page.scss'],
})
export class ActividadFisicaPage implements OnInit {

  img_fondo = '/assets/slides/slide-01.png';
  titulo = 'ACTIVIDAD';
  subtitulo = 'FÍSICA';

  lActividades: {actividad: string}[] = [
    {
      actividad: 'CASI NUNCA'
    },
    {
      actividad: 'A MENUDO'
    },
    {
      actividad: '1-2 VECES A LA SEMANA'
    },
    {
      actividad: '3-5 VECES A LA SEMANA'
    },
    {
      actividad: '5-7 VECES A LA SEMANA'
    }
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  siguientePregunta(respuesta: any) {
    this.router.navigate(['comidas'], {
      queryParams: {}});
  }

  getFontSize(i: number) {
    if (this.lActividades[i].actividad.length > 15) {
      return '0.8em';
    }
  }
}

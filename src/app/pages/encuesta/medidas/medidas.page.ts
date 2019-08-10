import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medidas',
  templateUrl: './medidas.page.html',
  styleUrls: ['./medidas.page.scss'],
})
export class MedidasPage implements OnInit {

  img_fondo = '/assets/slides/slide-01.png';
  titulo = 'MEDIDAS';
  subtitulo = 'Comparte con nosotros tús medidas';
  posicionFooter = 10;

  lHabitos: {habitos: string}[] = [
    {
      habitos: 'EDAD'
    },
    {
      habitos: 'ESTATURA'
    },
    {
      habitos: 'PESO'
    },
    {
      habitos: 'OBJETIVOS'
    }
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  siguientePregunta() {
      this.router.navigate(['pre-existentes'], {
        queryParams: {
        }});
  }

  getFontSize(i: number) {
    if (this.lHabitos[i].habitos.length > 15) {
      return '0.8em';
    }
  }
}

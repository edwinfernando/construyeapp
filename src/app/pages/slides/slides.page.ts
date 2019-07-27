import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.page.html',
  styleUrls: ['./slides.page.scss'],
})
export class SlidesPage implements OnInit {

  slides: { img: string, titulo: string, subtitulo: string, piePagina: string}[] = [
    {
      img: '/assets/slides/slide-01.png',
      titulo: 'ENTRENAMIENTO',
      subtitulo: 'Los resultados no se dan \n si no entrenas con propósito.',
      piePagina: 'Encuentra aquí  un programa que se adapte a tu vida y objetivos.'
    },
    {
      img: '/assets/slides/slide-02.png',
      titulo: 'NUTRICIÓN',
      subtitulo: 'Necesitas el combustible apropiado para mejorar tu rendimiento.',
      piePagina: 'Encuentra el plan de alimentación que necesitas para conseguir tu objetivo.'
    },
    {
      img: '/assets/slides/slide-03.png',
      titulo: 'SUPLEMENTACIÓN',
      subtitulo: 'Necesitas el combustible apropiado para mejorar tu rendimiento.',
      piePagina: 'Encuentra el plan de alimentación que necesitas para conseguir tu objetivo.'
    },
    {
      img: '/assets/screen/img_fondo_constru_1_2.png',
      titulo: 'BIENVENIDOS',
      subtitulo: 'Estamos gustosos de servirte.',
      piePagina: ''
    }
  ];

  constructor() { }

  ngOnInit() {}

  getSize() {
    return this.slides.length - 1;
  }
}

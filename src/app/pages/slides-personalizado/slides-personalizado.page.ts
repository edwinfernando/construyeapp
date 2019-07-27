import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slides-personalizado',
  templateUrl: './slides-personalizado.page.html',
  styleUrls: ['./slides-personalizado.page.scss'],
})
export class SlidesPersonalizadoPage implements OnInit {

  booShowSlide = true;
  titulo = 'Estas listo';
  ic_back = '/assets/icon/ic_back.svg';

  slides: { img: string, titulo: string, subtitulo: string, contenido: string, opcion: string}[] = [
    {
      img: '/assets/img/img_personalizado_f.png',
      titulo: 'ESTAS LISTO',
      subtitulo: 'Para alcanzar tús objetivos?',
      contenido: 'Has parte de nuestro plan de entrenamiento, contamos con entrenadores personalizados 100% para tí',
      opcion: 'SOY ALUMNO'
    },
    {
      img: '/assets/img/img_personalizado_f.png',
      titulo: 'ESTAS LISTO',
      subtitulo: 'Para entrenar a tús pupilos?',
      contenido: 'Has parte de nuestro selecto grupo de entrenadores, y lleva el registro de tús alumnos de manera eficiente.',
      opcion: 'SOY COACH'
    },
    {
      img: '/assets/img/img_personalizado_m.png',
      titulo: 'ANIMATE',
      subtitulo: 'Programas garantizados',
      contenido: 'Porque pensamos en tí, permitenos obseguiarte el primer mes de entrenamiento totalmente',
      opcion: 'GRATIS'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  setBooShowSlide(booShow) {
    this.booShowSlide = booShow;
  }

  getBooShowSlide() {
    return this.booShowSlide;
  }
}

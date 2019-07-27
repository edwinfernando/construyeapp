import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ejercicios',
  templateUrl: './ejercicios.page.html',
  styleUrls: ['./ejercicios.page.scss'],
})
export class EjerciciosPage implements OnInit {

  titulo: string;
  slides: { img: string, descripcion: string}[] = [
    {
      img: '/assets/img/img_slide_ejercicio_1.png',
// tslint:disable-next-line: max-line-length
      descripcion: 'Agarrarse a las poleas, colocar los pies en los apoyos de la estación y, de espaldas a la máquina, suspender el cuerpo con los brazos rectos hacia delante.'
    },
    {
      img: '/assets/img/img_slide_ejercicio_2.png',
// tslint:disable-next-line: max-line-length
      descripcion: 'Después, tendrá que llevar las poleas hacia delante hasta que los brazos estén rectos delante de él, y de nuevo, a la altura de sus hombros.'
    }
  ];
  constructor(private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activeRoute.queryParams.subscribe((res) => {
      this.titulo = res.nombre;
    });
  }

}

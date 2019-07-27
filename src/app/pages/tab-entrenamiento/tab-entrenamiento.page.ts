import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-entrenamiento',
  templateUrl: './tab-entrenamiento.page.html',
  styleUrls: ['./tab-entrenamiento.page.scss'],
})
export class TabEntrenamientoPage implements OnInit {

  section = 'one';
  somethings: {image: string, etiqueta: string}[] = [
    {
      image : '/assets/img/img_pecho.png',
      etiqueta : 'PECHO DE ACERO'
    },
    {
      image : '/assets/img/img_abdomen.png',
      etiqueta : 'ABDOMEN PERFECTO'
    },
    {
      image : '/assets/img/img_gluteos.png',
      etiqueta : 'GLUTEOS DEFINIDOS'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}

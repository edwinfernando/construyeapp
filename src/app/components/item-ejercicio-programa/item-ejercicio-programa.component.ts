import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-ejercicio-programa',
  templateUrl: './item-ejercicio-programa.component.html',
  styleUrls: ['./item-ejercicio-programa.component.scss'],
})
export class ItemEjercicioProgramaComponent implements OnInit {

  @Input() nombre: string;
  @Input() repeticiones: string;
  @Input() peso: string;
  constructor() { }

  ngOnInit() {}

  buttonClick(nombre) {
    console.log('ClickItem');
  }
  onClickSerieRepeticiones() {
    console.log('ClickSerieRepeticiones');
  }
}

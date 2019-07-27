import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-mi-programa',
  templateUrl: './item-mi-programa.component.html',
  styleUrls: ['./item-mi-programa.component.scss'],
})
export class ItemMiProgramaComponent implements OnInit {

  txt_crear_programa = 'CREAR PROGRAMA';
  somethings: {image: string, etiqueta: string}[] = [
  ];
  constructor(private router: Router) { }

  ngOnInit() {}

  onClickCrearPrograma() {
    this.router.navigate(['tabs/entrenamiento/crear-programa'], {
      queryParams: {
      }
    });
  }
}

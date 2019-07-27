import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-programa',
  templateUrl: './item-programa.component.html',
  styleUrls: ['./item-programa.component.scss'],
})
export class ItemProgramaComponent implements OnInit {
  @Input() imagen: string;
  @Input() nombre: string;
  constructor(private router: Router) {
  }

  ngOnInit() {}

  onClick(nombre) {
    this.router.navigate(['tabs/entrenamiento/rutina-ejercicios'], {
      queryParams: {
        nombre: nombre,
        pagePadre: 'entrenamiento'
      }
    });
  }
}

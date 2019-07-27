import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-categoria-programa',
  templateUrl: './item-categoria-programa.component.html',
  styleUrls: ['./item-categoria-programa.component.scss'],
})
export class ItemCategoriaProgramaComponent implements OnInit {

  @Input() nombre: string;
  @Input() imagen: string;
  constructor(private router: Router) { }

  ngOnInit() {}

  buttonClick(nombre) {
    this.router.navigate(['tabs/entrenamiento/crear-programa/ejercicios-programa'], {
      queryParams: {
        nombre: nombre
      }
    });
  }
}

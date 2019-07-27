import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-personalizado',
  templateUrl: './item-personalizado.component.html',
  styleUrls: ['./item-personalizado.component.scss'],
})
export class ItemPersonalizadoComponent implements OnInit {

  @Input() numero: string;
  @Input() nombre: string;
  @Input() descripcion: string;

  constructor(private router: Router) { }

  ngOnInit() {}

  onClick(nombre) {//some: { etiqueta: any; }
    // console.log(some);
    this.router.navigate(['tabs/personalizado/rutina-ejercicios'], {
      queryParams: {
        nombre: nombre,
        pagePadre: 'personalizado'
      }
    });
  }
}

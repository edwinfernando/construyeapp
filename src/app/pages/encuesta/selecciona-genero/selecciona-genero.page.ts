import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selecciona-genero',
  templateUrl: './selecciona-genero.page.html',
  styleUrls: ['./selecciona-genero.page.scss'],
})
export class SeleccionaGeneroPage implements OnInit {

  img_fondo = '/assets/screen/img_fondo_constru_1_1.png';
  titulo = 'SELECCIONA';
  subtitulo = 'TÚ GÉNERO';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  siguientePregunta(respuesta: any) {
    this.router.navigate(['actividad-fisica'], {
      queryParams: {}});
  }
}

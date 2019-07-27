import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nombre-usuario',
  templateUrl: './nombre-usuario.page.html',
  styleUrls: ['./nombre-usuario.page.scss'],
})
export class NombreUsuarioPage implements OnInit {

  titulo = 'BIENVENIDO, ';
  subtitulo = 'CUAL ES TU NOMBRE?';
  etq_nombre = 'NOMBRE';
  etq_apellido = 'APELLIDO';
  img_fondo = '/assets/screen/img_fondo_constru_2_1.png';

  usuario = {
    nombre: '',
    apellido: '',
    celular: ''
  };

  constructor(private router: Router) { }

  ngOnInit() {
  }

  gotoNextPage() {
    this.router.navigate(['/numero-usuario'], {
      queryParams: {
        nombre: this.usuario.nombre
      }
    });
  }
}

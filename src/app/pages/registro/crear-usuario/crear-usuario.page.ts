import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.page.html',
  styleUrls: ['./crear-usuario.page.scss'],
})
export class CrearUsuarioPage implements OnInit {

  logo = '/assets/icon/ic_logo.svg';
  titulo = 'EMPIEZA TÚ CAMBIO';
  subtitulo = 'AHORA!';

  constructor() { }

  ngOnInit() {
  }

}

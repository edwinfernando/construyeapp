import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-numero-usuario',
  templateUrl: './numero-usuario.page.html',
  styleUrls: ['./numero-usuario.page.scss'],
})
export class NumeroUsuarioPage implements OnInit {

  titulo = 'INGRESA TÚ NÚMERO TELEFONÍCO ';
  contenido = 'Será envíado un código de verificación.';
  img_fondo = '/assets/screen/img_fondo_constru_1_1.png';

  usuario = {
    nombre: '',
    apellido: '',
    celular: ''
  };

  constructor(private activeRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activeRoute.queryParams.subscribe((res) => {
      this.usuario.nombre = res.nombre;
      console.log(res.nombre);
    });
  }

  gotoNextPage() {
    this.router.navigate(['/codigo-verificacion'], {
      queryParams: {
        nombre: this.usuario.nombre
      }
    });
  }

  getNombreUsuario() {
    const nombre_split = this.usuario.nombre.split(' ');
    console.log(nombre_split);
    return nombre_split[0];
  }
}

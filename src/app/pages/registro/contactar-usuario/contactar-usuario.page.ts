import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contactar-usuario',
  templateUrl: './contactar-usuario.page.html',
  styleUrls: ['./contactar-usuario.page.scss'],
})
export class ContactarUsuarioPage implements OnInit {

  titulo = ' Y, DONDE PUEDO CONTACTARTE? ';
  descripcion = 'Nosotros usamos tú número telefónico para que nuestros entrenadores puedan comunicarse contigo.';
  etq_numero_telefonico = 'NÚMERO TELEFÓNICO';
  etq_correo_electronico = 'CORREO ELECTRONÍCO';
  terminos_condiciones = 'Acepto los terminos y condiciones publicados en contruyetucuerpo.com';
  img_fondo = '/assets/screen/img_fondo_constru_2_2.png';
  isChecked = false;

  usuario = {
    nombre: '',
    apellido: '',
    celular: '',
    contacto: '',
    correo: ''
  };

  constructor(private activeRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activeRoute.queryParams.subscribe((res) => {
      this.usuario.nombre = res.nombre;
      console.log(res.nombre);
    });

  }

  gotoNextPage() {
    if (this.isChecked) {
      this.router.navigate(['tabs/personalizado'], {
        queryParams: {
         isLogged : this.isChecked
        }
      });
    }
  }

  getNombreUsuario() {
    const nombre_split = this.usuario.nombre.split(' ');
    return nombre_split[0];
  }
}

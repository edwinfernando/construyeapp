import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-codigo-verificacion',
  templateUrl: './codigo-verificacion.page.html',
  styleUrls: ['./codigo-verificacion.page.scss'],
})
export class CodigoVerificacionPage implements OnInit {

  titulo = 'INGRESA EL CÓDIGO DE VERIFICACIÓN ';
  img_fondo = '/assets/screen/img_fondo_constru_1_2.png';

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
    this.router.navigate(['/contactar-usuario'], {
      queryParams: {
        nombre: this.usuario.nombre
      }
    });
  }
}

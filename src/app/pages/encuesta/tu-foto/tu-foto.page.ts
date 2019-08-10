import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tu-foto',
  templateUrl: './tu-foto.page.html',
  styleUrls: ['./tu-foto.page.scss'],
})
export class TuFotoPage implements OnInit {

  img_fondo = '/assets/slides/slide-01.png';
  titulo = 'COMPARTENOS TUS FOTOS';
  subtitulo = 'Envianos tus fotos de frente, espalda y perfil en prendas que permitan observar los puntos que quieres mejorar';

  lFotos: {tipo: string}[] = [
    {
      tipo: 'FRENTE',
    },
    {
      tipo: 'ESPALDA',
    },
    {
      tipo: 'PERFIL',
    }
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  enviar() {
    this.router.navigate(['tabs/nutricion'], {
      queryParams: {
       isLogged : true,
       isEncuestado : true
      }
    });
  }
}

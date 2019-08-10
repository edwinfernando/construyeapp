import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-malos-habitos',
  templateUrl: './malos-habitos.page.html',
  styleUrls: ['./malos-habitos.page.scss'],
})
export class MalosHabitosPage implements OnInit {

  img_fondo = '/assets/slides/slide-01.png';
  titulo = 'MALOS HABITOS';
  subtitulo = 'Consideras que encajas en algunas de estas descripciones';
  posicionFooter = 9;

  lHabitos: {habitos: string}[] = [
    {
      habitos: 'NO DUERMO LO SUFICIENTE'
    },
    {
      habitos: 'COMO MUY TARDE POR LA NOCHE'
    },
    {
      habitos: 'CONSUMO MUCHA SAL'
    },
    {
      habitos: 'NO PUEDO DEJAR DE COMER DULCE'
    },
    {
      habitos: 'ME ENCANTAN LOS REFRESCOS'
    },
    {
      habitos: 'NINGUNO DE LOS ANTERIORES'
    }
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  siguientePregunta() {
      this.router.navigate(['medidas'], {
        queryParams: {
        }});
  }

  getFontSize(i: number) {
    if (this.lHabitos[i].habitos.length > 15) {
      return '0.8em';
    }
  }
}

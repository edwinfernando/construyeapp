import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { isUndefined } from 'util';

@Component({
  selector: 'app-tab-personalizado',
  templateUrl: './tab-personalizado.page.html',
  styleUrls: ['./tab-personalizado.page.scss'],
})
export class TabPersonalizadoPage implements OnInit {

  isLogged = false;
  section = 'one';
  programas: {valor: string; nombre: string; somethings}[] = [
    {
      valor: 'one',
      nombre: 'SEMANA 1',
      somethings: {} = [
        {
          etiqueta : 'SUDOR + FORMA',
          descripcion : '60 min'
        },
        {
          etiqueta : 'CARRERA CONSTANTE',
          descripcion : '50 km'
        },
        {
          etiqueta : 'HURACÁN',
          descripcion : '40 min'
        }
      ]
    }
  ];

  constructor(private activeRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activeRoute.queryParams.subscribe((res) => {
      this.isLogged = res.isLogged;
    });
  }

  ionViewWillEnter() {
    if (!this.isLogged) {
      this.gotoSlidePersonalizado();
    }
  }

  gotoSlidePersonalizado() {
    this.router.navigate(['tabs/personalizado/slide-personalizado'], {
      queryParams: {}});
  }
}

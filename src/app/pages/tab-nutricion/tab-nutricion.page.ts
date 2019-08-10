import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tab-nutricion',
  templateUrl: './tab-nutricion.page.html',
  styleUrls: ['./tab-nutricion.page.scss'],
})
export class TabNutricionPage implements OnInit {

  isLogged = false;
  isEncuestado = false;
  constructor(private activeRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activeRoute.queryParams.subscribe((res) => {
      this.isLogged = res.isLogged;
      this.isEncuestado = res.isEncuestado;
    });
  }

  ionViewWillEnter() {
    if (!this.isLogged && !this.isEncuestado) {
      this.gotoEncuesta();
    }
  }

  gotoEncuesta() {
    this.router.navigate(['selecciona-genero'], {
      queryParams: {}});
  }
}

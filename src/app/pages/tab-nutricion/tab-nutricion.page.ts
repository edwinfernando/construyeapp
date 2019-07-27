import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab-nutricion',
  templateUrl: './tab-nutricion.page.html',
  styleUrls: ['./tab-nutricion.page.scss'],
})
export class TabNutricionPage implements OnInit {

  isLogged = false;
  isEncuestado = false;
  constructor(private router: Router) { }

  ngOnInit() {

    if (!this.isLogged && !this.isEncuestado) {
      this.gotoEncuesta();
    }
  }

  gotoEncuesta() {
    this.router.navigate(['selecciona-genero'], {
      queryParams: {}});
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pre-existentes',
  templateUrl: './pre-existentes.page.html',
  styleUrls: ['./pre-existentes.page.scss'],
})
export class PreExistentesPage implements OnInit {

  img_fondo = '/assets/slides/slide-01.png';
  titulo = 'CONDICIONES PRE-EXISTENTES';
  subtitulo = 'Sufres de alguna emfermedad y consumes algún tipo de medicamentos?';
  condiciones = 'Descargo de responsabilidad: ConstruyeTuCuerpo.com no es un médico o un profesional médico.';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  siguientePregunta() {
      this.router.navigate(['tu-foto'], {
        queryParams: {
        }});
  }
}

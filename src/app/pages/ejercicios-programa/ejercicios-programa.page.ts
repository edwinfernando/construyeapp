import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-ejercicios-programa',
  templateUrl: './ejercicios-programa.page.html',
  styleUrls: ['./ejercicios-programa.page.scss'],
})
export class EjerciciosProgramaPage implements OnInit {

  ic_back = '/assets/icon/ic_back.svg';
  titulo: string;

  ejercicios: {nombre: string, repeticiones: string, peso: string}[] = [
    {
      nombre: 'PRESS BANCO',
      repeticiones: '5x5',
      peso: '20kg'
    }, {
      nombre: 'PRESS 2',
      repeticiones: '5x5',
      peso: '20kg'
    }, {
      nombre: 'PRESS 3',
      repeticiones: '5x5',
      peso: '20kg'
    }, {
      nombre: 'PRESS 4',
      repeticiones: '5x5',
      peso: '20kg'
    }, {
      nombre: 'PRESS 5',
      repeticiones: '5x5',
      peso: '20kg'
    }, {
      nombre: 'PRESS 6',
      repeticiones: '5x5',
      peso: '20kg'
    }, {
      nombre: 'PRESS 7',
      repeticiones: '5x5',
      peso: '20kg'
    }, {
      nombre: 'PRESS 8',
      repeticiones: '5x5',
      peso: '20kg'
    }
  ];
  constructor(private location: Location, private activeRoute: ActivatedRoute, public alertCtrl: AlertController) { }

  ngOnInit() {
    this.activeRoute.queryParams.subscribe((res) => {
      if (res.nombre !== undefined) {
        this.titulo = res.nombre;
      }
    });
  }

  myBackButton() {
    this.location.back();
  }

  onClickAceptar() {}

  async showAlertNuevaEjercicio() {
    const alert = await this.alertCtrl.create({
      header: 'Añadir ejercicio',
      inputs: [
        {
          name: 'nombre',
          type: 'text',
          placeholder: 'Nombre'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Aceptar',
          handler: (data) => {
            // this.titulo = data.nombre;
            this.ejercicios.push({nombre : data.nombre, repeticiones : '5x5', peso : '20kg'});
            console.log('Confirm Ok', data);
          }
        }
      ]
    });

    await alert.present();
  }
}

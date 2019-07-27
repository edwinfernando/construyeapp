import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-crear-programa',
  templateUrl: './crear-programa.page.html',
  styleUrls: ['./crear-programa.page.scss'],
})
export class CrearProgramaPage implements OnInit {

  titulo = 'CREAR PROGRAMA';
  categorias: {nombre: string, imagen: string}[] = [
    {
      nombre: 'PRESS BANCO',
      imagen: '/assets/icon/ic_pecho.svg'
    }, {
      nombre: 'PRESS 2',
      imagen: '/assets/icon/ic_pecho.svg'
    }, {
      nombre: 'PRESS 3',
      imagen: '/assets/icon/ic_pecho.svg'
    }, {
      nombre: 'PRESS 4',
      imagen: '/assets/icon/ic_pecho.svg'
    }, {
      nombre: 'PRESS 5',
      imagen: '/assets/icon/ic_pecho.svg'
    }, {
      nombre: 'PRESS 6',
      imagen: '/assets/icon/ic_pecho.svg'
    }, {
      nombre: 'PRESS 7',
      imagen: '/assets/icon/ic_pecho.svg'
    }, {
      nombre: 'PRESS 8',
      imagen: '/assets/icon/ic_pecho.svg'
    }
  ];

  constructor(public alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async showAlertNuevaCategoria() {
    const alert = await this.alertCtrl.create({
      header: 'Añadir categoria',
      inputs: [
        {
          name: 'nombre',
          type: 'text',
          placeholder: 'Nombre'
        },
        {
          name: 'descripcion',
          type: 'text',
          placeholder: 'Descripción'
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
            this.categorias.push({nombre : data.nombre, imagen : data.descripcion});
            console.log('Confirm Ok', data);
          }
        }
      ]
    });

    await alert.present();
  }
}

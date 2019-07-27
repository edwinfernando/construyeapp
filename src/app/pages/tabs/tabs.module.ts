import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPage } from './tabs.page';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'entrenamiento'
  },
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'entrenamiento',
        loadChildren: '../tab-entrenamiento/tab-entrenamiento.module#TabEntrenamientoPageModule'
      },
      {
        path: 'entrenamiento/rutina-ejercicios',
        loadChildren: '../rutina-ejercicios/rutina-ejercicios.module#RutinaEjerciciosPageModule'
      },
      {
        path: 'entrenamiento/rutina-ejercicios/ejercicios',
        loadChildren: '../ejercicios/ejercicios.module#EjerciciosPageModule'
      },
      {
        path: 'entrenamiento/crear-programa',
        loadChildren: '../crear-programa/crear-programa.module#CrearProgramaPageModule'
      },
      {
        path: 'entrenamiento/crear-programa/ejercicios-programa',
        loadChildren: '../ejercicios-programa/ejercicios-programa.module#EjerciciosProgramaPageModule'
      },
      {
        path: 'personalizado',
        loadChildren: '../tab-personalizado/tab-personalizado.module#TabPersonalizadoPageModule'
      },
      {
        path: 'personalizado/rutina-ejercicios',
        loadChildren: '../rutina-ejercicios/rutina-ejercicios.module#RutinaEjerciciosPageModule'
      },
      {
        path: 'personalizado/rutina-ejercicios/ejercicios',
        loadChildren: '../ejercicios/ejercicios.module#EjerciciosPageModule'
      },
      {
        path: 'personalizado/slide-personalizado',
        loadChildren: '../slides-personalizado/slides-personalizado.module#SlidesPersonalizadoPageModule'
      },
      {
        path: 'nutricion',
        loadChildren: '../tab-nutricion/tab-nutricion.module#TabNutricionPageModule'
      },
      {
        path: 'progreso',
        loadChildren: '../tab-progreso/tab-progreso.module#TabProgresoPageModule'
      },
      {
        path: 'perfil',
        loadChildren: '../tab-perfil/tab-perfil.module#TabPerfilPageModule'
      }
    ]
  }
];

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}

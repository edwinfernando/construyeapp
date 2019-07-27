import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'slides', pathMatch: 'full'},
  { path: 'slides', loadChildren: './pages/slides/slides.module#SlidesPageModule' },
  { path: 'tabs', loadChildren: './pages/tabs/tabs.module#TabsPageModule' },
  { path: 'tab-entrenamiento', loadChildren: './pages/tab-entrenamiento/tab-entrenamiento.module#TabEntrenamientoPageModule' },
  { path: 'tab-personalizado', loadChildren: './pages/tab-personalizado/tab-personalizado.module#TabPersonalizadoPageModule' },
  { path: 'tab-nutricion', loadChildren: './pages/tab-nutricion/tab-nutricion.module#TabNutricionPageModule' },
  { path: 'tab-progreso', loadChildren: './pages/tab-progreso/tab-progreso.module#TabProgresoPageModule' },
  { path: 'tab-perfil', loadChildren: './pages/tab-perfil/tab-perfil.module#TabPerfilPageModule' },
  { path: 'rutina-ejercicios', loadChildren: './pages/rutina-ejercicios/rutina-ejercicios.module#RutinaEjerciciosPageModule' },
  { path: 'ejercicios', loadChildren: './pages/ejercicios/ejercicios.module#EjerciciosPageModule' },
  { path: 'crear-programa', loadChildren: './pages/crear-programa/crear-programa.module#CrearProgramaPageModule' },
  { path: 'ejercicios-programa', loadChildren: './pages/ejercicios-programa/ejercicios-programa.module#EjerciciosProgramaPageModule' },
  { path: 'slides-personalizado', loadChildren: './pages/slides-personalizado/slides-personalizado.module#SlidesPersonalizadoPageModule' },
  { path: 'crear-usuario', loadChildren: './pages/registro/crear-usuario/crear-usuario.module#CrearUsuarioPageModule' },
  { path: 'nombre-usuario', loadChildren: './pages/registro/nombre-usuario/nombre-usuario.module#NombreUsuarioPageModule' },
  { path: 'numero-usuario', loadChildren: './pages/registro/numero-usuario/numero-usuario.module#NumeroUsuarioPageModule' },
// tslint:disable-next-line: max-line-length
  { path: 'codigo-verificacion', loadChildren: './pages/registro/codigo-verificacion/codigo-verificacion.module#CodigoVerificacionPageModule' },
  { path: 'contactar-usuario', loadChildren: './pages/registro/contactar-usuario/contactar-usuario.module#ContactarUsuarioPageModule' },
  { path: 'selecciona-genero', loadChildren: './pages/encuesta/selecciona-genero/selecciona-genero.module#SeleccionaGeneroPageModule' },
  { path: 'actividad-fisica', loadChildren: './pages/encuesta/actividad-fisica/actividad-fisica.module#ActividadFisicaPageModule' },
  { path: 'comidas', loadChildren: './pages/encuesta/comidas/comidas.module#ComidasPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

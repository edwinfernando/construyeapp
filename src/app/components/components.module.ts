import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ImageContentHeaderComponent } from './image-content-header/image-content-header.component';
import { ExpandableHeaderComponent } from './expandable-header/expandable-header.component';
import { ItemProgramaComponent } from './item-programa/item-programa.component';
import { HeaderBackComponent } from './header-back/header-back.component';
import { ItemEjercicioComponent } from './item-ejercicio/item-ejercicio.component';
import { ItemMiProgramaComponent } from './item-mi-programa/item-mi-programa.component';
import { ItemCategoriaProgramaComponent } from './item-categoria-programa/item-categoria-programa.component';
import { ItemEjercicioProgramaComponent } from './item-ejercicio-programa/item-ejercicio-programa.component';
import { HeaderCancelarComponent } from './header-cancelar/header-cancelar.component';
import { ItemPersonalizadoComponent } from './item-personalizado/item-personalizado.component';
import { FooterEncuestaComponent } from './footer-encuesta/footer-encuesta.component';
import { ItemAlimentosComponent } from './item-alimentos/item-alimentos.component';
import { ItemsHabitosComponent } from './items-habitos/items-habitos.component';
import { ItemFotosComponent } from './item-fotos/item-fotos.component';

@NgModule({
  declarations: [
    HeaderComponent,
    ImageContentHeaderComponent,
    ExpandableHeaderComponent,
    ItemProgramaComponent,
    HeaderBackComponent,
    ItemEjercicioComponent,
    ItemMiProgramaComponent,
    ItemCategoriaProgramaComponent,
    ItemEjercicioProgramaComponent,
    HeaderCancelarComponent,
    ItemPersonalizadoComponent,
    FooterEncuestaComponent,
    ItemAlimentosComponent,
    ItemsHabitosComponent,
    ItemFotosComponent
  ],
  exports: [
    HeaderComponent,
    ImageContentHeaderComponent,
    ExpandableHeaderComponent,
    ItemProgramaComponent,
    HeaderBackComponent,
    ItemEjercicioComponent,
    ItemMiProgramaComponent,
    ItemCategoriaProgramaComponent,
    ItemEjercicioProgramaComponent,
    HeaderCancelarComponent,
    ItemPersonalizadoComponent,
    FooterEncuestaComponent,
    ItemAlimentosComponent,
    ItemsHabitosComponent,
    ItemFotosComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ]
})
export class ComponentsModule { }

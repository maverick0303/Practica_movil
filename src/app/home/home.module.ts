import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { Componente1Component } from '../components/componente1/componente1.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  /**aqui se agrega el componenete para que se muestre en la pagina por a cual lo incluiste **/
  declarations: [HomePage, Componente1Component]
})
export class HomePageModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { HomePageRoutingModule } from './home-routing.module';
import { Componente1Component } from '../components/componente1/componente1.component';
//aqui se importa el diseño, aquoi pusimos el de la carga
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    MatProgressSpinnerModule,
<<<<<<< Updated upstream
=======
    MatProgressSpinnerModule
>>>>>>> Stashed changes
  ],
  /**aqui se agrega el componenete para que se muestre en la pagina por a cual lo incluiste **/
  declarations: [HomePage, Componente1Component]
})
export class HomePageModule { }

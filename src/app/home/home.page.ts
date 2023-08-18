import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  //string
  nombreUsuario: string = "Maria";
  //esto es solo un valor predetermiundo, no merece una declaracion.
  clave = "1234";
  //esto es un arreglo y no se debe de declarar nada porque es una variable golbar.
  lista: any = [
    {
      nombre: "Lorenzo",
      apellido: "Guevara"

    }
  ]
  //esto es una prueba
  user1: string = "";
  constructor(private router: Router,  private alertController: AlertController, private toastController: ToastController) { }

  sumar() {
    //el this es para indicar que es una clave propia de la clase.
    this.clave;
    //esto es para mostrar un mesaje por consola
    console.log("buenos dias gente linda");
    //aqui esta el evento:

  }
  iniciar_sesion() {
    //para redireccionar aqui se tiene que hacer con router. la palabra que aparecer alli es el nombre de la variable que se va a usar.
    this.router.navigate(['/pagina1']);
    //esto es para la alerta intrusiva:
    this.presentAlert();
    //alerta no intrusiva;
    this.presentToast();
    //pasar datos de una pagina a otra: (esto esa como las variables de contexto)
    let navigationExtras: NavigationExtras = {
      state:{
        //aqui se crean los pares ordenados:
        userEnviado: this.user1, 
        claveEnviada: this.clave
        
      }
    }
    //se debe de colocar esto abajo de las variables de contexto cuando se tenga que redirigir
    this.router.navigate(['/pagina1'], navigationExtras);
  }

  //aqui es para los mensajes de alerta intrusiva:

  async presentAlert() {
    const alert = await this.alertController.create({
      header: '3312',
      subHeader: 'Prestar atencion',
      message: 'esto es una alerta',
      buttons: ['sigue'],
    });

    await alert.present();
  }

  //aqui va alerta no intrusiva:

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Hello World!',
      duration: 1500,
      position: 'bottom',
    });

    await toast.present();
  }
}



import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.page.html',
  styleUrls: ['./pagina1.page.scss'],
})
export class Pagina1Page implements OnInit {
  //se crean dos variables:
  usuarioR: string = "";
  claveR: string ="";
  //los any son oara cualquier tipo de dato
  variableStorage: any ="";

  lista: any = [
    {
      nombre: "Jorenzo",
      apellido: "Guevara",
      edad: 23,
      dinero:1000,
      hoy:2582023

    },
    {
      nombre: "Jose",
      apellido: "Perez",
      edad: 23,
      dinero:1000,
      hoy:2582023

    }
  ]
//estas son las librerias que se necesitan para recibir las variables:
  constructor(private router: Router, private activeRouter: ActivatedRoute) { 
    

    //esto es para que se reciban la informacion que se le envie:
    //PROMISE: solo tiene una vida, si se cumple lo que se le pide y ya luego no hace mas nada
    //OBSERVABLE: recibe para tomarla de nuevo si hay un error. 
    //-------------------------------------------------------------//
    //vamos a capturar la redireccion:

    this. activeRouter.queryParams.subscribe(param=>{
      this.claveR = this.router.getCurrentNavigation()?.extras?.state?.['claveEnviada'];{
      this.usuarioR = this.router.getCurrentNavigation()?.extras?.state?.['userEnviado'];
        
        
      }
    })
   }

  ngOnInit() {
    //aqui se captura la variable de local que hiciste
    this.variableStorage = localStorage.getItem('token');
    

  }

}

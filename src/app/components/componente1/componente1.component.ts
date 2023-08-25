import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.scss'],
})
export class Componente1Component  implements OnInit {
  /**aqui se debe de importar lo que vas a mostrar, se llama inyector */
  @Input()nombre: string ="hola";
  constructor() { }

  ngOnInit() {}

}

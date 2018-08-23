import { Component } from '@angular/core';
import { Comando } from './model/comando';

@Component({
  selector: 'my-app',
  templateUrl: './app/app.component.html'
})
export class AppComponent {
  message = 'This is the sample message.';
  private listaComandos: Comando[];

  constructor() {
    this.listaComandos = [
      new Comando("git status", "Muestra el estado de los archivos comparados con la version HEAD"),
      new Comando("git log", "Muestra el registro de modificaciones realizadas"),
      new Comando("git checkout", "Sirve para obtener la versión de la cabecera HEAD",
        [
          new Comando("-b", "Sirve para crear una rama además de cambiarse a la misma",
        ]
      )
    ];
  }


}
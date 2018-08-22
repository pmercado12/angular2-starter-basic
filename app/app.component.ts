import { Component } from '@angular/core';
import { Comando } from './model/comando';

@Component({
  selector: 'my-app',
  styles: [`
    
  `],
  template: `
    <div class="jumbotron text-center">
      <h1>GIT!</h1>
      <p>{{ message }}</p>
    </div>
  `
})
export class AppComponent {
  message = 'This is the sample message.';
  private listaComandos: Comando[];

  constructor(){
    this.listaComandos = [
      new Comando("git status","Muestra el estado de los archivos comparados con la version HEAD")
    ];
  }


}
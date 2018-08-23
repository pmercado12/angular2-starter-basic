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
          new Comando("-b", "Sirve para crear una rama además de cambiarse a la misma")
        ]
      ),
      new Comando("git config", "Sirve para configurar el usuario en el equipo, la configuración es guardada en el arhivo .gitconfig"),
      new Comando("git add", "Sirve para adicionar archivos al stage",
        [
          new Comando(".", "Adiciona todos los archivos al stage"),
          new Comando("-u", "Adiciona solo los archivos modificados o eliminados")
        ]),
      new Comando("git fetch", "Actualiza el proyecto local con la versión del repositorio remoto"),
      new Comando("git merge", "Une 2 o más historias de desarrollo"),
      new Comando("git push", "Actualiza el repositorio remoto con lo que se tiene localmente"),
      new Comando("git pull", "Obtiene la última versión del repositorio y lo actualiza realizando un merge con lo que se tiene localmente.\nEs igual que hacer git fetch + git merge"),
      new Comando("git reset", "Modifica la versión de la cabecera del proyecto local a un específico punto de la historia",
        [
          new Comando("--hard", "Modifica el índice y el historial"),
          new Comando("-mixed", "Modifica el índice pero no el historial"),
          new Comando("-soft", "No modifica el índice ni el historial pero modifica la cabecera HEAD")
        ]
      ),
      new Comando("git branch", "Sirve para crear branches o cambiarse de ubicación a ellos"),
      new Comando("git init", "Sirve para crear un proyecto git"),
      new Comando("git diff", "Muestra las diferencias entre 2 versiones de la historia"),
      new Comando("git help", "Muestra la ayuda de los comandos git"),
      new Comando("git clone", "Clona el proyecto de un repositorio para ejecutarlo localmente"),
      new Comando("git flow", "Es una librería externa que sirve como modelo para trabajo con ramas además de abreviar comandos git"),
    ];
  }


}
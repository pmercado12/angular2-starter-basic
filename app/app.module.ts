import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ComandosGitComponent } from './components/comandos-git/comandos-git.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, ComandosGitComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
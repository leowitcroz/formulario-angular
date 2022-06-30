import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'formulario';

  enviando: any;

  enviar($event: any): void{
    console.log($event);
    this.enviando = $event;
    
  }
}

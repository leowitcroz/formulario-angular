import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'formulario';

  enviandos: any[] = [];

  enviar($event: any): void{
    console.log($event);
    const enviando = {...$event, data: new Date()};
    this.enviandos.push(enviando);
    
  }
}

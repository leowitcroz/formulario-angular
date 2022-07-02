import { Component } from '@angular/core';
import { EnviandoService } from './services/enviando.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'formulario';

  

  constructor(private service: EnviandoService){

  }

  enviar($event: any){
    this.service.adicionar($event)

  }

  
}

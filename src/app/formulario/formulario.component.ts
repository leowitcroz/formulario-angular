import { Component, OnInit, Output ,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {


  ngOnInit(): void {
  }

  @Output() aoEnviar = new EventEmitter<any>()

  email: string | undefined;
  telefone: string | undefined;


  enviar(){
    console.log('nova transferencia solicitada');
    const valorEnviar = {email:this.email, telefone: this.telefone};
    this.aoEnviar.emit(valorEnviar);
  }


}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EnviandoService } from '../services/enviando.service';

@Component({
  selector: 'app-enviarinfo',
  templateUrl: './enviarinfo.component.html',
  styleUrls: ['./enviarinfo.component.scss']
})
export class EnviarinfoComponent implements OnInit {


 
 enviandos : any[] = [];

  constructor(private service:EnviandoService) { }

  ngOnInit(): void {
    this.enviandos = this.service.enviandos;
  }

}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-enviarinfo',
  templateUrl: './enviarinfo.component.html',
  styleUrls: ['./enviarinfo.component.scss']
})
export class EnviarinfoComponent implements OnInit {


  @Input() enviando : any;

  constructor() { }

  ngOnInit(): void {
  }

}

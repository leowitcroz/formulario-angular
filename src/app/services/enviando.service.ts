import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnviandoService {
  listaenviando: any[] = [];
  
  constructor() {
    this.listaenviando= []
   }

   get enviandos(){
    return this.listaenviando;
   }

   adicionar(enviando: any){
    
      this.hidratar(enviando);
      this.listaenviando.push(enviando);
      
    
   }

   private hidratar(enviando: any){
    enviando.data = new Date();


   }
}


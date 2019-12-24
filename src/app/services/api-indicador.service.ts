import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiIndicadorService {

  url:string = 'https://mindicador.cl/api/';


  constructor(private httpClient:HttpClient) { 

  }

  getIndicador(indicador:string){
    return this.httpClient.get(this.url+indicador);
  }
}

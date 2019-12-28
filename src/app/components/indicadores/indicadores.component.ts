import { Component, OnInit } from '@angular/core';
import { ApiIndicadorService } from 'src/app/services/api-indicador.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-indicadores',
  templateUrl: './indicadores.component.html',
  styles: []
})
export class IndicadoresComponent implements OnInit  {
  indicador:object;
  indicadorSerie:Object;
  spinner:boolean;
  indicadores:object=[
    { codigo:'uf' },
    { codigo:'ivp' },
    { codigo:'dolar' },
    { codigo:'dolar_intercambio' },
    { codigo:'euro' },
    { codigo:'ipc' },
    { codigo:'utm' },
    { codigo:'imacec' },
    { codigo:'tpm' },
    { codigo:'libra_cobre' },
    { codigo:'tasa_desempleo' },
    { codigo:'bitcoin' },
  ]
  constructor(private apiIndicador:ApiIndicadorService) { }

  ngOnInit() {
    
  }

  getIndicador(indicador){
    this.spinner = true;
    this.apiIndicador.getIndicador(indicador).subscribe((data:any)=>{
      this.indicador = data;
      this.indicadorSerie = data.serie;
      this.spinner=false;
    }
    )
  }

  consultar(forma:NgForm){
    //console.log(forma.value.indicadores)
    this.getIndicador(forma.value.indicadores);

  }
}

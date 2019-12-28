import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table-indicador',
  templateUrl: './table-indicador.component.html',
  styleUrls: ['./table-indicador.component.css']
})
export class TableIndicadorComponent implements OnInit {

  @Input () indSerie:any;
  @Input () ind:any;

  constructor() { }

  ngOnInit() {
    console.log(this.indSerie)
  }

}

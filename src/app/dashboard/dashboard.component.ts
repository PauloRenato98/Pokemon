import { PesquisarapiService } from './pesquisarapi.service';

import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private PesquisarapiService : PesquisarapiService) { }

  
  namePokemon:string = "";
  imagem : string = "";


  chamadaservice(){
    this.PesquisarapiService.reqapi().subscribe(dados =>{
      dados.
    });
  }

  ngOnInit(): void {
  }

}

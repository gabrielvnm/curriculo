import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-educacao',
  templateUrl: './educacao.component.html',
  styleUrls: ['./educacao.component.css']
})
export class EducacaoComponent implements OnInit {

  exibirCard1 = false;
  exibirCard2 = false;
  exibirCard3 = false;
  exibirCard4 = false;
  exibirCard5 = false;
  exibirCard6 = false;
  
  constructor() { }

  ngOnInit(): void {
  }

}

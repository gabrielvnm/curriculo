import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

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

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.css']
})
export class EnderecoComponent implements OnInit {

  @Input() endereco;
  @Output() atualizaEndereco = new EventEmitter();

  atualizarEndereco() {
    let name = "Villa Mix";
    let location = {address: 'Mineirinho', city: 'Belo Horizonte', country: 'Brasil'};
    this.atualizaEndereco.emit(location);
    this.endereco=location.address;
  }

  constructor() { }

  ngOnInit(): void {
  }

}

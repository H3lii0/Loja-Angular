import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { HomeService } from '../componentes/services/home.service';

export interface Pessoa {
  nome: string;
  idade: number;
  sexo: string;
  salario: string;
}

export interface Pessoas extends Array<Pessoa>{}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit{
  title = 'estudo-angular';

  constructor(private homeService: HomeService) {
  }

  clientes!: Pessoas;

  displayedColumns: string[] = ['nome', 'idade', 'sexo', 'salario'];
  dataSource !: MatTableDataSource<any>;

  ngOnInit(): void {
    this.homeService.getClientes().subscribe( clientes => {
      this.clientes = clientes;
      this.dataSource = new MatTableDataSource(this.clientes);
    })
  }
}

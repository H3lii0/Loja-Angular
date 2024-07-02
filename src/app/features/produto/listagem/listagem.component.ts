import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../services/produto.service';
import { MatTableDataSource } from '@angular/material/table';
import { Produto, Produtos } from 'src/app/models/produto.model';
import { Router } from '@angular/router';
import { MenuItem, Message, MessageService } from 'primeng/api';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit{
  produtos!: Produtos;
  messages: Message[] = [];

  constructor (
    private produtoService: ProdutoService,
    private router: Router,
    private messageService: MessageService
  ) {}

  displayedColumns: string[] = ['nome', 'descricao', 'imagemUrl', 'preco' ,'estoque'];
  dataSource !: MatTableDataSource<any>;

  ngOnInit(): void {
      this.produtoService.getProdutos().subscribe( produtos => {
      this.produtos = produtos;
      this.dataSource = new MatTableDataSource(this.produtos)
    })
  }

  editarProduto(produto: Produto) {
    this.router.navigate(['produto', 'editar-produto', produto.id]);
  }

  criarNovoProduto() {
    this.router.navigate(['produto', 'novo-produto']);
  }
}

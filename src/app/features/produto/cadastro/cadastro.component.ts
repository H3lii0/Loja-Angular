import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../services/produto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/models/produto.model';
import { MenuItem, MessageService } from 'primeng/api';
import { Message } from 'primeng/api';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
  providers: [ MessageService ]
})
export class CadastroComponent implements OnInit{
  messages: Message[] = [];
  items!: MenuItem[];
  id!: string;
  produto!: Produto;
  value!: string;
  rota: string = '';

  nome: string = "";
  preco: string = ''
  descricao: string = "";
  estoque: number = 0;
  tituloPagina: string = '';
  isNovoProduto: boolean = false;

  constructor(
    private produtoService: ProdutoService,
    private activatedRoute: ActivatedRoute,
    private router : Router,
  ) {

  }

  ngOnInit(): void {
      this.rota =this.activatedRoute.snapshot.url[0].path

      if (this.rota === 'editar-produto') {
        this.id = this.activatedRoute.snapshot.url[1].path;
  
        this.produtoService.getProdutoById(this.id).subscribe((produto: Produto) => {
          this.produto = produto;
          this.nome = this.produto.nome;
          this.preco = this.produto.preco;
          this.descricao = this.produto.descricao;
          this.estoque = this.produto.estoque;
          this.tituloPagina = "Editar produto"
        })
      } else {
        this.isNovoProduto = true;
        this.tituloPagina = 'Novo produto'
      }
  }



  salvarProduto() {
    const salvarProduto: Produto = {
      id: parseInt(this.id),
      nome: this.nome,
      preco: this.preco,
      descricao: this.descricao,
      estoque: this.estoque
    }
    
    if (this.isNovoProduto) {
      this.cadastrarProduto(salvarProduto);
    } else {
      salvarProduto.imagemUrl = this.produto.imagemUrl
      this.atualizaProduto(salvarProduto);
    }
    
  }

  cadastrarProduto(produto: Produto) {
    this.produtoService.cadastrarProduto(produto).subscribe(response => {
      this.messages = [{ severity: 'success', summary: 'Sucesso', detail: 'Produto cadastrado com sucesso!' }];
      setTimeout(() => {
        this.router.navigate(['produto', 'listagem'])
      }, 1500);
    })
  }

  atualizaProduto(salvarProduto: Produto) {
  this.produtoService.atualizarProduto(salvarProduto).subscribe(response => {
      this.messages = [{ severity: 'success', summary: 'Sucesso', detail: 'Produto atualizado com sucesso!' }];
      setTimeout(() => {
        this.router.navigate(['produto', 'listagem'])
      }, 1500);
    })
  }
}

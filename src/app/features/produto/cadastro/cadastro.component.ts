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

  nome: string = "";
  preco: string = ''
  descricao: string = "";
  estoque: number = 0;

  constructor(
    private produtoService: ProdutoService,
    private activatedRoute: ActivatedRoute,
    private router : Router,
    private messageService: MessageService
  ) {

  }

  ngOnInit(): void {
      this.id = this.activatedRoute.snapshot.url[1].path;

      this.produtoService.getProdutoById(this.id).subscribe((produto: Produto) => {
        this.produto = produto;
        this.nome = this.produto.nome;
        this.preco = this.produto.preco;
        this.descricao = this.produto.descricao;
        this.estoque = this.produto.estoque;
      })
  }



  salvarProduto() {
    const saveProduto = {
      id: parseInt(this.id),
      nome: this.nome,
      preco: this.preco,
      imagemUrl: this.produto.imagemUrl,
      descricao: this.descricao,
      estoque: this.estoque
    }
    
    this.produtoService.atualizarProduto(saveProduto).subscribe(response => {
      this.messages = [{ severity: 'success', summary: 'Sucesso', detail: 'Produto atualizado com sucesso!' }];
      setTimeout(() => {
        this.router.navigate(['produto', 'listagem'])
      }, 1500);
    })
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto, Produtos } from 'src/app/models/produto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private apiUrl = "http://localhost:3000/"

  constructor(private http: HttpClient) { }

  getProdutos(): Observable<Produtos> {
    return this.http.get<Produtos>(`${this.apiUrl}produtos`)
  }

  getProdutoById(id: string): Observable<Produto>{
    return this.http.get<Produto>(`${this.apiUrl}produtos/${id}`)
  }
  
  atualizarProduto(produto: Produto): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}produtos/${produto.id}`, produto)
  }

  cadastrarProduto(produto: Produto): Observable<any> {
    return this.http.post(`${this.apiUrl}produtos`, produto)
  }
}

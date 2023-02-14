import { Injectable } from '@angular/core';
import { IProdutoCarrinho } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  itens: IProdutoCarrinho[] = [];

  constructor() { }

  obterCarrinho(){
    return JSON.parse(localStorage.getItem("carrinho") || "");
  }
  adicionarCarrinho(produto: IProdutoCarrinho){
    this.itens.push(produto);
    localStorage.setItem("carrinho", JSON.stringify(this.itens));
  }
  removerCarrinho(produto: IProdutoCarrinho){
    this.itens.splice(this.itens.indexOf(produto),1);
  }
}

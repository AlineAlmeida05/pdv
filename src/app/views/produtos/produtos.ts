import { Component, OnInit } from '@angular/core';
import { MainLayout } from '../../layout/main-layout/main-layout';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [MainLayout, FormsModule],
  templateUrl: './produtos.html',
  styleUrl: './produtos.scss',
})

export class Produtos implements OnInit {
  ngOnInit() {
    if (typeof window !== 'undefined') {
      this.carregarProdutos();
    }
  }

  nome = '';
  categoria = '';
  precoVenda = 0;
  estoqueInicial = 0;
  estoqueMinimo = 0;

  produtos: any[] = [];

  indiceEdicao: number | null = null;

  modalAberto = false;

  abrirModal() {
    this.modalAberto = true;
  }

  fecharModal() {
    this.modalAberto = false;
  }

  salvarProdutosLocalStorage() {

    if (typeof window === 'undefined') {
      return;
    }

    localStorage.setItem(
      'produtos',
      JSON.stringify(this.produtos)
    );
  }

  salvarProduto() {
    if (
      !this.nome ||
      !this.categoria ||
      this.precoVenda <= 0
    ) {
      return;
    }

    const produto = {
      nome: this.nome,
      categoria: this.categoria,
      precoVenda: this.precoVenda,
      estoqueInicial: this.estoqueInicial,
      estoqueMinimo: this.estoqueMinimo
    };
    

    if (this.indiceEdicao !== null) {

      this.produtos[this.indiceEdicao] = produto;

    } else {

      this.produtos.push(produto);

    }

    this.salvarProdutosLocalStorage();

    this.nome = '';
    this.categoria = '';
    this.precoVenda = 0;
    this.estoqueInicial = 0;
    this.estoqueMinimo = 0;

    this.indiceEdicao = null;

    this.fecharModal();
  }

  carregarProdutos() {

    if (typeof window === 'undefined') {
      return;
    }

    const produtosSalvos =
      localStorage.getItem('produtos');

    if (!produtosSalvos) {
      return;
    }

    this.produtos =
      JSON.parse(produtosSalvos);

  }

  excluirProduto(indice: number) {

    const confirmar = confirm(
      'Tem certeza que deseja excluir este produto?'
    );

    if (!confirmar) {
      return;
    }

    this.produtos.splice(indice, 1);

    this.salvarProdutosLocalStorage();
  }


  editarProduto(indice: number) {

    const produto = this.produtos[indice];

    this.nome = produto.nome;
    this.categoria = produto.categoria;
    this.precoVenda = produto.precoVenda;
    this.estoqueInicial = produto.estoqueInicial;
    this.estoqueMinimo = produto.estoqueMinimo;

    this.indiceEdicao = indice;

    this.abrirModal();

  }

}

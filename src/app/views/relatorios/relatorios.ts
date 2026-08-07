import { Component, OnInit } from '@angular/core';
import { MainLayout } from '../../layout/main-layout/main-layout';

@Component({
  selector: 'app-relatorios',
  imports: [MainLayout],
  templateUrl: './relatorios.html',
  styleUrl: './relatorios.scss',
})
export class Relatorios implements OnInit {

  ngOnInit() {
    this.carregarProdutos();

    this.carregarVendas();
  }

  produtos: any[] = [];

  totalProdutos = 0;

  produtosEstoqueBaixo = 0;

  totalItensEstoque = 0;

  valorTotalEstoque = 0;

  vendas: any[] = [];

  faturamentoTotal = 0;

  itensVendidos = 0;

  quantidadeVendas = 0;

  produtoMaisVendido = '-';


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

    this.calcularIndicadores();

  }

  calcularIndicadores() {

    this.totalProdutos =
      this.produtos.length;

    this.produtosEstoqueBaixo =
      this.produtos.filter(
        produto =>
          produto.estoqueInicial <=
          produto.estoqueMinimo
      ).length;

    this.totalItensEstoque =
      this.produtos.reduce(
        (total, produto) =>
          total + produto.estoqueInicial,
        0
      );

    this.valorTotalEstoque =
      this.produtos.reduce(
        (total, produto) =>
          total +
          (
            produto.precoVenda *
            produto.estoqueInicial
          ),
        0
      );

  }

  carregarVendas() {

    if (typeof window === 'undefined') {

      return;

    }

    const vendasSalvas =

      localStorage.getItem('vendas');

    if (!vendasSalvas) {

      return;

    }

    this.vendas =

      JSON.parse(vendasSalvas);

    this.calcularIndicadoresVenda();
  }

  calcularIndicadoresVenda() {

  this.quantidadeVendas =
    this.vendas.length;

  this.itensVendidos =
    this.vendas.reduce(
      (total, venda) =>
        total + venda.quantidade,
      0
    );

  this.faturamentoTotal =
    this.vendas.reduce(
      (total, venda) =>
        total + venda.valorTotal,
      0
    );

  const contador: Record<string, number> = {};

  this.vendas.forEach(venda => {

    contador[venda.produto] =
      (contador[venda.produto] || 0) +
      venda.quantidade;

  });

  let maiorQuantidade = 0;

  let maisVendido = '-';

  Object.entries(contador).forEach(
    ([produto, quantidade]) => {

      if (quantidade > maiorQuantidade) {

        maiorQuantidade = quantidade;

        maisVendido = produto;

      }

    }
  );

  this.produtoMaisVendido =
    maisVendido;

  }
}

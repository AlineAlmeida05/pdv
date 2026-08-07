import { Component, OnInit } from '@angular/core';
import { MainLayout } from '../../layout/main-layout/main-layout';

@Component({

  selector: 'app-dashboard',

  standalone: true,

  imports: [MainLayout],

  templateUrl: './dashboard.html',

  styleUrl: './dashboard.scss',

})

export class Dashboard implements OnInit {

  produtos: any[] = [];

  vendas: any[] = [];

  faturamentoTotal = 0;

  itensVendidos = 0;

  produtosEstoqueBaixo = 0;

  produtoMaisVendido = '-';

  ngOnInit() {

    this.carregarProdutos();

    this.carregarVendas();

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

    this.produtosEstoqueBaixo =

      this.produtos.filter(

        produto =>

          produto.estoqueInicial <=

          produto.estoqueMinimo

      ).length;

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

    Object.entries(contador)

      .forEach(([produto, quantidade]) => {

        if (quantidade > maiorQuantidade) {

          maiorQuantidade = quantidade;

          maisVendido = produto;

        }

      });

    this.produtoMaisVendido =

      maisVendido;

  }

}
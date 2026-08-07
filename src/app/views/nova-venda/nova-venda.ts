import { Component, OnInit } from '@angular/core';
import { MainLayout } from '../../layout/main-layout/main-layout';
import { FormsModule } from '@angular/forms';
import { Alert } from '../../base-components/alert/alert';

@Component({
  selector: 'app-nova-venda',
  standalone: true,
  imports: [
    MainLayout,
    FormsModule,
    Alert
  ],
  templateUrl: './nova-venda.html',
  styleUrl: './nova-venda.scss',
})
export class NovaVenda implements OnInit {

  produtos: any[] = [];

  produtoSelecionado = '';

  produtoSelecionadoDetalhe: any = null;

  quantidadeVendida = 0;

  formaPagamento = '';

  mensagem = '';

  tipoMensagem:
    'sucesso' | 'erro' | 'aviso' | 'info' = 'info';

  ngOnInit() {
    this.carregarProdutos();
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

  selecionarProduto() {

    this.produtoSelecionadoDetalhe =
      this.produtos.find(
        produto =>
          produto.nome ===
          this.produtoSelecionado
      );

  }

  finalizarVenda() {

    if (!this.produtoSelecionadoDetalhe) {
      return;
    }

    if (this.quantidadeVendida <= 0) {
      return;
    }

    if (!this.formaPagamento) {

      this.mensagem =
        'Selecione uma forma de pagamento.';

      this.tipoMensagem = 'erro';

      return;
    }

    if (
      this.quantidadeVendida >
      this.produtoSelecionadoDetalhe.estoqueInicial
    ) {

      this.mensagem =
        'Quantidade maior que o estoque disponível.';

      this.tipoMensagem = 'erro';

      return;
    }

    this.produtoSelecionadoDetalhe.estoqueInicial -=
      this.quantidadeVendida;

    localStorage.setItem(
      'produtos',
      JSON.stringify(this.produtos)
    );

    const vendasSalvas =
      localStorage.getItem('vendas');

    const vendas =

      vendasSalvas
        ? JSON.parse(vendasSalvas)
        : [];

    const venda = {

      produto:

        this.produtoSelecionadoDetalhe.nome,

      categoria:

        this.produtoSelecionadoDetalhe.categoria,

      quantidade:

        this.quantidadeVendida,

      valorUnitario:

        this.produtoSelecionadoDetalhe.precoVenda,

      valorTotal:

        this.produtoSelecionadoDetalhe.precoVenda *

        this.quantidadeVendida,

      formaPagamento:

        this.formaPagamento,

      data:

        new Date().toISOString()

    };

    vendas.push(venda);

    localStorage.setItem(
      'vendas',
      JSON.stringify(vendas)
    );

    this.mensagem =
      'Venda realizada com sucesso!';

    this.tipoMensagem = 'sucesso';

    setTimeout(() => {
      this.mensagem = '';
    }, 5000);

    this.quantidadeVendida = 0;

    this.formaPagamento = '';

    this.produtoSelecionado = '';

    this.produtoSelecionadoDetalhe = null;

    this.selecionarProduto();

    this.carregarProdutos();

  }
}
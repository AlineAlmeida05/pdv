import { Component, OnInit } from '@angular/core';
import { MainLayout } from '../../layout/main-layout/main-layout';
import { FormsModule } from '@angular/forms';
import { Alert } from '../../base-components/alert/alert';

@Component({
  selector: 'app-entrada-de-estoque',
  standalone: true,
  imports: [
    MainLayout,
    FormsModule,
    Alert
  ],
  templateUrl: './entrada-de-estoque.html',
  styleUrl: './entrada-de-estoque.scss',
})
export class EntradaDeEstoque implements OnInit {

  produtos: any[] = [];

  produtoSelecionado = '';

  produtoSelecionadoDetalhe: any = null;

  quantidade = 0;

  mensagem = '';
  tipoMensagem:
    'sucesso' | 'erro' | 'aviso' | 'info' = 'info';

  timeoutMensagem: number | null = null;

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

  adicionarAoEstoque() {

    if (!this.produtoSelecionado || this.quantidade <= 0) {
      return;
    }

    const produto = this.produtos.find(
      p => p.nome === this.produtoSelecionado
    );

    if (!produto) {
      return;
    }

    produto.estoqueInicial += this.quantidade;

    localStorage.setItem(
      'produtos',
      JSON.stringify(this.produtos)
    );

    this.quantidade = 0;

    this.selecionarProduto();

    this.mensagem =
      'Estoque atualizado com sucesso!';
    this.tipoMensagem = 'sucesso';

    setTimeout(() => {
      this.mensagem = '';
    }, 5000);

  }

  selecionarProduto() {

    this.mensagem = '';

    this.produtoSelecionadoDetalhe =
      this.produtos.find(
        produto =>
          produto.nome ===
          this.produtoSelecionado
      );

  }

}
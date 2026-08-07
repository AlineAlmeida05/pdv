import { Component, OnInit } from '@angular/core';
import { MainLayout } from '../../layout/main-layout/main-layout';

@Component({
  selector: 'app-estoque',
  standalone: true,
  imports: [MainLayout],
  templateUrl: './estoque.html',
  styleUrl: './estoque.scss',
})
export class Estoque implements OnInit {

  produtos: any[] = [];

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

}
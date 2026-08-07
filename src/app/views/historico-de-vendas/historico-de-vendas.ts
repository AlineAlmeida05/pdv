import { Component, OnInit } from '@angular/core';
import { MainLayout } from '../../layout/main-layout/main-layout';
import { DatePipe } from '@angular/common';

@Component({

  selector: 'app-historico-de-vendas',
  standalone: true,
  imports: [MainLayout, DatePipe],
  templateUrl: './historico-de-vendas.html',
  styleUrl: './historico-de-vendas.scss',

})

export class HistoricoDeVendas implements OnInit {

  vendas: any[] = [];

  vendasAgrupadas: any[] = [];

  totalVendas = 0;
  totalItensVendidos = 0;
  faturamentoTotal = 0;

  ngOnInit() {

    this.carregarVendas();

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
      JSON.parse(vendasSalvas).reverse();

    this.agruparVendasPorData();
  }

  calcularIndicadores() {

    this.totalVendas = this.vendas.length;

    this.totalItensVendidos = this.vendas.reduce(
      (total, venda) => total + venda.quantidade,
      0
    );

    this.faturamentoTotal = this.vendas.reduce(
      (total, venda) => total + venda.valorTotal,
      0
    );

  }

  agruparVendasPorData() {

    const grupos: any = {};

    this.vendas.forEach(venda => {

      const data = venda.data.split('T')[0];

      if (!grupos[data]) {

        grupos[data] = {
          data,
          vendas: [],
          totalVendas: 0,
          totalItens: 0,
          faturamento: 0
        };

      }

      grupos[data].vendas.push(venda);

      grupos[data].totalVendas++;

      grupos[data].totalItens += venda.quantidade;

      grupos[data].faturamento += venda.valorTotal;

    });

    this.vendasAgrupadas =
      Object.values(grupos);

    console.log(this.vendasAgrupadas);
  }

  formatarDataCard(data: string): string {

  const hoje = new Date();

  const [ano, mes, dia] = data.split('-').map(Number);

  const dataCard = new Date(
    ano,
    mes - 1,
    dia
  );

  const hojeSemHora = new Date(
    hoje.getFullYear(),
    hoje.getMonth(),
    hoje.getDate()
  );

  const diferencaDias = Math.floor(
    (
      hojeSemHora.getTime() -
      dataCard.getTime()
    ) /
    (1000 * 60 * 60 * 24)
  );

  if (diferencaDias === 0) {
    return 'Hoje';
  }

  if (diferencaDias === 1) {
    return 'Ontem';
  }

  if (diferencaDias === 2) {
    return 'Anteontem';
  }

  return dataCard.toLocaleDateString('pt-BR');
}


}
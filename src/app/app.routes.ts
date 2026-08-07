import { Routes } from '@angular/router';
import { Login } from './views/login/login';
import { Dashboard } from './views/dashboard/dashboard';
import { Produtos } from './views/produtos/produtos';
import { Estoque } from './views/estoque/estoque';
import { NovaVenda } from './views/nova-venda/nova-venda';
import { Promocoes } from './views/promocoes/promocoes';
import { Relatorios } from './views/relatorios/relatorios';
import { MarketingIA } from './views/marketing-ia/marketing-ia';
import { Configuracoes } from './views/configuracoes/configuracoes';
import { EntradaDeEstoque } from './views/entrada-de-estoque/entrada-de-estoque';
import { HistoricoDeVendas } from './views/historico-de-vendas/historico-de-vendas';
import { Fiados } from './views/fiados/fiados';


export const routes: Routes = [
    {
        path: '',
        component: Login,
    },
    {
        path: 'dashboard',
        component: Dashboard,
    },
    {
        path: 'produtos',
        component: Produtos
    },
    {
        path: 'entrada-de-estoque',
        component: EntradaDeEstoque
    },
    {
        path: 'estoque',
        component: Estoque
    },
    {
        path: 'nova-venda',
        component: NovaVenda
    },
    {
        path: 'historico-de-vendas',
        component: HistoricoDeVendas
    },
    {
        path: 'promocoes',
        component: Promocoes
    },
    {
        path: 'relatorios',
        component: Relatorios
    },
    {
        path: 'marketing-ia',
        component: MarketingIA
    },
    {
        path: 'configuracoes',
        component: Configuracoes
    },
    {
        path: 'fiados',
        component: Fiados
    }
];

import Index from './components/Index';
import Servicos from './components/Servicos'
import Servico from './components/Servico'
import Contrato from './components/Contrato'
import Confirmacao from './components/Confirmacao'

export const routes = [
    {
        path: '/',
        name: 'index',
        component: Index
    },
    {
        path: '*',
        component: Index
    },
    {
        path: '/servicos',
        name: 'servicos',
        component: Servicos
    },
    {
        path: '/servico/:id',
        name: 'servico',
        component: Servico
    },
    {
        path: '/contrato/:id',
        name: 'contrato',
        component: Contrato
    },
    {
        path: '/confirmacao',
        name: 'confirmacao',
        component: Confirmacao
    }
];
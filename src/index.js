import Vue from 'vue';
import {todoItem, todoList, incluirTarefa, barramentoEvento} from './components/todo/todo'

Vue.config.debug = true;
Vue.config.devtools = true

const app = new Vue({
    mounted() {
        barramentoEvento.$on('remover', this.deletaTarefa);
        barramentoEvento.$on('incluir', this.adicionaTarefa);
    },
    el: '#app',
    data: {
        listaTarefas: [
            {
                descricao: 'teste',
                id: String(Math.random()).substring(2,5)
            },
            {
                descricao: 'teste2',
                id: String(Math.random()).substring(2,5)
            },
        ]
    },
    components: {
        'todo-list': todoList,
        'adicionar-tarefa': incluirTarefa
    },
    methods: {
        deletaTarefa: function(indiceTarefa) {
            this.listaTarefas.splice(indiceTarefa, 1);
        },
        adicionaTarefa: function(descricao) {
            let novaTarefa = {
                descricao: descricao,
                id: String(Math.random()).substring(2,5)
            };
            this.listaTarefas.push(novaTarefa);
        }
    }
})

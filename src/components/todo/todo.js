import Vue from 'vue';

export const barramentoEvento = new Vue();


export const todoItem = {
    props: ['tarefa', 'indice'],
    template: '<li>{{ tarefa.descricao }}<button v-on:click="removeTarefa(indice)">X</button></li>',
    methods: {
        removeTarefa: function(indice) {
            barramentoEvento.$emit('remover', indice);
        }
    }
}


export const todoList = {
    components: {
        'todo-item': todoItem
    },
    props: ['tarefas'],
    template: '<ul>\
        <li \
            is="todo-item"\
            v-for="(tarefa, indice) in tarefas"\
            v-bind:tarefa="tarefa"\
            v-bind:indice="indice"\
            v-bind:key="tarefa.id">\
        </li>\
    </ul>',
}


export const incluirTarefa = {
    template: '\
        <input type="text"\
            placeholder="Digite uma nova tarefa"\
            v-on:keyup.enter="adicionaTarefa"\
        />',
    methods: {
        adicionaTarefa: function() {
            let descricao = this.$el.value
            barramentoEvento.$emit('incluir', descricao);
            this.$el.value = '';
        }
    }
}

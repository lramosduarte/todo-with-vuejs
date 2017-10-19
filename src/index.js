import Vue from 'vue';

let apps = new Vue({
    el: '#app',
    data: {
        descricaoTarefa: '',
        listaTarefas: []
    },
    methods: {
        adicionaTarefa: function() {
            let novaTarefa = {
                descricao: this.descricaoTarefa,
                id: String(Math.random()).substring(2,5)
            };
            this.listaTarefas.push(novaTarefa)
            this.descricaoTarefa = ''
        }
    }
})

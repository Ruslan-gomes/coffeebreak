import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);



const store = new Vuex.Store({
    state: {
        desabafos: [
            
        ]
    },
    mutations: {
        adicionarDesabafo: function(state, desabafo){

            var desabafoTemporario = new Object();
            desabafoTemporario.nome = desabafo.autor;
            desabafoTemporario.conteudo = desabafo.conteudo;

            desabafo.autor = '';
            desabafo.conteudo = '';
            this.state.desabafos.push(desabafoTemporario);
        }
    }
})

export default store;
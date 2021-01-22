<template>
    <main>
        <h1>Cantinho do desabafo</h1>
        <h2>Aqui você pode fazer um desabafo sobre sua vida, seu emprego, etc... fique a vontade!</h2>

        <section class="desabafo">

            <label for="autor">A identificação é opcional (seu nome será salvo como "anônimo" se você deixa-lo vazio)</label>
            <input class="desabafo-autor-input"
                type="text"
                id="autor"
                placeholder="Autor do desabafo"
                size="40"
                v-model="desabafo.autor"
            >

            <input class="desabafo-desabafo-input"
                type="text"
                placeholder="Desabafe aqui"
                v-model="desabafo.conteudo"
                @keyup.enter="adicionarDesabafo"
            >
            <button :disabled="desabafo.conteudo == ''" class="button is-primary" @click="adicionarDesabafo">Registrar desabafo</button>
        </section>

        <desabafo-app-lista/>
    </main>
</template>

<script>

import {mapState} from 'vuex'
import DesabafoAppLista from '../components/DesabafoApp-Lista.vue'

export default {
    name: 'DesabafoApp',

    components: {
        DesabafoAppLista
    },

    data(){
        return{
            desabafo: {
                autor: '',
                conteudo: ''
            }
        }
    },

    computed: {
        ...mapState({
            desabafos: state => state.desabafos
        })
    },

    methods: {
        adicionarDesabafo: function(){
            if(this.desabafo.autor == null || this.desabafo.autor == ''){
                this.desabafo.autor = 'Anônimo';
            }
            return this.$store.commit('adicionarDesabafo', this.desabafo);
        }
    }
}
</script>

<style scoped>

main{
    width: 100%;
    text-align: center;
    color: #EDEDED;
    background-color: #344960;
}

.desabafo{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.desabafo label{
    margin-top: 20px;
    font-size: 15px;
}

.desabafo input{
    margin-bottom: 20px;
    width: 50%;
    text-align: center;
    color: black;
    background-color: whitesmoke;
}

.desabafo input:focus{
    text-decoration: aquamarine;
}

.desabafo-autor-input{
    height: 40px;
    font-size: 15px;
}

.desabafo-desabafo-input{
    height: 120px;
    font-size: 20px;
}

h1{
    font-size: 50px;
    padding: 10px;
}

</style>
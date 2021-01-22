<template>
    <main>
        <h1>Cantinho do desabafo</h1>
        <h2>Aqui você pode fazer um desabafo sobre sua vida, seu emprego, etc... fique a vontade!</h2>

        <section class="desabafo">

            <label for="autor">Não é necessário se identificar</label>
            <input class="desabafo-autor-input"
                type="text"
                id="autor"
                placeholder="Autor do desabafo"
                v-model="desabafo.autor"
            >

            <input class="desabafo-desabafo-input"
                type="text"
                placeholder="Desabafe aqui"
                v-model="desabafo.conteudo"
            >
            <button class="button is-primary" @click="adicionarDesabafo">Registrar desabafo</button>
        </section>

        <section class="desabafos">
            <h1>Lista de desabafos</h1>
            <div v-for="(d, index) in desabafos" :key="index">
                <h3>Autor: {{d.nome}}</h3>
                <hr>
                <p>Desabafo: {{d.conteudo}}</p>
            </div>
        </section>
    </main>
</template>

<script>

import {mapState} from 'vuex'

export default {
    name: 'DesabafoApp',

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
    border-radius: 20px;
}

.desabafo-autor-input{
    height: 30px;
}

.desabafo-desabafo-input{
    height: 120px;
}

h1{
    font-size: 50px;
    padding: 10px;
}

.desabafos{
    margin-top: 30px;
    text-align: center;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    padding: 10px;
}

.desabafos div{
    border: 1px solid aqua;
    background-color: #EDEDED;
    color: black;
    padding: 10px;
    transition: scale 1s;
}

.desabafo div:hover{
    transition: scale(1.5);
}

</style>
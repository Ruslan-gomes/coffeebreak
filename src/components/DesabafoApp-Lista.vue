<template>
    <section class="desabafos">
            <h1>Lista de desabafos</h1>
            <div v-for="(d, index) in desabafos" :key="index">
                <h3> <b>Autor:</b>  {{d.nome}}</h3>
                <p> <b>Desabafo:</b> {{d.conteudo}}</p>
            </div>
        </section>
</template>

<script>

import {mapState} from 'vuex'
export default {
    name: 'DesabafoApp-Lista',

    computed: {
        ...mapState({
            desabafos: state => state.desabafos
        })
    }
}
</script>

<style scoped>

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
    margin-top: 10px;
    transition: scale 1s;
}

.desabafos div:hover{
    transform: scale(1.2);
}

</style>
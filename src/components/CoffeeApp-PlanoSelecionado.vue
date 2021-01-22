<template>
    <div>
        <h1>Obrigado pela preferência</h1>
        <h2>Veja também o cantinho do desabafo</h2>
        <button class="button is-info is-rounded"><router-link to="/desabafos">Cantinho do desabafo</router-link></button>
    </div>
</template>

<script>
export default {
    name: 'CoffeeApp-PlanoSelecionado'
}
</script>

<style scoped>

div{
    margin-top:30px;
    border: 1px solid #EDEDED;
}

h1{
    font-size: 40px;
    color: aquamarine;
    opacity: 2.0;
}

h2{
    font-size: 20px;
    color:aquamarine;
}

button{
    padding: 10px;
    margin: 10px;
}

a{
    color: #EDEDED;
}

</style>
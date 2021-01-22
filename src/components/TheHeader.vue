<template>
    <header class="cabecalho">
        <nav>
            <ul>
                <li><router-link to="/">Coffe break</router-link></li>
                <li><router-link to="/desabafos">Desabafos</router-link></li>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'TheHeader'
}
</script>

<style scoped>

.cabecalho{
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #2B3D50;
}

.cabecalho ul li {
    list-style: none;
    display: inline;
}

ul li a{
    color: #EDEDED;
    margin-right: 30px;
    text-decoration: none;
    transition: 0.2s opacity;
}

li a:hover{
    opacity: 0.8;
    color: #9e6969;
    
}
</style>
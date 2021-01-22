<template>
    <footer class="rodape">
        <a class="social-link" href="https://github.com/Ruslan-gomes/coffeebreak" target="blank">
            <img src="../assets/repositorio.jpg" alt="repositório github">
        </a>
    </footer>
</template>

<script>
export default {
    name: 'TheFooter'
}
</script>

<style scoped>

.rodape{
    width: 100%;
    height: 60px;
    background-color:  #2B3D50;
    display: flex;
    justify-content: center;
    align-items: center;
}

.social-link img{
    width: 30px;
    border-radius: 20px;
}

</style>
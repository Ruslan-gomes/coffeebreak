<template>
    <main>
        <section class="coffeebreak">
            <h1>COFFEE BREAK</h1>
            <p>
                Bem vindo ao coffee break. Aqui é um espaço reservado para a pausa do café.
            </p>
        </section>
            
        <section class="coffee-plans">
            <div>Escolha seu plano!</div>
            <button class="coffee-btn">Expresso</button>
            <button class="coffee-btn">Mega expresso</button>
            <button class="coffee-btn">Café com leite</button>

            <button class="button is-primary is-rounded">Escolher plano</button>
        </section>
    </main>
</template>

<script>
export default {
    name: 'CoffeeApp'
}
</script>


<style scoped>

main{
    width: 100%;
    height: calc(100vh - 120px);
    text-align: center;
    background-image: url("../assets/cafe.png");
    background-repeat: no-repeat;
    background-size: 100%;
    background-size: cover;
}

h1{
    color: black;
    padding: 10px;
}

p{
    color:black;
    margin: 10px 10px;
}

.coffee-plans{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
}

.coffee-plans div{
    color: black;
    margin-bottom: 10px;
}

.coffee-btn{
    width: 50%;
    background-color: white;
    height: 40px;
    margin-bottom: 20px;
    font-size: 20px;
    border: 2px solid white;
}

.coffee-btn:hover{
    opacity: 0.8;
    cursor: pointer;
}

.coffee-btn:focus{
    border-color: blue
}

</style>
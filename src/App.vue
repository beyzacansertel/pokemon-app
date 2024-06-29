<template>
    <header>
        <h1>Pokemons</h1>
    </header>

    <pokemons></pokemons>
</template>

<script>
export default {
    data() { }
}
</script>

<style>
* {
    box-sizing: border-box;
}

html {
    font-family: 'Jost', sans-serif;
}

body {
    margin: 0;
}

header {
    margin: 3rem auto;
    border-radius: 10px;
    padding: 1rem;
    background-color: red;
    color: white;
    text-align: center;
    width: 90%;
    max-width: 40rem;
}

#app ul {
    margin: 0;
    padding: 0;
    list-style: none;
}

#app li {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    margin: 1rem auto;
    border-radius: 10px;
    padding: 1rem;
    text-align: center;
    width: 90%;
    max-width: 40rem;
}
</style>
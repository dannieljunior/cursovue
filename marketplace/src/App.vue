<template>
  <nav>
    <router-link to="/">Início</router-link> |
    <router-link to="/about">Sobre</router-link> |
    <a href="/catalog">Exibir catálogo</a>
  </nav>
  <!-- aqui será injetado o componente definido na rota -->
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: fuchsia;
}
</style>

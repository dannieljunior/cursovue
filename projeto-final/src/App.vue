<template>

<header>
  <nav>
    <span class="app-titulo">Minha Loja</span>
    <router-link to="/">Início</router-link> | 
    <router-link to="/products">Produtos</router-link> |
    <router-link to="/cart">Meu Carrinho</router-link>
  </nav>
</header>
<main>
  <router-view/>
</main>

</template>

<style scoped>
  .router-link-active{
    color: red;
  }

</style>
<template>
    <div id="dv-lista-produtos">
        <div class="dv-produto" v-for="p in produtos" :key="p.id">
            <img class="img-produto" :src="p.imagem" alt="">
           <span> {{ p.descricao }}</span>
           <span class="preco"> R$ {{ p.preco.toFixed(2).replace(".", ",") }}</span>
        </div>
    </div>
</template>

<script>
    export default{
        name: "listaProdutos",
        props:["produtos", "categoriaSelecionada"],
        data(){
            return {
                categoria: 0
            }
        }
    }
</script>
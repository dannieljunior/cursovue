<template>
    <div id="dv-lista-produtos">
        <div @click="selecionarProduto(p.id)" class="dv-produto" v-for="p in produtos" :key="p.id">
            <img class="img-produto" :src="p.image" alt="">
           <span> {{ p.title }}</span>
           <span class="preco"> U$ {{ p.price.toFixed(2).replace(".", ",") }}</span>
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
        },
        methods:{
            selecionarProduto: function(produtoId){
                this.$emit("aoSelecionarProduto", produtoId);
            }
        }
    }
</script>
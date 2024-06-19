<template>
    <h1>{{ produto.title }}</h1>    
    <div style="display: flex;">
        <div>
            <img class="img-produto" :src="produto.image" alt="">
        </div>
        <div>
            <p>
                {{ produto.description }}
            </p>
        </div>
    </div>
    <button @click="adicionar">Adicionar ao carrinho</button>
</template>

<script>
    export default{
        props: ["produto"],
        methods:{
            adicionar: function() {
                this.$emit("aoAdicionar")
            }
        }
    }
</script>
<template>
    <h1>Meus pedidos</h1>

    <ol>
        <li @click="exibirModal= true" v-for="p in pedidos" :key="p.id">
            {{ p.title }} - U${{ p.price.toFixed(2) }}
        </li>
    </ol>

    <ModalComponent @aoFechar="exibirModal = false" :visible="exibirModal" >
        <div>
            <h2>Finalizar pedido</h2>
            <button @click="exibirModal = false">
                Pagar
            </button>
        </div>
    </ModalComponent>

</template>

<script>
    import carrinho from "@/services/cartService.js"
    import ModalComponent from "@/components/ModalComponent.vue";
    export default{
        components:{ModalComponent},
        data(){
            return {
                pedidos: [],
                exibirModal: false
            }
        },
        created(){
            this.pedidos = carrinho.getCart();
        }
    }
</script>

<style scoped>
    ol li{
        background-color: violet;
        height: 32px;
        padding: 8px;
        margin-bottom: 4px;
        display: flex;
        align-items: center;
    }
</style>
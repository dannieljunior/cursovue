<template>
    <div v-if="visible" @click="fecharModal" id="dv-backdrop"></div>
    <div v-if="visible" id="dv-modal">
        <button @click="fecharModal">
            fechar
        </button>
        <slot></slot>
    </div>
</template>

<script>
    export default{
        props: ["visible"],
        methods:{
            fecharModal: function(){
                this.$emit("aoFechar");
            }
        }
    }
</script>

<style scoped>
    #dv-backdrop{
        background-color: #000;
        opacity: 0.7;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        z-index: 1000;
    }

    #dv-modal{
        background-color: #fff;
        position: absolute;
        top: 60px;
        margin-left: 15%;
        width: 70%;
        height: 50%;
        z-index: 1001;
    }
</style>
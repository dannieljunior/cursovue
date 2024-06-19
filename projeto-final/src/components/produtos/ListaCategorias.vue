<template>
    <div id="dv-categorias">
      <ul v-for="categoria in categorias" :key="categoria">
        <li @click="selecionarCategoria(categoria)">{{categoria}}</li>
      </ul>
    </div>
</template>

<script>

export default{
    name: "listaCategorias",
    props: ["items"],
    methods:{
      selecionarCategoria: function(categoria){
        this.$emit("aoSelecionarCategoria", categoria)
      }
    },
    data(){
      return{
        categorias: []
      }
    },
    created(){
      fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(json=>{
              this.categorias = json;
            })
            .catch(e => console.log(e));
    }


}

</script>
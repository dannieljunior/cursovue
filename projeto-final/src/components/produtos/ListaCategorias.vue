<template>
    <div id="dv-categorias">
      <ul v-for="i in items" :key="i.id">
        <li @click="selecionarCategoria(i.id)">{{i.categoria}}</li>
      </ul>
    </div>
</template>

<script>

export default{
    name: "listaCategorias",
    props: ["items"],
    methods:{
      selecionarCategoria: function(id){
        console.log(id);
        this.$emit("aoSelecionarCategoria", id)
      }
    },
    // data(){
    //   return{
    //     categorias: []
    //   }
    // },
    created:{
      // fetch('https://fakestoreapi.com/products/categories')
      //       .then(res=>res.json())
      //       .then(json=>console.log(json))
    }
}

</script>
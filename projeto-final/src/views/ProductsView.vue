<template>
  <h1>Produtos</h1>
  <div class="dv-produtos">
    <ListaCategorias @aoSelecionarCategoria="teste(id)" :items="categorias"></ListaCategorias>
    <ListaProdutos :categoriaSelecionada="categoriaSelecionada" :produtos="produtos"></ListaProdutos>
  </div>
</template>

<script>
    import ListaCategorias from "../components/produtos/ListaCategorias.vue"
    import ListaProdutos from "../components/produtos/ListaProdutos.vue"

    export default{
        name: "productsView",
        components:{
            ListaCategorias, ListaProdutos
        },
        data(){
            return {
                categoriaSelecionada: 0,
                categorias:[
                    {id: 1, categoria: "Eletrodomésticos"},
                    {id: 2, categoria: "Calçados"},
                ],
                produtos:[
                    {id: 1, descricao: "Geladeira", categoria: 1, imagem: "https://consul.vtexassets.com/arquivos/ids/225203-800-auto?v=637938611258200000&width=800&height=auto&aspect=true", preco: 2999.00},
                    {id: 2, descricao: "Tênis", categoria: 2, imagem: "https://gaston.vtexassets.com/arquivos/ids/444740/Tenis-Adidas-Branco-e-Preto-Grand-Court-Base-20-Feminino.jpg?v=638319486467800000", preco: 399.00},
                ]
            }
        },
        methods:{
            teste: function(id){
                alert(id);
            }
        }
    }
</script>

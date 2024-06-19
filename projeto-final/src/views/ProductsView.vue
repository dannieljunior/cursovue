<template>
  <h1>Produtos</h1>
  <div class="dv-produtos">
    <ListaCategorias @aoSelecionarCategoria="selecionarCategoria"></ListaCategorias>
    <ListaProdutos @aoSelecionarProduto="selecionarProduto" :produtos="produtos"></ListaProdutos>
  </div>


  <modal-component @aoFechar="showModal = false" :visible="showModal">
        <detalhe-produto @aoAdicionar="adicionarAoCarrinho" :produto="produtoSelecionado"></detalhe-produto>
    </modal-component>

</template>

<script>
    import ModalComponent from '@/components/ModalComponent.vue'
    import ListaCategorias from "../components/produtos/ListaCategorias.vue"
    import ListaProdutos from "../components/produtos/ListaProdutos.vue"
    import DetalheProduto from '@/components/produtos/DetalheProduto.vue'

    import carrinho from "@/services/cartService.js"

    export default{
        name: "productsView",
        components:{ListaCategorias, ListaProdutos, ModalComponent, DetalheProduto},
        data(){
            return {
                produtoSelecionado: {},
                produtos:[],
                showModal: false
            }
        },
        methods:{
            selecionarCategoria: function(categoria){
                fetch(`https://fakestoreapi.com/products/category/${categoria}`)
                    .then(res=>res.json())
                    .then(json=> {
                        this.produtos = json;
                    })
            },
            selecionarProduto: function(produtoId){ 
                fetch(`https://fakestoreapi.com/products/${produtoId}`)
                    .then(res=>res.json())
                    .then(result=> {
                        this.produtoSelecionado = result;
                        this.showModal = true;
                    })
                    .catch(e => console.error(e));
            },
            adicionarAoCarrinho: function(){
                carrinho.addToCart(this.produtoSelecionado);
                alert("Produto adicionado ao pedido");
            }
        }
    }
</script>

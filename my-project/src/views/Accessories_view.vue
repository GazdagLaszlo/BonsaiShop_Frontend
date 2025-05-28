<template>
    <div class="mt-6">
        <section class="section">
            <div class="columns is-multiline mt-6 is-tablet">                
                <div class="column is-one-quarter box" v-for="product in accessories" :key="product.id">
                    <router-link :to="product.path">
                        <div class="is-clickable image-container">
                            <figure class="image is-4by3">
                                <img :src="product.image" alt="" class="curved">
                            </figure>
                            <div>
                                <b class="is-size-5">{{product.name}}</b><br><br>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
        </section>
    </div>
</template>
    
  
  
<script>
    export default {
        data() {
            return {
                accessories: [
                    { id: 1, name: "Ültetőedények", image: require('@/images/pots.jpg'), path:"/products/accessories/pots" },
                    { id: 2, name: "Ültetőközegek", image: require('@/images/bonsaisoil.jpg'), path:"/products/accessories/soil" },
                    { id: 3, name: "Tápoldatok", image: require('@/images/nutrient.jpg'), path:"/products/accessories/nutrient" },
                    { id: 4, name: "Drótok", image: require('@/images/wire.jpg'), path:"/products/accessories/wire" },
                    { id: 5, name: "Bonsai ollók", image: require('@/images/scissors.jpg'), path:"/products/accessories/scissors" },
            ]}
        }
    };
</script>
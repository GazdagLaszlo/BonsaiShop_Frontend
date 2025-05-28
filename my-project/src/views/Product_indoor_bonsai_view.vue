<template>    
    <div class="mt-6">            
        <div class="mt-6">
            <hr class="line mb-1">    
            <span class="is-size-6"></span><router-link to="/products"><a class="is-size-6">Termékeink /</a></router-link><span class="has-text-weight-semibold"> Beltéri bonsai fák</span>
            <hr class="line mb-1 mt-2">
        </div>        
        <!----------------------->
        <div class="my-6 columns section">
            <div class="column is-flex is-flex-direction-column is-justify-content-center mb-6 ml-6">
                <p class="is-size-4 mb-3 has-text-weight-bold">Beltéri bonsai fák - Természet a Lakásban</p>
                <p class="has-text-justified">Fedezd fel a beltéri bonsai fák varázsát! Ezek a miniatűr fák nemcsak esztétikai élményt nyújtanak, hanem harmóniát és nyugalmat is visznek otthonodba. Gondos nevelésük révén igazi műalkotássá válnak, miközben te is részese lehetsz a természet időtlen szépségének. Válogass különböző fajták közül, és találd meg az otthonodba illő tökéletes bonsait!</p>
            </div>

            <div class="column is-one-third">
                <figure class="image i">
                    <img src="../images/bonsai_ropepot_e650529f-e704-40c4-86ba-e2cf65e20413.jpg" class="curved">
                </figure>
            </div>
        </div>
        <hr class="line mb-1">
        <p class="is-size-6 mb-4">Bővebb tájékoztatásért válasszon az alábbi kategóriák közül!</p>
        <!----------------------->
        <div class="columns is-multiline mt-6 is-tablet is-flex-wrap-wrap">
            <div class="column is-one-quarter service_cards" v-for="product in products" :key="product.id">
                <div class="">
                    <p class="has-text-weight-semibold">{{ product.name }}</p>  
                    <hr class="line mb-3 mt-1">
                </div>
                <div class="card-image">
                    <figure class="image is-5by4">                    
                        <img :src="product.image">
                    </figure>
                </div>
                <div class="mt-5 is-flex is-flex-direction-column is-align-items-center">
                    <p class="mb-3 has-text-weight-semibold">{{ product.price }} Ft</p>
                    <button @click="addToCart(product)" class="button_design button button_design is-normal is-fullwidth">Kosárba</button>     
                </div>
            </div>
        </div>        

    </div>
</template>

<script setup>   
    //script setup biztosítja az automatikus exportálást, hogy közvetlenül használhatóak legyen ezen az oldalon, egy template-ben
    //Az arrow function-ok nem lesznek automatikusan exportálva.
    import { ref, onMounted } from 'vue';
    import cart_functions from '@/Utils/Cart_Utils.js';

    // Kosárkezelő metódusok közvetlenül elérhetők
    const { addToCart } = cart_functions;

    const products = ref([]);        

    async function getData(){
        try {
            let response = await fetch('http://localhost/Gazdag_Laszlo/BonsaiShop/my-project/src/php/index.php');
            products.value = await response.json();
        } catch (error) {
            console.log(error);
        }
    }

    // onMounted - Komponens betöltéskor
    onMounted(getData);
</script>
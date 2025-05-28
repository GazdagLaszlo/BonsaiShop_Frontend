<template>        
    <div class="mt-6">
        <p class="mb-6 is-size-4 has-text-weight-semibold">Kosár tartalma</p>
        <div class="is-flex is-flex-direction-row">
            <div class="column box is-three-fifths p-6 mb-0 mr-4">
                <ul v-if="cart.length > 0">
                    <li v-for="item in cart" :key="item.id">
                        <div class="columns cart_item mb-5 is-flex is-flex-direction-row">
                            <div class="column is-flex is-justify-content-center is-one-fifth">
                                <figure class="image is-128x128 is-flex is-align-items-center">
                                    <img :src="item.image">
                                </figure>
                            </div>
                            <div class="column is-four-fifths">
                                <div class="is-flex is-flex-direction-row is-justify-content-space-between">
                                    <p class="has-text-weight-bold">{{item.name}}</p>
                                    <figure class="image is-32x32" @click="removeFromCart(item.id)">
                                        <img src="../images/trash_bin.png" alt="">
                                    </figure>
                                </div>
                                <hr class="line">
                                <div class="is-flex is-flex-direction-row is-align-items-space-between">
                                    <div class="column is-flex is-flex-direction-row">
                                        <button @click="decreaseItemQuantity(item.id)" class="button quantity_setter_button is-size-7 has-text-weight-bold has-text-white has-background-black">
                                            -
                                        </button>
                                        <p class="mx-4">{{item.quantity}}</p>
                                        <button @click="increaseItemQuantity(item.id)" class="button quantity_setter_button is-size-7 has-text-weight-bold has-text-white has-background-black">
                                            +
                                        </button>
                                    </div>
                                    <div class="column is-flex is-justify-content-end">
                                        <p class="has-text-weight-semibold">{{ moneyFormat(item.price*item.quantity) }} Ft</p>
                                    </div>
                                </div>
                            </div>
                        </div>                                       
                    </li>
                </ul>            
                <p v-else>A kosár üres.</p>
            </div>
            <div class="column box is-two-fifths p-6" style="height: fit-content;">
                <p class="has-text-weight-bold is-size-5">Rendelés összegzése</p>
                <hr class="line">
                <div class="is-flex is-flex-direction-row is-justify-content-space-between">
                    <p>Részösszeg</p>
                    <p>{{ moneyFormat(totalPrice) }} Ft</p>
                </div>
                <div class="is-flex is-flex-direction-row is-justify-content-space-between">
                    <p>Szállítás</p>
                    <p>0 Ft</p>
                </div>
                <hr class="line">
                <div class="is-flex is-flex-direction-row is-justify-content-space-between">
                    <p class="has-text-weight-bold is-size-5">Végösszeg</p>
                    <!--Mivel a totalPrice computed változó, kellene a .value az értéke lekéréséhez, de a Vue 3 automatikusan kinyeri a template-ben-->
                    <p class="has-text-weight-bold is-size-5">{{ moneyFormat(totalPrice) }} Ft</p>
                </div>
                <button class="button is-black mt-6 is-fullwidth" v-if="cart.length > 0" @click="sendCartToServer">
                    Tovább a pénztárhoz
                </button>
            </div>            
        </div>
    </div>
    
</template>

<script setup>  

    //import { computed } from 'vue';
    import cart_functions from '@/Utils/Cart_Utils.js';
    import formatting from '@/Utils/main_Utils.js';

    const { moneyFormat } = formatting;
    const { 
        cart,
        totalPrice,
        increaseItemQuantity,
        decreaseItemQuantity,
        removeFromCart,        
    } = cart_functions;


    console.log("cookie: " + document.cookie);

    /*    
    async function saveCart(){
        try {
            const response = await fetch('/order_processing.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ cart: cart.value }),
            });
            const result = await response.json();
            console.log('Rendelés eredménye:', result);
        } catch (error) {
            console.error('Hiba a rendelés feldolgozása során:', error);
        }
    }
        */
</script>
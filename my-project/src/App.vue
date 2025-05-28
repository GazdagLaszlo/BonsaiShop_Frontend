    <template>
        <div id="app" class="container is-fluid">
            <!-- Navigációs menü -->
            <nav class="navbar mt-4">
            <div id="brand">
                <a href="/">
                <p class="is-size-4 has-text-black has-text-weight-bold">Bonsai Shop</p>
                <p>Minőségi bonsai fák és kellékek</p>
                </a>

                <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbar_to_expand">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                </a>                
            </div>

            <div class="navbar-menu" id="navbar_to_expand">
                <div class="navbar-end">
                <router-link to="/" class="navbar-item">Kezdőlap</router-link>            

                <div class="navbar-item has-dropdown is-hoverable">           
                    <router-link to="/products" class="navbar-item">Termékeink</router-link> 
                    <div class="navbar-dropdown">
                        <router-link to="/products/indoor_bonsai"><a class="navbar-item">Beltéri bonsai fák</a></router-link>
                        <hr class="navbar-divider">
                        <a class="navbar-item">Ültetőedények</a>
                        <a class="navbar-item">Ültetőközegek</a>
                        <a class="navbar-item">Tápoldatok</a>
                        <a class="navbar-item">Drótok</a>
                        <a class="navbar-item">Bonsai ollók</a>
                    </div>
                </div>

                <router-link to="/care" class="navbar-item">Gondozás</router-link>
                <router-link to="/about_us" class="navbar-item">Rólunk</router-link>
                <router-link to="/contact" class="navbar-item border_right">Kapcsolat</router-link>
                <router-link to="/cart" class="navbar-item">
                    <img src="../src/images/cart_icon.jpg" class="cart_icon">
                    <p class="cart_quantity" :style="{ visibility: totalCartQuantity.value > 0 ? 'visible' : 'hidden' }">{{ totalCartQuantity }}</p>
                </router-link>
                </div>
            </div>
            </nav>
        
            <!-- Az aktuális oldal tartalma -->
            <main>                
            <router-view></router-view>
            </main>


            <footer class="mt-6 pb-5 px-0">
                <strong class="is-size-5">Bonsai Shop</strong>
                <hr class="has-background-black line mt-2">
                <div class="is-flex is-flex-direction-row columns">
                    <div class="column is-half">
                        <p>Gazdag László</p>
                        <p>Zirc, Hunfalvy Pál utca 7.</p>
                        <p>Adószám: 90634387-1-39</p>
                    </div>

                    <div class="column is-half">
                        <div class="is-flex is-flex-direction-row mb-1">
                            <figure class="image is-24x24">
                                <img src="">
                            </figure>
                            <p class="ml-3">+36 30 992 5358</p>
                        </div>
                        <div class="is-flex is-flex-direction-row">
                            <figure class="image is-24x24">
                                <img src="" class="image">
                            </figure>
                            <p class="ml-3">glaci0206@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div class="mt-5">
                    <strong class="column has-text-centered is-size-6">Minden jog fenntartva © 2025 Bonsai Shop</strong>
                </div>
            </footer>
            
        </div>
    </template>

    <script setup>
        import { computed, onMounted } from 'vue';
        import cart_functions from '@/Utils/Cart_Utils.js';
        
        const totalCartQuantity = computed(() => cart_functions.totalQuantity);

        onMounted(() => {
            cart_functions.loadCart();  // Betöltés sütiből
        });
    </script>
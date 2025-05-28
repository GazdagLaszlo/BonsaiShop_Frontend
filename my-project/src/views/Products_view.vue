<template>
    <div class="mt-6">
        <section class="section">
            <div class="columns">
                
                <div class="column is-half">
                    <router-link to="/products/indoor_bonsai">
                        <div class="is-clickable image-container" @mouseover="hovered = 1" @mouseleave="hovered = null">
                            <figure class="image is-4by2">
                                <img src="../images/indoor_bonsai.jpg" alt="" class="curved">
                            </figure>
                            <div class="hover-text" :class="{ 'visible': hovered === 1 }">
                                <b class="is-size-5">Beltéri bonsai fák</b><br><br>
                                <p>Hozd be a természet szépségét otthonodba bonsai fáinkkal! Ezek a kompakt, elegáns növények tökéletesen illeszkednek bármely szoba hangulatához, és a megfelelő gondozás mellett hosszú évekig díszítik környezetedet.</p>                            
                            </div>
                        </div>
                    </router-link>
                </div>

                <div class="column is-half">
                    <router-link to="/products/accessories">
                        <div class="is-clickable image-container" @mouseover="hovered = 2" @mouseleave="hovered = null">
                            <figure class="image is-4by2">
                                <img src="../images/accessories.jpg" alt="" class="curved">
                            </figure>
                            <div class="hover-text" :class="{ 'visible': hovered === 2 }">
                                <b class="is-size-5">Kellékek</b><br><br>
                                <p>Tedd még szebbé és könnyebbé a bonsai gondozást prémium kellékeinkkel! Minőségi eszközeink segítenek a fák formázásában, öntözésében és ápolásában, így a bonsai művészete könnyedén elsajátítható és élvezhető.</p>
                            </div>
                        </div>
                    </router-link>
                </div>

            </div>
        </section>
    </div>
    <router-view></router-view>
</template>
    
<script>
export default {
    data() {
        return {
            hovered: null,
            product_type_1: { id: 1, name: "Beltéri Bonsai fák", image: '../images/ficus.jpg', description: "Beltéri bonsai fák díszítik otthonát." },
            product_type_2: { id: 2, name: "Jade Bonsai", image: require('@/images/jade.jpg'), description: "Különleges jade bonsai." },
            product_type_3: { id: 3, name: "Kínai szil Bonsai", image: require('@/images/szil.jpg'), description: "Szép és könnyen gondozható kínai szil bonsai." }
        };
    }
};
</script>

<style>
    .image-container {        
        position: relative;
        display: block;
        overflow: hidden;
    }

    .image-container img {
        width: 100%;
        display: block;
    }

    .hover-text {
        position: absolute;
        bottom: -22%;
        left: 0;
        width: 100%;
        background: rgba(0, 0, 0, 0.6);
        color: white;
        text-align: center;
        padding: 10px;
        font-size: 16px;
        transition: bottom 0.3s ease-in-out;
    }

    .hover-text.visible {
        bottom: 0;
    }    
</style>

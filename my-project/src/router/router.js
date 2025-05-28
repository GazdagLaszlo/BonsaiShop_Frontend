    //Ez az a fájl, ahol beállítod a Vue Routert és regisztrálod az aloldalakat.

    import { createRouter, createWebHistory } from 'vue-router';
    import Home from '../views/Home_view.vue';
    import Products from '../views/Products_view.vue';
    import Accessories from '../views/Accessories_view.vue';

    import Indoor_Bonsai from '../views/Product_indoor_bonsai_view.vue';
    import Pots from '../views/Product_pots_view.vue';
    import Soil from '../views/Product_soil_view.vue';
    import Nutrient from '../views/Product_nutrient_view.vue';
    import Wire from '../views/Product_wire_view.vue';
    import Scissors from '../views/Product_scissors_view.vue';

    import Care from '../views/Care_view.vue';
    import About_Us from '../views/About_us_view.vue';
    import Contact from '../views/Contact_view.vue';

    import Cart from '../views/Cart_view.vue';


    const routes = [
        { path: '/', name: 'Home', component: Home },    
        { path: '/products', name: 'Products', component: Products , },
        { path: '/products/indoor_bonsai', name: 'Indoor_Bonsai', component: Indoor_Bonsai },
        { path: '/products/accessories', name: 'Accessories', component: Accessories, },

        { path: '/products/accessories/pots', name: 'Pots', component: Pots },
        { path: '/products/accessories/soil', name: 'Soil', component: Soil },
        { path: '/products/accessories/nutrient', name: 'Nutrient', component: Nutrient },
        { path: '/products/accessories/wire', name: 'Wire', component: Wire },
        { path: '/products/accessories/scissors', name: 'Scissors', component: Scissors },

        { path: '/care', name: 'Care', component: Care },
        { path: '/about_us', name: 'About_Us', component: About_Us },
        { path: '/contact', name: 'Contact', component: Contact },
        { path: '/cart', name: 'Cart', component: Cart }
    ];

    //Ehhez majd szerver konfiguráció szükséges, hogy a felhasználói frissítés egy aloldalon ne okozzon gondot(404 hiba)
    //Megoldás: Át kell irányítani minden kérést a index.html-re (pl. Apache, Nginx vagy Node.js beállításokkal).
    const router = createRouter({
        history: createWebHistory(),
        routes
    });

    export default router;
//watch: figyeli ha változik a kosár tartalma és aktiválódik
import { ref, computed, watch } from 'vue';

// Kosár állapota reaktívan
//ref -> Reaktívvá teszi a cart-ot. Ha egy reaktív változó értéke módosul akkor a vue automatikusan frissíti a DOM-ot.

const cart = ref([]);

// Összes darabszám
const totalQuantity = computed(() =>
    cart.value.reduce((total, item) => total + item.quantity, 0)
);

//Computed változók a Vue-ban reaktív változók, amik nem tárolják közvetlenük az értéküket. 
//Belső getteren keresztül kapják meg, ezért ha el akarjuk érni, a .value értékát kell kérni.
const totalPrice = computed(() =>
    cart.value.reduce((total, item) => total + parseInt(item.price) * item.quantity, 0)
);

// Termék hozzáadása a kosárhoz
function addToCart(product){
    const existingItem = cart.value.find((item) => item.id === product.id);
    if (existingItem) {
        existingItem.quantity += 1;

    } else {
        cart.value.push({ ...product, quantity: 1 });
    }
    saveCart();
}

function increaseItemQuantity(productId){
    const item = cart.value.find((item) => item.id === productId);
    item.quantity++;
    saveCart();
}

function decreaseItemQuantity(productId){
    const item = cart.value.find((item) => item.id === productId);
    if(item.quantity >= 1){
        item.quantity--;
        if(item.quantity == 0){
            console.log("0 van benne");
            removeFromCart(item.id);
        }
    }    
    saveCart();
}

// Termék eltávolítása a kosárból
function removeFromCart(productId){
    cart.value = cart.value.filter((item) => item.id !== productId);
    saveCart();
}

// Kosár mentése sütibe
function saveCart(){
    document.cookie = `cart=${JSON.stringify(cart.value)}; path=/; max-age=${7 * 24 * 60 * 60}`;
}

// Kosár betöltése sütiből
function loadCart(){
    const cookie = document.cookie
        .split('; ')
        .find((row) => row.startsWith('cart='));
    cart.value = cookie ? JSON.parse(cookie.split('=')[1]) : [];
}

// Automatikus mentés, ha változik a kosár
watch(cart, saveCart, { deep: true });

// Az oldal betöltésekor beolvassuk a kosarat
loadCart();

export default {
    cart,
    totalQuantity,
    totalPrice,
    addToCart,
    removeFromCart,
    saveCart,
    loadCart,
    increaseItemQuantity,
    decreaseItemQuantity,
};

import Vue from 'vue'
import Vuex from 'vuex';
import axios from "axios";
//import VueAxios from "vue-axios";

//import imdb from './'

Vue.use(Vuex);
Vue.use( // VueAxios,
    axios)



// Create a new store instance.
export default new Vuex.Store({
    state () {
        return {
            itemsCollection: [
                {
                    name: 'Article1',
                    price: 50,
                    id: 1,

                },
                {
                    name: 'Article2',
                    price: 15,
                    id: 2
                },
                {
                    name: 'Article3',
                    price: 70,
                    id:3
                },
            ],
            cart: [],
            cartTotalAmount: 0,
            cartDiscountedAmount: null,
            name: 'Toto',
            currency: '€',
            appName: 'Ma super APP',
            isDarkMode: 'false',
            users: [],
            products: [],
            filteredProducts: [],
            filteredCategories: []
        }
    },
    getters: {
        test (state) {
            return state
        },
        getAppName(state) {
            return state.appName
        },
        getTestName(state){
            return state.test2
        },
        getAppNameLength: state => state.appName.length,
        getItemsCollection(state) {
            return state.itemsCollection
        },
        getCurrency(state) {
            console.log(state)
            return state.currency
        },
        getCart(state) {
            return state.cart
        },
        getCartTotalAmount(state){
            return state.cartTotalAmount
        },
        getCartProductNumber(state){
          return state.cart.reduce((a, {qtyCart}) => a + qtyCart, 0)
        },
        getCartDiscountedAmount(state){
            return state.cartDiscountedAmount
        },
        getIsDarkMode(state){
            return state.isDarkMode
        },
        getUsers(state){
            return state.users
        },
        getProducts(state){
            return state.products
        },
        getFilteredProducts(state){
            return state.filteredProducts
        },
        getProductsCategories(state){
            let categories = []
            state.products.forEach(product => {
                if(!categories.includes(product.category)){
                    categories.push(product.category)
                }
            })
            console.log('unique categs', categories)
            return categories
        },
        getFilteredCategories(state){
            return state.filteredCategories
        }

    },
    mutations: { // edite l'etat
        setAppName (state, val) {
            state.appName = val
        },
        setCurrency(state, val){
            state.currency = val;
        },
        addToCart(state, item){
            if(state.cart.some(cartItem => cartItem.id === item.id)){ //tester d'edit le cart avec indexofn
                state.cart = state.cart.filter(cartItem => cartItem.id !== item.id)
                 console.log('filtered state.cart', state.cart)
                item = {
                    ...item,
                    qtyCart: item.qtyCart+=1
                }
                state.cart.push(item)
            } else {
                item.qtyCart = 1
                state.cart.push(item)
            }
            state.cartTotalAmount = state.cart.reduce((a, {price, qtyCart}) => a + (price * qtyCart), 0)
            console.log(state.cart)
            console.log(state.cartTotalAmount)
        },
         setCartDiscountedAmount(state, discount){

            switch(discount.type){
                case 'PERCENT' :
                    state.cartDiscountedAmount = state.cartTotalAmount * discount.amount;
                    break;
                case 'FIX_AMOUNT' :
                    state.cartDiscountedAmount = state.cartTotalAmount - discount.amount;
                    break;
                default : console.log('unknown discount type')
            }
         },
        toggleDarkMode(state){
            state.isDarkMode = !state.isDarkMode
        },
        SAVE_USERS(state, users){
            state.users = users
        },
        ADD_NEW_USER(state, newUser){
            state.users.push(newUser)
        },
        UPDATE_USER(state, updatedUser){
            console.log('UPDATE_USER')
            // state.users[updatedUser.id-1] = updatedUser
            let filteredArray = state.users.filter(user => user.id !== updatedUser.id)
            console.log('filteredArray', filteredArray)

            let newArray = [...filteredArray, updatedUser]
            console.log('newArray', newArray)

            let sorted = newArray.sort((a,b)=>a.id - b.id)
            console.log('sorted', sorted)

            state.users = sorted
            console.log( 'users', state.users)

        },
        DELETE_USER(state, deletedUserId){
            console.log('delete')
            state.users = state.users.filter(user => user.id !== deletedUserId)
        },
        GET_PRODUCTS(state, fetchedProducts){
            state.products = fetchedProducts
            state.filteredProducts = fetchedProducts
            console.log('filteredProducts', state.filteredProducts)
        },
        DISPLAY_SEARCHED_PRODUCTS(state, searchedProducts){
            state.filteredProducts = searchedProducts
        },
        SORT_BY_PRICE_ASC(state){
            console.log('sort', state.filteredProducts)
            state.filteredProducts = state.filteredProducts.sort((a,b)=>a.price - b.price)
        },
        SORT_BY_PRICE_DESC(state){
            console.log('sort desc', state.filteredProducts)
            state.filteredProducts = state.filteredProducts.sort((a,b)=>b.price - a.price)
        },
        FILTER_BY_CATEG(state, category){
            console.log('category', category)
            if(state.filteredCategories.includes(category)){
                return
            }
            state.filteredCategories =  [...state.filteredCategories, category]
            state.filteredProducts = state.products.filter(product => state.filteredCategories.includes(product.category))
        },
        REMOVE_CATEG_FILTER(state, removedCategory){

            if(state.filteredCategories.indexOf(removedCategory) > -1){
                state.filteredCategories.splice(state.filteredCategories.indexOf(removedCategory),1)
            }

            // si il reste au moins 1 filtre
            if(state.filteredCategories.length){
                state.filteredProducts = state.products.filter(product => state.filteredCategories.includes(product.category))
            } else {
                state.filteredProducts = state.products
            }
            console.log('after REMOVE_CATEG_FILTER', state.filteredCategories)
        },
        ADD_PRODUCT(state, newProduct){
            console.log(newProduct)
            this.state.filteredProducts.push(newProduct)
            console.log(this.state.filteredProducts)

        }
    },
    actions: { // edite l'etat de façon plus complexe ex asynchrone
        async loadUsers({commit}){
            try {
                const result = await axios.get('https://jsonplaceholder.typicode.com/users')
                commit('SAVE_USERS', result.data)
            } catch (error) {
                throw new Error(`API ${error}`)
            }
        },

        async loadProducts({ commit }){
            try {
                const result = await axios.get('https://fakestoreapi.com/products')
                commit('GET_PRODUCTS', result.data)
            } catch(error){
                console.log(error)
            }
        }
    }
})










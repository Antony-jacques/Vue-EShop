import Vue from 'vue'
import VueRouter from 'vue-router'
//import HomePage from "@/pages/home"
// import AboutPage from "@/pages/About"
// import HelloPage from "@/pages/HelloPage"
// import PaginationTest from "@/pages/Pagination.vue"
// import UsersPage from "@/pages/UsersPage"
// import EShopPage from "@/pages/EShopPage"
// import ProductPage from '@/pages/ProductPage.vue'
// import ShopPage from "@/modules/shop/pages/ShopPage"
// import AddProductPage from '@/pages/AddProductPage.vue'
// import cartPage from '@/pages/CartPage.vue'
import imdbRoutes from '@/modules/imdb/router/routes'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'HomePage',
            component: () => import("@/pages/home")  
        },
        {
            path: '/about',
            name: 'AboutPage',
            component: () => import("@/pages/About")  
        },
        {
            path: '/hello/:firstname',
            name: 'HelloPage',
            component: () => import("@/pages/HelloPage")
        },
        {
            path: '/shop',
            name: 'ShopPage',
            component: () => import("@/modules/shop/pages/ShopPage")
        },
        {
            path: '/users',
            name: 'UsersPage',
            component: () => import("@/pages/UsersPage")
        },
        {
            path: '/eshop/home',
            name: 'EShopHome',
            component: ()=> import("@/pages/EShopPage")
        },
        {
            path: '/eshop/single-product/:id',
            name: 'singleProduct',
            component: () => import("@/pages/ProductPage.vue")
        },
        {
            path: '/add-product',
            name: 'AddProductPage',
            component: () => import("@/pages/AddProductPage.vue")
        },
        {
            path: '/cart',
            name: 'cartPage',
            component: ()=> import("@/pages/CartPage.vue")
        },
        ...imdbRoutes
    ]
})

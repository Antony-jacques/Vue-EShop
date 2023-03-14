import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from "@/pages/home"
import AboutPage from "@/pages/About"
import HelloPage from "@/pages/HelloPage"
import PaginationTest from "@/pages/Pagination.vue"
import UsersPage from "@/pages/UsersPage"
import EShopPage from "@/pages/EShopPage"
import ProductPage from '@/pages/ProductPage.vue'
import ShopPage from "@/modules/shop/pages/ShopPage"
import AddProductPage from '@/pages/AddProductPage.vue'
import cartPage from '@/pages/CartPage.vue'
import imdbRoutes from '@/modules/imdb/router/routes'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'HomePage',
            component: HomePage
        },
        {
            path: '/about',
            name: 'AboutPage',
            component: AboutPage
        },
        {
            path: '/hello/:firstname',
            name: 'HelloPage',
            component: HelloPage
        },
        {
            path: '/shop',
            name: 'ShopPage',
            component: ShopPage
        },
        {
            path: '/pagination',
            name: "PaginationTest",
            component: PaginationTest
        },
        {
            path: '/users',
            name: 'UsersPage',
            component: UsersPage
        },
        {
            path: '/eshop/home',
            name: 'EShopHome',
            component: EShopPage
        },
        {
            path: '/eshop/home',
            name: 'EShopHome',
            component: EShopPage
        },
        {
            path: '/eshop/single-product/:id',
            name: 'singleProduct',
            component: ProductPage
        },
        {
            path: '/add-product',
            name: 'AddProductPage',
            component: AddProductPage
        },
        {
            path: '/cart',
            name: 'cartPage',
            component: cartPage
        },
        ...imdbRoutes
    ]
})

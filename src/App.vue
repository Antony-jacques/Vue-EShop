<template>
  <div id="app" :class="getDarkModeClass">
    <nav>
      <div class="left-menu">
        <router-link :to="{name:'HomePage'}">HomePage</router-link> |
        <router-link to="/about">AboutPage</router-link> |
        <router-link to="/users">Users</router-link> |
        <router-link to="/eshop/home">Shop</router-link> |
        <router-link to="/add-product">Add Product</router-link> |
        <router-link to="/cart">My cart</router-link> |
      </div>
      <div class="right-menu">
        <menuCart/>
      </div>
      <DarkModeSwitcher/>

    </nav>


<!--    <img alt="Vue logo" src="./assets/logo.png">-->
    <router-view/>

  </div>
</template>

<script>/* eslint-disable */
import HelloWorld from './components/HelloWorld.vue'
import { mapGetters } from "vuex";
import DarkModeSwitcher from './components/darkModeSwitcher.vue'
import menuCart from './components/menuCart.vue'

export default {
  name: 'App',
  components: {
    HelloWorld, DarkModeSwitcher, menuCart,
  },
  computed : {
    ...mapGetters({
      appName: 'getAppName',
      isDarkMode: 'getIsDarkMode'
    }),
    getDarkModeClass(){
      return this.isDarkMode ? 'dark-mode' : ''
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 60px;
  //background: red;
}

.dark-mode {
  background: #2c3e50;
  margin: 0;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}
.dark-mode * {
  background: #2c3e50;
  color: #fff;
}

nav {
  display: flex;
  justify-content: center;
}

.left-menu {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.left-menu a {
  text-decoration: none;
}

div.message,
.tocart-container div.message {
  padding: 1rem;
  display: inline-block;
  border: solid 2px ;
}

div.success-message,
.tocart-container div.success-message {
  color: green;
  background: lightcyan;
}

div.error-message,
.tocart-container div.error-message{
  color: red;
  background: lightpink;
  padding: 1rem;
  border: solid 2px red;
  display: inline-block;
}

.submit-btn,
.tocart-container button.submit-btn
{
  background-image: linear-gradient(to right, #89CAFF, #6589FF);
  border: none;
  padding: 14px;
  border-radius: 3px;
  display: inline-block;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  box-shadow: 0 5px 20px #89caff94;
  transition: box-shadow .3s ease-in-out;
  min-width: 100px;
}

.submit-btn:hover,
.tocart-container button.submit-btn:hover
{
  box-shadow: none;
}
</style>

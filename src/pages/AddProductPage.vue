<template>
  <div class="wrapper">
    <div>success message</div>
    <div class="tocart-container">
      <div class="container-image">
        <img
            @error="checkImage"
            :src="getProductImage"
            alt="image">
      </div>

      <div class="container-text">
        <h2>Add a product</h2>

        <form @submit="addNewProduct">
          <label for="product-title"> Title</label>
          <input required="true" v-model="newProductTitle" type="text" name="product-title" placeholder="Title">

          <label for="product-category"> Category</label>
          <select v-model="newProductCategory" name="product-category" id="product-category">
            <option value="">Please choose a category </option>
            <option v-for="(category, index) in getProductsCategories" :key="index" :value="category">{{ category }}</option>

          </select>

          <label for="product-image"> Image</label>
          <input v-model="newProductImageUrl" type="text" name="product-category" placeholder="Image URL">

          <label for="product-description"> Description</label>
          <textarea rows="4" cols="50" v-model="newProductDescription" type="textarea" name="product-description" placeholder="Product Description"></textarea>
<!--          <div>number of chars: {{ newProductDescription.length }}</div>-->
<!--          <div>bool: {{ getIsLongText }}</div>-->
          <div v-if="!getIsLongText" >Plus que {{ getCharLeftNumber }} char</div>
          <div v-if="getIsLongText" class="message error-message">Le texte est trop long</div>

          <label for="product-price">Price</label>
          <input required="true" v-model="newProductPrice" type="number" name="product-description" placeholder="Product Price">
          <button class="submit-btn" type="submit">Add Product</button>
        </form>
      </div>
    </div>

  </div>

</template>

<script>
import {mapGetters, mapMutations} from "vuex";
import {highestIdMixin} from "@/mixins/highestIdMixin";

export default {
  data(){
    return {
      name: 'form',
      newProductTitle: '',
      newProductCategory: '',
      newProductImageUrl: '',
      newProductDescription: '',
      newProductPrice: '',
      isImageBroken: false,
      textMaxLength: 10,

    }
  },
  mixins: [ highestIdMixin ],
  computed: {
    ...mapGetters({
      getProductsCategories: 'getProductsCategories',
      getFilteredProducts: 'getFilteredProducts'
    }),
    getProductImage: function(){
      return (this.newProductImageUrl && !this.isImageBroken) ? this.newProductImageUrl : 'https://images.unsplash.com/photo-1534670007418-fbb7f6cf32c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
    },
    getHighestId: function(){
      return highestIdMixin.computed.getId(this.getFilteredProducts)
    },
    getIsLongText: function(){
      return this.newProductDescription.length > this.textMaxLength
    },
    getCharLeftNumber: function(){
      return this.textMaxLength - this.newProductDescription.length
    }

  },
  methods: {
    ...mapMutations({
      addProduct: 'ADD_PRODUCT'
    }),
    addNewProduct: function(e){
      e.preventDefault()
      let previousItemNumber = this.getFilteredProducts.length
      console.log('this.getHighestId()', this.getHighestId)
      let newProduct = {
        category: this.newProductCategory,
        description: this.newProductDescription,
        image: this.getProductImage,
        price: this.newProductPrice,
        title: this.newProductTitle,
        id: this.getHighestId+1
      }

      this.addProduct(newProduct)
      let nextItemNumber = this.getFilteredProducts.length

      if(nextItemNumber > previousItemNumber){
        alert('success')
      }
    },

    checkImage: function(){
      this.isImageBroken = true
    },

    checkDescriptionLength: function(){
      console.log('length', this.newProductDescription.length)
    }
  },
  // watch: {
  //   getIsLongText:function() {
  //     alert('fired')
  //   }
  // },
  mounted(){
    console.log('azerty', this.getFilteredProducts)
  }
}
</script>

<style scoped>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  background-color: #EEF0F7;
  display: grid;
  place-items: center;
  min-height: 100vh;
  overflow: hidden;
}

  .tocart-container {
    background-color: white;
    width: 600px;
    //height: 450px;
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr;
    place-items: center;
    line-height: 1.5;
    box-shadow: 0 20px 30px rgba(0, 0, 0, 0.185);
    margin: 120px auto;
  }

  .tocart-container * {
    background: white;
    color: #656880
  }

  .message {
    background: unset;
    color: unset;
  }

  .tocart-container::after {
    content: '';
    position: absolute;
    background-image: linear-gradient(to bottom right, #FF9EC4, #FFD07E);
    width: 100%;
    height: 700px;
    border-radius: 50%;
    z-index: -1;
  }

  .container-text {
    padding: 10px 40px 10px 10px;
    padding: 40px;
  }
  .container-image {
    border: solid 1px;
    line-height: 0;
  }

  .tocart-container,
  .container-text {
    border-radius: 10px;
  }

  .tocart-container img {
    width: 250px;
    height: 400px;
    object-fit: cover;
    object-position: center;
    /*z-index: 1;*/
  }

img {
  width: 250px;
  height: 400px;
  object-fit: cover;
  object-position: center;
}


h2 {
  font-size: 1.2rem;
  color: #1A2250;
}

p {
  font-size: 14px;
  color: #3B4169;
  margin: 10px 0;
}

input,
button,
textarea {
  width: 100%;
  border: none;
  padding: 14px;
  border-radius: 3px;
}

input,
select,
textarea {
  border: 2px solid #DADDEC;
  margin: 5px 0 10px;
  font-size: 1rem;
  color: #656880;
  max-width: 100%;
}

input::placeholder,textarea::placeholder {
  color: #D3CECE;
}



span {
  display: block;
  text-align: center;
  margin: 20px 0 0;
  color: #BABDCB;
  font-size: 12px;
}

select {
  display: block;
  width: 100%;
}

label {
  display: block;
  text-align: left;
}


</style>

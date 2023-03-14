<template>
  <tr >
    <td >
      <span>{{ cartProduct.title }}</span>
    </td>

    <td >
      <span>{{ cartProduct.price }}</span>
    </td>

    <td >
      <span >{{ cartProduct.qtyCart }}</span>
    </td>

    <td >
      <span >{{ getSubtotal }}</span>
    </td>

  </tr>

</template>

<script>
  export default {
    data(){
      return {
        data: ''
      }
    },
    props: {
      cartProduct: Object
    },

    computed:{
      getSubtotal: function(){
        return this.cartProduct.price * this.cartProduct.qtyCart
      }
    }
  }

</script>

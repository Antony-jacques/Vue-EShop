<template>
  <div class="discount-container">
    <div class="discount-admin"></div>
    <div class="discount-user"></div>
    <form @submit="checkDisountCode">
      <div><label for=""></label>Add a discount code</div>
      <div><input placeholder="Code" type="text" v-model="discountInput"></div>
      <div>{{discountInput}}</div>
      <div class="error-container">
        <div v-if="hasError" class="message error-message" > {{ getErrorMessage }} </div>
      </div>
      <button class="submit-btn" type="submit">Add</button>
    </form>
    <div class="message success-message" v-if="validDiscount">Discount code {{ validDiscount.code }} : {{ validDiscount.title }} successfully applied !</div>
  </div>
</template>

<script>
  import discountCodesData from '@/data/discountCodesData'
  import { mapMutations } from 'vuex'

  export default {

    data(){
      return {
        discountInput: '',
        hasError: false,
        errorMessage: '',
        validDiscount: null
      }
    },
    computed: {
      getErrorMessage: function(){
        return this.errorMessage
      }
    },

    methods: {
      ...mapMutations({
        setCartDiscountedAmount: 'setCartDiscountedAmount'
      }),
      checkDisountCode: function(e){
        e.preventDefault()
        //console.log(discountCodesData)
        if(!this.discountInput){
          //console.log('pas de code tapé')
          this.hasError = true
          this.errorMessage = 'Please enter a discount code '
          return
        }
        //console.log('continue')
        this.hasError = false
        let discount = discountCodesData.codes.find( codeObject => codeObject.code === this.discountInput )
        this.validDiscount = discount && discount
        console.log('validCode', discount)
        if(discount){
          alert('discount = true')
          console.log(discount)
          this.setCartDiscountedAmount(discount)
          this.hasError = false;
          this.errorMessage= ""
        } else {
          this.hasError = true;
          this.errorMessage = "Wrong discount code"

          console.log('this.hasError', this.hasError)
          console.log('this.errorMessage', this.errorMessage)
        }
      },
    },
    mounted(){
      console.log('code', discountCodesData)
    },
  }

</script>

<style>
  .discount-container {
    margin: 50px auto
  }
</style>

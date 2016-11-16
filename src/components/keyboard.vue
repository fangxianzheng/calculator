<template>
  <div class="keyboard" v-on:click="clickButton(num)">
    {{num}}
  </div>
</template>

<script>

  import {mapState, mapActions} from 'vuex'

  export default {
    data() {
      return {
        formula: ''
      }
    },
    computed: {
      ...mapState({
        formula: state => state.formula
      })
    },
    props: ['num'],
    methods: {
      clickButton (number){
        this.formulaJoint(number)
        if(number === 'C'){
          this.clear()
        }
        if(number === '='){
          let formulaSmall = eval(this.formula.replace(/=/g,' '))
          this.resultFn(formulaSmall)
        }
      },
      ...mapActions(['formulaJoint','clear','resultFn'])
    }
  }


</script>

<style>
  .keyboard{
    float:left;
    width:25%;
    text-align:center;
    padding:1.0rem 0;
    border:1px solid #e4e4e4;
  }
</style>

<template>
  <div id="app">
    <div class="display-area">
      <div class="formula">
        {{formula}}
      </div>
      <div class="result">
        {{result}}
      </div>
    </div>
    <div class="keyboard-wrap clear-fl">
      <keyboard num="7"></keyboard>
      <keyboard num="8"></keyboard>
      <keyboard num="9"></keyboard>
      <keyboard num="+"></keyboard>

      <keyboard num="4"></keyboard>
      <keyboard num="5"></keyboard>
      <keyboard num="6"></keyboard>
      <keyboard num="-"></keyboard>

      <keyboard num="1"></keyboard>
      <keyboard num="2"></keyboard>
      <keyboard num="3"></keyboard>
      <keyboard num="*"></keyboard>

      <keyboard num="0"></keyboard>
      <keyboard num="C"></keyboard>
      <keyboard num="="></keyboard>
      <keyboard num="/"></keyboard>
    </div>
  </div>
</template>

<script>

import Keyboard from './components/keyboard.vue'
import {mapState, mapActions} from 'vuex'

export default {
  data(){
    return {
      formula: '',
      result: ''
    }
  },
  computed: {
    ...mapState({
      formula: state => state.formula,
      result: state => state.result
    })
  },
  components: {
    Keyboard
  }
}


</script>

<style>
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
  }

  .clear-fl:after{
    content:'';
    display:block;
    height:0;
    clear:both;
  }
  #app{
    margin:0.5rem;
  }
  .display-area{
    border:1px solid #e4e4e4;
    text-align:right;
    padding:0.5rem;
  }
  .formula{
    font-size:1.0rem;
    min-height: 1.2rem;
  }
  .result{
    font-size:1.5rem;
  }
  .keyboard-wrap{
    border:1px solid #e4e4e4;
  }
  .keyboard{
    float:left;
    width:25%;
    text-align:center;
    padding:1.0rem 0;
    border:1px solid #e4e4e4;
  }

</style>

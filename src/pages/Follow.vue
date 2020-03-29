<template>
  <div class="Follow">
    <Cell
      v-for="(item,index) of $store.state.follow"
      :key="item._id"
      :data="item"
      :index="index"
      api-name="follow"
    />
  </div>
</template>

<script>
  import Cell from '../components/Cell.vue'
  // import axios from '../plugins/axios.js'
  import {mapActions} from 'vuex'
  import {FOLLOW} from '../store/types.js'
  export default {
    name:'Follow',
    props:{},
    data(){
      return {
        follow:[]
      }
    },
    components:{
      Cell
    },
    activated(){
      // this.$root.bLoading=true;
      // this.FOLLOW()
      // this.['FOLLOW']()
      this[this.$types.FOLLOW]()
    },
    
    /* updated(){
      this √
    },
    methods: this ==  follow模块,
    methods:{
      show(){
        this √
      }
    } */
    
    methods:mapActions([FOLLOW])
  }
</script>

<style scoped>
  .Follow{
    margin-top: .6rem;
    margin-left: 0.4rem;
    margin-right: 0.4rem;
  }
</style>

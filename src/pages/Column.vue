<template>
  <div class="Column">
   <Cell
     v-for="item of $store.state.column"
     :key="item._id"
     :data="item"
     api-name="column"
   />
  </div>
</template>

<script>
  import Cell from '../components/Cell'
  export default {
    name:'Column',
    props:{},
    data(){
      return {
        column:[]
      }
    },
    components:{
      Cell
    },
    activated(){
      this.$store.dispatch(this.$types.COLUMN)
    },
    updated(){},
    methods:{}
  }
</script>

<style scoped>
  .Column{
    margin-top: .6rem;
    margin-left: 0.4rem;
    margin-right: 0.4rem;
  }
</style>

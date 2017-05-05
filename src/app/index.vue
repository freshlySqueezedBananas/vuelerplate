<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import Vue from 'vue'

  import store from './store'
  import { router } from '../bootstrap'

  export default {
    router,
    store
  }
</script>
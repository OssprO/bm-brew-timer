<template>
  <div id="timers">
    <md-toolbar class="md-accent">
      <!-- <div class="md-toolbar-row"> -->
        <h3 class="md-title">Large</h3>
      <!-- </div> -->
    </md-toolbar>
    <main>
      <md-list>
        <md-list-item to="/timer/">Nombre</md-list-item>
      </md-list>
    </main>
  </div>
</template>

<script>
  export default {
    name: 'timers',
    data () {
      return {
        msg: 'Brew Timer'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

</style>

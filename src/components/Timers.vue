<template>
  <div id="timers">
    <md-toolbar class="md-primary md-large md-elevation-1">
      <!-- <div class="md-toolbar-row"> -->
        <h1>3 <small>timers</small></h1>
      <!-- </div> -->
    </md-toolbar>
    <main>
      <md-list>
        <md-list-item to="/timer/">
          <p>Nombre</p>
          <small><i class="material-icons">keyboard_arrow_right</i></small>
        </md-list-item>
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

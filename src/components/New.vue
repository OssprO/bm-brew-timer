<template>
  <div class="timers">
    <h2>New Timer</h2>
    <p>{{timer.name}} {{timer.id}}</p>
  </div>
</template>

<script type="text/javascript">
  export default{
    name: 'new',
    data () {
      return {
        timer: {
          id: 0,
          name: 'Timer'
        }
      }
    }
  }
</script>

<style media="screen">
  h2 {
    color: #123412;
  }
</style>

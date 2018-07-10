<template>
  <section class="container">
    1231312
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'
import { Group, Cell, CellBox, Calendar } from 'vux'

console.log('REM')

export default {
  components: {
    Logo,
    Group,
    Cell,
    CellBox,
    Calendar
  }
}
</script>

<style>
.container
{
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
html {
  font-size: 100px;
}
body {
  font-size: .12rem;
}
</style>

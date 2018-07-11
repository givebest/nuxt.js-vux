<template>
  <section class="container">
    1231312
    <p>
      <img src="~/assets/img/display.png" alt="Display">
    </p>
    <p>
      <img src="/assets/img/display.png" alt="Display">
    </p>
    <p>
      <img src="/display.png" alt="Display">
    </p>
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
  },
  data () {
    return {

    }
  },
  head () {
    return {
      title: 'REM'
    }
  },
  mounted: function () {
    this.getData()
  },
  methods: {
    getData: function () {
      this.$axios({
        method: 'GET',
        url: '/api/get'
      })
      .then(res => {
        console.log(res)
      })
    }
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

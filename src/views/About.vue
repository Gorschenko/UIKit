<template>
  <section class="about">
    <div class="about__inner">

  </section>
</template>
<script>
import Tooltip from './components/Tooltip.vue'
import IconButton from './components/IconButton.vue'
export default {
  components: { Tooltip, IconButton },
  data () {
    return {
      tooltipData: [
        { title: 'Первый пункт', iconName: 'bx bx-menu', value: 'menu' },
        { title: 'Второй пункт', iconName: 'bx bxs-home-alt-2', value: 'home' },
        { title: 'Третий пункт', iconName: 'bx bxs-cat', value: 'cat' },
      ],
      showList: false,
    }
  },
  methods: {
    tooltipHandler (item) {
      switch(item.value) {
        case 'menu':
          console.log('this is menu')
          break
        case 'home':
          console.log('this is home')
          break
        case 'cat':
          console.log('this is cat')
          break
      }
    }
  },
}
</script>
<style lang="scss" scoped>
.about {
  &__inner {
    width: 500px;
    height: 500px;
    border: 2px solid gray;
  }
}
</style>

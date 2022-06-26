<template>
  <div id="app" class="app">
    <div class="app__inner">
      <tooltip
       :show-list.sync="showList"
       :items="tooltipData"
       list-position="center"
       @choose="tooltipHandler"
      >
        <template #button>
          <icon-button
            form="square"
            size="l"
            @action="showList = !showList"
          />
        </template>
      </tooltip>
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, perspiciatis.</h1>
    </div>
  </div>
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
.app {
  width: 100%;
  height: 100vh;
  &__inner {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 500px;
    height: 500px;
    border: 2px solid gray;
  }

}
</style>

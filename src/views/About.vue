<template>
  <section class="about">
    <div class="about__inner">
      <tooltip
       :items="tooltipData"
      >
        <template #button>
          <icon-button
            form="circle"
            size="xs"
          />
        </template>
      </tooltip>

    </div>
  </section>
</template>
<script>
import Tooltip from '../components/Tooltip.vue'
import IconButton from '../components/IconButton.vue'
export default {
  components: { Tooltip, IconButton },
  data () {
    return {
      tooltipData: [
        { title: 'Первый пункт', iconName: 'bx bx-menu', value: 'menu' },
        { title: 'Второй пункт', iconName: 'bx bxs-home-alt-2', value: 'home' },
        { title: 'Третий пункт', iconName: 'bx bxs-cat', value: 'cat' },
      ],
    }
  }
}
</script>
<style lang="scss" scoped>
.about {
  &__inner {
    display: grid;
    align-items: center;
    justify-items: center;
    width: 500px;
    height: 500px;
    border: 2px solid gray;
  }
}
</style>

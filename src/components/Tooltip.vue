<template>
  <div class="tooltip">
    <slot
      name="button"
    />
    <ul
      v-show="showList"
      v-for="(item, i) in items"
      :key="i + item.title"
      class="tooltip__list"
    >
      <slot name="ffirstItemList" />
      <li class="tooltip__list-item">
        <i :class="item.iconName" />
        <span>{{ item.title }}</span>
      </li>
      <slot name="lastItemList" />
    </ul>
  </div>
</template>
<script>
import IconButton from './IconButton.vue'

export default {
  components: { IconButton },
  props: {
    items: {
      type: Array,
      default : () => [],
    }
  },
  data () {
    return {
      showList: true,
    }
  },
  methods: {
    toggleVisibility () {
      console.log('visibility was changed')
      this.showList = !this.showList
    }
  }
}
</script>
<style lang="scss" scoped>
.tooltip {
  &__list {
    &-item {
      display: flex;
      gap: 8px;
    }
  }
}
</style>

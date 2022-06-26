<template>
  <div class="tooltip">
    <slot
      name="button"
    />
    <ul
      v-show="showList"
      :class="[
        'tooltip__list',
        'tooltip__list_' + listPosition,
      ]"
    >
      <slot name="firstItemList" />
      <li
        v-for="(item, i) in items"
        :key="i + item.title"
        class="tooltip__list-item"
        @click="$emit('choose', item)"
      >
        <i :class="item.iconName" />
        <span>{{ item.title }}</span>
      </li>
      <slot name="lastItemList" />
    </ul>
    <div v-show="showList" class="tooltip__triangle" />
  </div>
</template>
<script>

export default {
  props: {
    showList: {
      type: Boolean,
      default: false,
    },
    items: {
      type: Array,
      default : () => [],
    },
    listPosition: {
      type: String,
      default: 'left',
    },
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
  display: inline-block;
  position: relative;

  &__list {
    display: flex;
    flex-direction: column;
    gap: 8px;
    position: absolute;
    z-index: 1000;
    margin-top: 16px;
    padding: 8px;
    background: lightgray;

    &_right {
      right: 0;
    }

    &_center {
      left: 50%;
      transform: translateX(-50%);
    }

    &-item {
      display: flex;
      gap: 8px;
      padding: 4px;
      white-space: nowrap;
      cursor: pointer;

      &:hover {
        background: $color_secondary;
      }
    }
  }
  &__triangle {
    position: absolute;
    z-index: 10000;
    left: 50%;
    transform: translateX(-50%);
    display: inline-block;
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 16px solid lightgray;
  }
}
</style>

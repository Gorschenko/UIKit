<template>
  <button
    :class="[
      'icon-button',
      'icon-button_form_' + form,
      'icon-button_size_' + size,
      textColor,
      backgroundColor,
    ]"
    @click="$emit('action')"
  >
    <i :class="iconName" />
  </button>
</template>
<script>
export default {
  props: {
    form: {
      type: String,
      default: 'square',
    },
    size: {
      type: String,
      default: 'l',
    },
    iconName: {
      type: String,
      default: 'bx bx-star',
    },
    textColor: {
      type: String,
      default: 'color_white',
    },
    backgroundColor: {
      type: String,
      default: 'background_primary',
    },
  },
}
</script>
<style lang="scss" scoped>
.icon-button {
  &:first-child {
    display: flex;
    font-size: inherit;
    color: inherit;
  }

  &_form {
    &_square {
      border-radius: 8px;
    }

    &_circle {
      border-radius: 50%;
    }
  }

  &_size {
    &_l {
      font-size: 24px;
      padding: 16px;
    }

    &_m {
      font-size: 24px;
      padding: 12px;
    }

    &_s {
      font-size: 24px;
      padding: 8px;
    }

    &_xs {
      font-size: 16px;
      padding: 8px;
    }
  }
}
</style>

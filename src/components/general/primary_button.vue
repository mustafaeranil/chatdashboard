<template>
  <button
    @click="onClick"
    class="primaryBg primaryShadow flex items-center px-8 py-4 rounded-lg text-white text-xl whitespace-nowrap focus:outline-none"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    onClick: {
      type: Function,
      default() {
        return {};
      },
    },
  },
};
</script>

<style></style>

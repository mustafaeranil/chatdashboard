<template>
  <div class="rounded-full overflow-hidden">
    <img :src="avatar" />
  </div>
</template>

<script>
export default {
  props: {
    avatar: {
      type: String,
    },
  },
};
</script>

<style></style>

<template>
  <div class="flex flex-col">
    <chatboxMessageitem
      v-for="message in messages.slice().reverse()"
      :key="message.index"
      :message="message"
    />
  </div>
</template>

<script>
import chatboxMessageitem from "./chatbox_messageitem";
export default {
  props: {
    messages: {
      type: Array,
      required: true,
    },
  },
  components: {
    chatboxMessageitem,
  },
};
</script>

<style></style>

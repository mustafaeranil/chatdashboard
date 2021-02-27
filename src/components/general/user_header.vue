<template>
  <div class="flex items-center">
    <userAvatar :avatar="useravatar" />
    <div class="ml-5">
      <div class="text-text-primary font-bold">{{ username }}</div>
      <userStateC
        :userState="userstate"
        :userLastOnline="userlastonline"
        :active="active"
        :online="online"
      />
    </div>
  </div>
</template>

<script>
import userAvatar from "./user_avatar";
import userStateC from "./user_state";
export default {
  components: {
    userAvatar,
    userStateC,
  },
  props: {
    username: {
      type: String,
    },
    userstate: {
      type: String,
    },
    useravatar: {
      type: String,
    },
    active: {
      type: Boolean,
    },
    online: {
      type: Boolean,
      default: false,
    },
    userlastonline: {
      type: String,
    },
  },
};
</script>

<style></style>

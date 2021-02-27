<template>
  <div class="text-sm" :class="active ? 'text-white' : 'text-primary '">
    <template v-if="online">
      <div
        v-if="userState === 'recording'"
        class="flex items-center justify-center"
      >
        <span class="flex justify-center items-center h-3 w-3 relative mr-2">
          <span
            class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"
          ></span>
          <span
            class="relative inline-flex rounded-full h-2 w-2 bg-primary"
          ></span>
        </span>
        recording voice message
      </div>
      <div class="flex" v-if="userState === 'writing'">
        <div class="flex items-end mr-2">
          <div
            class="rounded-full animation-jump mr-1 h-1 w-1"
            :class="active ? 'bg-white' : 'bg-primary '"
          ></div>
          <div
            class="rounded-full animation-jump animation-delay-1 mr-1 h-1 w-1"
            :class="active ? 'bg-white' : 'bg-primary '"
          ></div>
          <div
            class="rounded-full animation-jump animation-delay-2 mr-1 h-1 w-1"
            :class="active ? 'bg-white' : 'bg-primary '"
          ></div>
        </div>
        <div class="leading-none">
          {{ userState }}
        </div>
      </div>
      <div v-if="userState === 'online'">
        {{ userState }}
      </div>
    </template>
    <template v-else>
      <dateDiff :date="userLastOnline" />
    </template>
  </div>
</template>

<script>
import dateDiff from "./date_diff";
export default {
  props: {
    userState: {
      type: String,
      required: true,
      default: "Test",
    },
    online: {
      type: Boolean,
      default: false,
    },
    active: {
      type: Boolean,
      default: false,
    },
    userLastOnline: {
      type: String,
      required: true,
    },
  },
  components: {
    dateDiff,
  },
};
</script>

<style></style>

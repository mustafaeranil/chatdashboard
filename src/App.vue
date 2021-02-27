<template>
  <div id="app">
    <div class="flex">
      <sidebar />
      <appbody />
    </div>
  </div>
</template>

<script>
import sidebar from "./components/sidebar/sidebar.vue";
import appbody from "./components/appbody.vue";

export default {
  name: "App",
  components: {
    sidebar,
    appbody,
  },
  created() {
    this.$store.dispatch("getUsers");
    this.$store.dispatch("getMessages");
  },
};
</script>

<style></style>

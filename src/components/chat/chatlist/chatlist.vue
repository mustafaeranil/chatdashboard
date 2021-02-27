<template>
  <div class="flex flex-col flex-grow overflow-hidden">
    <div class=" w-full mb-6 pr-3 pl-12">
      <chatlistSearch @searched="updateUserList" />
    </div>
    <div class="flex-grow custom-scrollbar overflow-y-auto pr-2 pl-12">
      <template v-if="filteredUsersMessages.length">
        <chatlistItem
          v-for="user in filteredUsersMessages"
          :key="user.name"
          :user="user"
          @clicked="setActiveChat"
          :active="activeId === user.id ? true : false"
        />
      </template>
      <div v-else>
        <span class="text-primary text-xl">'{{ searchedQuery }}'</span> is not
        found.
      </div>
    </div>
  </div>
</template>

<script>
import chatlistItem from "./chatlist_item";
import chatlistSearch from "./chatlist_search.vue";
export default {
  props: {
    usersMessages: {
      type: Array,
      default() {
        return {};
      },
    },
    activeId: {
      type: Number,
    },
  },
  components: {
    chatlistItem,
    chatlistSearch,
  },
  data() {
    return {
      filteredUsersMessages: [...this.$props.usersMessages],
      searchedQuery: "",
    };
  },
  methods: {
    setActiveChat(user) {
      this.$emit("itemClicked", user);
    },
    updateUserList(query) {
      let userList = [...this.$props.usersMessages];
      userList = userList.filter(
        (user) => user.name.toLowerCase().search(query) >= 0
      );
      this.filteredUsersMessages = [...userList];
      this.searchedQuery = query;
    },
  },
};
</script>
<style>
.chatlist-overlay {
  height: calc(100vh - 264px);
}
</style>

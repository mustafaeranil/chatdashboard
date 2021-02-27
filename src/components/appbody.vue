<template>
  <div
    id="app-body"
    class="h-screen overflow-hidden bg-blue-100 w-app-body-desktop"
  >
    <div class="w-full h-full pt-20">
      <div class="flex h-full">
        <div class="w-1/2 flex flex-col h-full">
          <div class="flex justify-between mb-6 pr-3 pl-12">
            <div>
              <h1 class="text-4xl">Chats</h1>
              <button
                class="text-left text-text-secondary flex items-center focus:outline-none"
              >
                <span>Recent Chats</span
                ><svg
                  class="ml-1 stroke-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                >
                  <path
                    d="M4.75 7.125L9.5 11.875L14.25 7.125"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div>
              <primaryButton>
                <img src="/images/icons/plus.svg" class="mr-2" /><span
                  >Create New Chat</span
                >
              </primaryButton>
            </div>
          </div>

          <chatlist
            :usersMessages="usersMessages"
            @itemClicked="setActiveUser"
            :activeId="getActiveUser.id"
            v-if="getActiveUser"
          />
        </div>
        <div class="w-1/2 h-full px-12 pb-10">
          <chatBox v-if="getActiveUser" :user="getActiveUser" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import chatlist from "./chat/chatlist/chatlist.vue";
import chatBox from "./chat/chatbox/chatbox.vue";
import primaryButton from "./general/primary_button.vue";
export default {
  components: {
    chatBox,
    chatlist,
    primaryButton,
  },
  data() {
    return {
      activeUser: undefined,
    };
  },
  computed: {
    usersMessages() {
      return this.$store.getters.getUsersMessages;
    },
    getActiveUser() {
      if (this.activeUser) {
        return this.activeUser;
      } else {
        return this.$store.getters.getUsersMessages[0];
      }
    },
  },
  methods: {
    setActiveUser(userData) {
      let users = [...this.usersMessages];
      users = users.find((user) => user.id === userData.id);
      this.activeUser = { ...users };
    },
  },
};
</script>

<style>
#app-body {
  background: linear-gradient(180deg, #f3f3fb 0%, #fdfbfd 100%);
}
</style>

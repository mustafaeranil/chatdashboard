<template>
  <div class="w-full h-full flex flex-col bg-white rounded general-shadow">
    <div class="flex justify-between border-b px-12 py-10">
      <userHeader
        :username="user.name"
        :userstate="user.state"
        :userlastonline="user.last_online"
        :useravatar="'/images/users/user' + user.id + '.png'"
        :online="user.online"
      />
      <div class="flex">
        <div
          class="rounded-full bg-white general-shadow w-14 h-14 flex items-center justify-center mr-4"
        >
          <img src="/images/icons/attach.svg" />
        </div>
        <div
          class="rounded-full bg-white general-shadow  w-14 h-14 flex items-center justify-center"
        >
          <img src="/images/icons/more-vertical.svg" />
        </div>
      </div>
    </div>
    <div class="px-12 py-8 flex-grow overflow-y-auto  custom-scrollbar">
      <chatboxMessagelist :messages="user.messages" />
    </div>
    <div class="px-12">
      <div class="flex w-full border-t pb-2 items-center">
        <div>
          <div
            class="mr-4 primaryBg primaryShadow w-10 h-10 rounded-full flex items-center justify-center"
          >
            <button>
              <img src="/images/icons/plus.svg" />
            </button>
          </div>
        </div>
        <div class="flex-grow">
          <textarea
            class="w-full py-6 focus:outline-none bg-transparent text-lg"
            placeholder="Type a message here"
            rows="1"
          >
          </textarea>
        </div>
        <div class="flex items-center">
          <div>
            <button>
              <img src="/images/icons/smile.svg" class="mr-8" />
            </button>
          </div>
          <div
            class="mr-4 primaryBg primaryShadow w-10 h-10 rounded-full flex items-center justify-center"
          >
            <button>
              <img src="/images/icons/navigation.svg" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import userHeader from "../../general/user_header";
import chatboxMessagelist from "./chatbox_messagelist";
export default {
  props: {
    user: {
      type: Object,
      default() {
        return {};
      },
      required: true,
    },
  },
  components: {
    userHeader,
    chatboxMessagelist,
  },
};
</script>

<style></style>

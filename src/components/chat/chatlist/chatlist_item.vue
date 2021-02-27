<template>
  <div @click="$emit('clicked', user)">
    <div
      class="rounded flex flex-wrap w-full mb-6 general-shadow py-6 px-12"
      :class="active ? 'primaryBg' : 'bg-white'"
    >
      <div class="flex justify-between items-center w-full mb-4">
        <userHeader
          :username="user.name"
          :userstate="user.state"
          :userlastonline="user.last_online"
          :online="user.online"
          :useravatar="'/images/users/user' + user.id + '.png'"
          :active="active"
        />
        <div :class="active ? 'text-white opacity-75' : 'text-text-secondary'">
          <dateDiff :date="user.messages[0].date" />
        </div>
      </div>
      <div class="w-full flex justify-between">
        <div
          class="flex-grow mb-4 text-sm"
          :class="active ? 'text-white' : 'text-text-secondary'"
        >
          <template v-if="user.messages[0].type === 'text'">
            {{ user.messages[0].content }}
          </template>
          <template v-else>
            <div class=" flex items-center">
              <div class="bg-white flex items-center justify-center mr-2">
                <img src="/images/icons/mic.svg" class="w-4" />
              </div>
              Voice message({{ user.messages[0].voice.duration }})
            </div>
          </template>
        </div>
        <div class="ml-4" v-if="unReadedMessagesCount">
          <div
            class="rounded-full bg-secondary text-white text-xs w-5 h-5 flex justify-center items-center"
          >
            <span>{{ unReadedMessagesCount }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import userHeader from "../../general/user_header";
import dateDiff from "../../general/date_diff";
export default {
  props: {
    user: {
      type: Object,
      required: true,
      default() {
        return {};
      },
    },
    active: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    userHeader,
    dateDiff,
  },
  computed: {
    unReadedMessagesCount() {
      let messageCount = [...this.user.messages];
      messageCount = messageCount.filter((message) => !message.readed);
      return messageCount.length;
    },
  },
};
</script>

<style></style>

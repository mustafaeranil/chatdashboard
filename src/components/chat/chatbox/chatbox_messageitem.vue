<template>
  <div class="w-full flex  mb-8">
    <div
      v-if="message.from === 'inbox'"
      class="overflow-hidden rounded-full mr-4 w-10 h-10"
      style="min-width:2.5rem"
    >
      <img :src="'/images/users/user' + message.userid + '.png'" class="w-10" />
    </div>
    <div
      class="flex-grow flex justify-start"
      :class="message.from === 'inbox' ? null : 'flex-row-reverse'"
    >
      <div :class="classString" class="p-4 text-sm relative">
        <template v-if="message.type === 'text'">
          <div v-if="message.content">
            <div>{{ message.content }}</div>
            <div v-if="message.files">
              <div
                v-for="file in message.files"
                :key="file.index + file.name"
                class="flex float-right items-center"
                :class="
                  message.from === 'inbox' ? 'text-white' : 'text-primary'
                "
              >
                ({{ file.size }}) {{ file.name }}
                <img
                  v-if="message.from === 'inbox'"
                  class="ml-2"
                  src="/images/icons/file_white.svg"
                />
                <img v-else class="ml-2" src="/images/icons/file_primary.svg" />
              </div>
            </div>
          </div>
          <div v-else-if="message.files">
            <div
              class="flex justify-between"
              v-for="file in message.files"
              :key="file.index + file.name"
            >
              <div class="p-2 rounded bg-white bg-opacity-25 mr-4">
                <img src="/images/icons/file_white.svg" />
              </div>
              <div>
                <div>
                  {{ file.name }}
                </div>
                <div
                  class="text-xs"
                  :class="
                    message.from === 'inbox'
                      ? 'text-white opacity-75'
                      : 'text-text-secondary'
                  "
                >
                  {{ file.size }}
                </div>
              </div>
            </div>
          </div>
        </template>
        <div v-else-if="message.type === 'voice'" class="flex items-center">
          <div
            class="bg-white bg-opacity-50 w-8 h-8 rounded-full flex items-center justify-center mr-3"
          >
            <img src="/images/icons/mic.svg" class="w-4" />
          </div>
          Voice message({{ message.voice.duration }})
        </div>
        <div class="absolute right-0 top-full text-xs text-text-secondary pt-2">
          <dateDiff :date="message.date" />
        </div>
      </div>
      <div class="h-full flex items-center px-4">
        <div
          class="h-1 w-1 rounded-full bg-text-secondary opacity-50 mx-0.5"
        ></div>
        <div
          class="h-1 w-1 rounded-full bg-text-secondary opacity-50 mx-0.5"
        ></div>
        <div
          class="h-1 w-1 rounded-full bg-text-secondary opacity-50 mx-0.5"
        ></div>
      </div>
    </div>
    <img
      v-if="message.from !== 'inbox' && message.readed && message.sended"
      class="ml-3"
      src="/images/icons/all-done.svg"
    />
    <img
      v-else-if="message.from !== 'inbox' && message.sended"
      class="ml-3"
      src="/images/icons/checkmark.svg"
    />
  </div>
</template>

<script>
import dateDiff from "../../general/date_diff";
export default {
  props: {
    message: {
      type: Object,
      required: true,
    },
  },
  components: {
    dateDiff,
  },
  computed: {
    classString() {
      let classString = "";
      this.message.from === "inbox"
        ? (classString =
            "primaryBg primaryShadow text-white rounded-tr-lg rounded-br rounded-bl-lg")
        : (classString =
            "bg-white border border-gray-200 general-shadow text-text-secondary rounded-tr-lg rounded-tl-lg rounded-bl-lg");
      return classString;
    },
  },
};
</script>

<style></style>

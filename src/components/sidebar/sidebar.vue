<template>
  <div
    id="sidebar"
    class="z-10 w-sidebar-width-desktop bg-white h-screen flex flex-col items-center justify-center"
  >
    <div
      class="flex flex-col justify-center items-center w-full h-sidebar-width-desktop"
    >
      <userAvatar :avatar="'/images/users/owner.png'" />
      <div class="flex items-center mt-2">
        <span class="text-lg text-text-primary">Henry Jabbawockiez</span>
        <svg
          class="ml-1 stroke-current text-text-primary"
          xmlns="http://www.w3.org/2000/svg"
          width="19"
          height="19"
          viewBox="0 0 19 19"
          fill="none"
        >
          <path
            d="M4.75 7.125L9.5 11.875L14.25 7.125"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
    <div class="w-full h-app-body-desktop flex flex-col justify-between">
      <ul>
        <li
          class="w-full flex px-10 py-5 text-text-secondary font-bold tracking-wide"
        >
          <img src="/images/icons/grid.svg" class="mr-4" /><span>HOME</span>
        </li>
        <li class="w-full flex px-10 py-5 text-primary font-bold tracking-wide">
          <img src="/images/icons/chat.svg" class="mr-4" /><span>CHAT</span>
        </li>
        <li
          class="w-full flex px-10 py-5 text-text-secondary font-bold tracking-wide"
        >
          <img src="/images/icons/person.svg" class="mr-4" /><span
            >CONTACT</span
          >
        </li>
        <li
          class="w-full flex px-10 py-5 text-text-secondary font-bold tracking-wide"
        >
          <img src="/images/icons/bell.svg" class="mr-4" /><span
            >NOTIFICATIONS</span
          >
        </li>
        <li
          class="w-full flex px-10 py-5 text-text-secondary font-bold tracking-wide"
        >
          <img src="/images/icons/calendar.svg" class="mr-4" /><span
            >CALENDER</span
          >
        </li>
        <li
          class="w-full flex px-10 py-5 text-text-secondary font-bold tracking-wide"
        >
          <img src="/images/icons/settings.svg" class="mr-4" /><span
            >SETTINGS</span
          >
        </li>
      </ul>
      <div
        class="w-full flex px-10 pt-5 pb-10 text-text-secondary font-bold tracking-wide"
      >
        <img src="/images/icons/power.svg" class="mr-4" /><span>LOG OUT</span>
      </div>
    </div>
  </div>
</template>

<script>
import userAvatar from "../general/user_avatar";
export default {
  components: {
    userAvatar,
  },
};
</script>
<style>
#sidebar {
  box-shadow: 3px 0px 50px 0px rgb(86 128 248 / 15%);
}
</style>

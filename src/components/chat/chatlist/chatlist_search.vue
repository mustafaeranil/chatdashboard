<template>
  <div class="flex w-full bg-white rounded general-shadow">
    <div class="flex pl-12 flex-grow py-6">
      <img src="/images/icons/search.svg" class="mr-2" />
      <input
        class="focus:outline-none text-text-secondary"
        type="textbox"
        placeholder="Search"
        @keyup="$emit('searched', $event.target.value)"
      />
    </div>
    <div class="border-l py-6 px-12">
      <button
        class="focus:outline-none text-text-secondary flex items-center justify-center w-full"
      >
        <span>Messages</span
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
  </div>
</template>

<script>
export default {};
</script>

<style></style>

<template>
  <span>{{ dateDifferent }}</span>
</template>

<script>
export default {
  props: {
    date: {
      type: [Date, String],
      required: true,
    },
  },
  computed: {
    dateDifferent() {
      const minDiff = Math.floor(
        (new Date(Date.now()) - new Date(this.date)) / (1000 * 60)
      );
      const hourDiff = Math.floor(
        (new Date(Date.now()) - new Date(this.date)) / (1000 * 60 * 60)
      );
      const dayDiff = Math.floor(
        (new Date(Date.now()) - new Date(this.date)) / (1000 * 60 * 60 * 24)
      );
      let dateDiffString = "";
      let dateNumber = "";
      dayDiff >= 1
        ? dayDiff > 1
          ? ((dateDiffString = "days"), (dateNumber = dayDiff))
          : ((dateDiffString = "day"), (dateNumber = "A"))
        : hourDiff >= 1
        ? hourDiff > 1
          ? ((dateDiffString = "hours"), (dateNumber = hourDiff))
          : ((dateDiffString = "hour"), (dateNumber = "A"))
        : minDiff >= 1
        ? minDiff > 1
          ? ((dateDiffString = "minutes"), (dateNumber = minDiff))
          : ((dateDiffString = "minute"), (dateNumber = "A"))
        : ((dateDiffString = "seconds"), (dateNumber = "A few"));
      return dateNumber + " " + dateDiffString + " ago.";
    },
  },
};
</script>

<style></style>

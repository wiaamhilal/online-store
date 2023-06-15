<template>
  <div class="sidebar-widgets">{{ title | upercase }}</div>
</template>

<script>
export default {
  data: function () {
    return {
      title: "testing",
    };
  },
  name: "blogSidebar",
  filters: {
    upercase: function (v) {
      return v.toUpperCase();
    },
  },
};
</script>
<template>
  <div id="app">
    <vue-page-transition name="fade-in-right">
      <router-view />
    </vue-page-transition>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {}
};
</script>

<style scoped></style>

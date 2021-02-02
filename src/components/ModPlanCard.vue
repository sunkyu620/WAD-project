<template>
  <div class="cards">
    <div class="card">
      <p>{{ moduleName }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModPlanCard",
  props: ["moduleName"]
};
</script>

<style scoped>
.card {
  background: #fff;
  margin-bottom: 10px;
  padding: 10px 20px;
  border-radius: 3px;
  cursor: pointer;
  -webkit-transition: -webkit-transform 250ms;
  transition: -webkit-transform 250ms;
  transition: transform 250ms;
  transition: transform 250ms, -webkit-transform 250ms;
}

.card.selected {
  -webkit-transform: scale(1.15);
  transform: scale(1.15);
  z-index: 1;
}
</style>

<template>
  <div
    class="scroll d-flex flex-column justify-content-between align-items-center"
  >
    <div v-if="tasksDonePercent == 100">
      <h4>Your productivity at a glance</h4>
      <div class="particletext confetti">
        <img
          src="../../glassdoor/new_job_search/pusheen/4.gif"
          style="width: 5rem;"
        />
        Well done! 🎉🎉 <br />
      </div>
    </div>
    <div v-else-if="tasksDonePercent >= 80 && tasksDonePercent <= 99">
      <h4>Your productivity at a glance</h4>
      <div class="message">Almost there! 🌟</div>
    </div>
    <div v-else-if="tasksDonePercent >= 50 && tasksDonePercent <= 79">
      <h4>Your productivity at a glance</h4>
      <div class="message">Keep it going! 🤩</div>
    </div>
    <div v-else-if="tasksDonePercent >= 1 && tasksDonePercent <= 49">
      <h4>Your productivity at a glance</h4>
      <div class="message">Getting Started! 💪🏻 💪🏻</div>
    </div>
    <div v-else-if="tasksDonePercent == 0">
      <h4>Your productivity at a glance</h4>
      <div class="message">You okay? 🤡 🤡</div>
    </div>
    <vue-ellipse-progress
      :is="component"
      :progress="tasksDonePercent"
      color="#7579ff"
      empty-color="#324c7e"
      :size="170"
      :thickness="5"
      :empty-thickness="3"
      lineMode="in 4"
      :legend-value="tasksDone"
      animation="bounce 700 1000"
      fontSize="1.5rem"
      font-color="black"
      dot="7 black"
    >
      <span slot="legend-value"> / 10</span>
      <span slot="legend-caption">TASKS DONE</span>
    </vue-ellipse-progress>
  </div>
</template>

<script>
export default {
  name: "Progress",
  data: () => ({
    tasksDone: 10
  }),
  computed: {
    tasksDonePercent() {
      return (this.tasksDone * 100) / 10;
    },
    component() {
      return "vue-ellipse-progress";
    }
  }
};
</script>

<style scoped>
.message {
  font-size: 2vw;
  text-align: left;
  background: transparent;
}

.scroll {
  height: 15vh;
  overflow-y: auto;
}
</style>

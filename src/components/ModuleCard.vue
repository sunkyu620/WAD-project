<template>
  <div class="card">
    <div class="card-body text-center">
      <img
        :src="require('../../cards/image/' + randomNum + '.gif')"
        width="40%"
        style="margin-top: 10px;"
      />
      <div class="card-content">
        <div
          class="card-title text-center"
          style="font-size:medium; font-weight: bold;"
        >
          {{ modCode }}
        </div>
        <div class="card-text mb-3" style="font-size: small;">
          {{ modName }}
        </div>
      </div>
      <!-- Button trigger modal -->
      <button
        type="button"
        class="btn btn-outline-primary"
        style="width:10rem;"
        @click="redirect(modCode)"
      >
        <span class="text-center" style="font-size:80%">View Module Info</span>
      </button>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);

export default {
  name: "ModuleCard",
  props: {
    moduleFullName: String
  },
  components: {},
  data() {
    return {
      randomNum: 1
    };
  },
  computed: {
    modCode() {
      return this.moduleFullName.split(" ")[0];
    },
    modName() {
      return this.moduleFullName
        .split(" ")
        .slice(1)
        .join(" ");
    }
  },
  created() {
    this.randomNum = Math.floor(Math.random() * 9) + 1;
  },
  methods: {
    redirect(modCode) {
      window.open("https://smumods.com/module/" + modCode, "_blank");
    }
  }
};
</script>

<style scoped>
.card {
  background: white;
  border-radius: 20px;
  display: inline-block;
  position: relative;
  margin-bottom: 1em;
  height: 18rem;
  width: 18rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.card:hover {
  box-shadow: 0 14px 28px #b8cef3, 0 10px 10px #b8cef3;
}

.card-content {
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 0;
}
</style>

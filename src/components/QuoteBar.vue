<template>
  <div class="quotes-bar">
    <h3 class="quote">
      {{ list }}
    </h3>
    <h4 class="author">— {{ author }}</h4>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);

export default {
  name: "QuoteBar",
  data() {
    return {
      list: undefined,
      author: undefined
    };
  },
  mounted() {
    Vue.axios.get("https://quotes.rest/qod").then(resp => {
      this.list = resp.data.contents.quotes[0].quote;
      this.author = resp.data.contents.quotes[0].author;
    });
  }
};
</script>

<style scoped>
.quotes-bar {
  height: 15vh;
  width: auto;
  overflow-y: auto;
}

.quote {
  padding: 20px 0px 0px;
  text-align: left;
  font-size: 1.2em;
}

h3,
h4 {
  font-family: Montserrat;
  font-style: italic;
}

.author {
  padding: 10px 20px 5px 10px;
  margin-top: -5px;
  text-align: right;
  font-size: 1em;
}
</style>

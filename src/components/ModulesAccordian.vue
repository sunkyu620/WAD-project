<template>
  <div class="accordion">
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button
          block
          v-b-toggle.accordion-1
          variant="info"
          style="font-size:15px;"
          id="accordion1"
          @click="initVideos(1)"
        >
          {{ mod1 }}
        </b-button>
      </b-card-header>
      <b-collapse
        id="accordion-1"
        visible
        accordion="my-accordion"
        role="tabpanel"
      >
        <b-card-body>
          <div class="module-section">
            <b-card-text>{{ text }}</b-card-text>
            <!-- Search bar -->
            <YoutubeSearch @load="initVideos(1)" v-on:search="search" />

            <!-- Videos -->
            <YoutubeResults
              v-if="videos.length > 0"
              v-bind:videos="videos"
              v-bind:reformattedSearchString="reformattedSearchString"
            />
          </div>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button
          block
          v-b-toggle.accordion-2
          variant="info"
          style="font-size:15px;"
          @click="initVideos(2)"
          >{{ mod2 }}</b-button
        >
      </b-card-header>
      <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>{{ text }}</b-card-text>
          <!-- Search bar -->
          <YoutubeSearch v-on:search="search" />

          <!-- Videos -->
          <YoutubeResults
            v-if="videos.length > 0"
            v-bind:videos="videos"
            v-bind:reformattedSearchString="reformattedSearchString"
          />
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button
          block
          v-b-toggle.accordion-3
          variant="info"
          style="font-size:15px;"
          @click="initVideos(3)"
          >{{ mod3 }}</b-button
        >
      </b-card-header>
      <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>{{ text }}</b-card-text>
          <!-- Search bar -->
          <YoutubeSearch v-on:search="search" />

          <!-- Videos -->
          <YoutubeResults
            v-if="videos.length > 0"
            v-bind:videos="videos"
            v-bind:reformattedSearchString="reformattedSearchString"
          />
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button
          block
          v-b-toggle.accordion-4
          variant="info"
          style="font-size:15px;"
          @click="initVideos(4)"
          >{{ mod4 }}</b-button
        >
      </b-card-header>
      <b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>{{ text }}</b-card-text>
          <!-- Search bar -->
          <YoutubeSearch v-on:search="search" />

          <!-- Videos -->
          <YoutubeResults
            v-if="videos.length > 0"
            v-bind:videos="videos"
            v-bind:reformattedSearchString="reformattedSearchString"
          />
        </b-card-body>
      </b-collapse>
    </b-card>
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button
          block
          v-b-toggle.accordion-5
          variant="info"
          style="font-size:15px;"
          @click="initVideos(5)"
          >{{ mod5 }}</b-button
        >
      </b-card-header>
      <b-collapse id="accordion-5" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>{{ text }}</b-card-text>
          <!-- Search bar -->
          <YoutubeSearch v-on:search="search" />

          <!-- Videos -->
          <YoutubeResults
            v-if="videos.length > 0"
            v-bind:videos="videos"
            v-bind:reformattedSearchString="reformattedSearchString"
          />
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import YoutubeSearch from "@/components/YoutubeSearch";
import YoutubeResults from "@/components/YoutubeResults";
Vue.use(VueAxios, axios);

export default {
  name: "ModulesAccordian",
  props: {
    mod1: String,
    mod2: String,
    mod3: String,
    mod4: String,
    mod5: String
  },
  components: {
    YoutubeResults,
    YoutubeSearch
  },
  data() {
    return {
      text: "",
      videos: [],
      reformattedSearchString: "",
      api: {
        baseUrl:
          "https://www.googleapis.com/youtube/v3/search?type=video&part=snippet&order=viewCount&maxResults=6&q=",
        q: "",
        key: "AIzaSyCTTMCziOgGOq4V44X4tK2ntQ51HsbZiV4"
      },
      searchString: "",
      accordionRef: ""
    };
  },
  mounted() {},
  created() {
    this.initVideos(1);
  },
  methods: {
    initVideos: function(id) {
      let q;
      if (id == 1) {
        q = this.$props.mod1;
      } else if (id == 2) {
        q = this.$props.mod2;
      } else if (id == 3) {
        q = this.$props.mod3;
      } else if (id == 4) {
        q = this.$props.mod4;
      } else {
        q = this.$props.mod5;
      }
      console.log(q);
      let key = "AIzaSyCTTMCziOgGOq4V44X4tK2ntQ51HsbZiV4";
      let url =
        "https://www.googleapis.com/youtube/v3/search?type=video&part=snippet&order=viewCount&maxResults=6&q=" +
        q +
        "&key=" +
        key;
      Vue.axios.get(url).then(resp => {
        this.videos = resp.data.items;
      });
    },
    search(searchParams) {
      this.reformattedSearchString = searchParams.join(" ");
      this.api.q = searchParams.join("+");
      const { baseUrl, q, key } = this.api;
      const apiUrl = `${baseUrl}q=${q}&key=${key}`;
      this.getData(apiUrl);
    },
    getData(apiUrl) {
      axios
        .get(apiUrl)
        .then(res => {
          this.videos = res.data.items;
        })
        .catch(error => console.log(error));
    },
    parseSearchString() {
      // Trim search string
      const trimmedSearchString = this.searchString.trim();

      if (trimmedSearchString !== "") {
        // Split search string
        const searchParams = trimmedSearchString.split(/\s+/);
        // Emit event
        this.$emit("search", searchParams);
        // Reset input field
        this.searchString = "";
      }
    }
  }
};
</script>

<style scoped>
b-card-body {
  /* height: 100%;
  width: 300px;
  overflow: visible; */
  overflow-x: scroll;
}

.card-body {
  padding: 0px;
}

.module-section {
  height: 100%;
  /* width: 140%; */
  /* overflow-x: scroll; */
}

iframe {
  margin-right: 5px;
}

section {
  height: 100px;
}
</style>

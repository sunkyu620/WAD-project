<template>
  <div>
    <Navbar />
    <div class="container-fluid">
      <b-row class="d-sm-flex justify-content-sm-center">
        <b-col sm="9" cols="12">
          <b-row>
            <b-row class="mt-3">
              <b-col sm="12" lg="12" md="12" xl="6" cols="12">
                <div class="box height24 mx-auto">
                  <h5 class="particletext hearts" style="font-size: 1.5em">
                    <span id="username">Hello {{ name }}! 🙂</span>
                  </h5>
                  <QuoteBar />
                </div>
              </b-col>
              <b-col sm="12" lg="12" md="12" xl="6" cols="12">
                <div class="box height24 mx-auto">
                  <div class="scroll d-lg-flex justify-content-lg-between">
                    <div v-if="completedPercentage >= 100">
                      <h5 class="particle-text mb-2">
                        Your productivity at a glance ⭐️
                      </h5>
                      <div class="particletext confetti">
                        <img
                          src="../../glassdoor/new_job_search/pusheen/4.gif"
                          style="width: 5rem;"
                        />
                        <span class="ml-2" style="font-size: 1.5rem;"
                          >Well done! 🎉🎉
                        </span>
                      </div>
                    </div>
                    <div
                      v-else-if="
                        completedPercentage >= 80 && completedPercentage <= 99
                      "
                    >
                      <h5 class="mb-2 particletext">
                        Your productivity at a glance ⭐️
                      </h5>
                      <div class="message">
                        <img
                          src="../../cards/image/7.gif"
                          style="width: 4rem;"
                          class="mr-2"
                        />
                        <span style="font-size: 1.5rem;">Almost there! 🌟</span>
                      </div>
                    </div>
                    <div
                      v-else-if="
                        completedPercentage >= 50 && completedPercentage <= 79
                      "
                    >
                      <h5 class="mb-2 particletext">
                        Your productivity at a glance ⭐️
                      </h5>
                      <div class="message">
                        <img
                          src="../../cards/image/8.gif"
                          style="width: 4rem;"
                          class="mr-2"
                        /><span style="font-size: 1.5rem;"
                          >Keep it going! 🤩</span
                        >
                      </div>
                    </div>
                    <div
                      v-else-if="
                        completedPercentage >= 1 && completedPercentage <= 49
                      "
                    >
                      <h5 class="mb-2 particletext">
                        Your productivity at a glance ⭐️
                      </h5>
                      <div class="message">
                        <img
                          src="../../cards/image/6.gif"
                          style="width: 4rem;"
                          class="mr-2"
                        /><span style="font-size: 1.5rem;"
                          >Getting Started! 💪🏻</span
                        >
                      </div>
                    </div>
                    <div v-else-if="completedPercentage == 0">
                      <h5 class="mb-2 particletext">
                        Your productivity at a glance ⭐️
                      </h5>
                      <div class="message">
                        <img
                          src="../../cards/image/1.gif"
                          style="width: 5rem;"
                        /><span style="font-size: 1.5rem;"
                          >You okay? 🤡 🤡</span
                        >
                      </div>
                    </div>
                    <div class="d-flex justify-content-center">
                      <vue-ellipse-progress
                        :is="component"
                        :progress="completedPercentage"
                        color="#7579ff"
                        empty-color="#324c7e"
                        :size="150"
                        :thickness="5"
                        :empty-thickness="3"
                        lineMode="in 4"
                        :legend-value="completed.length"
                        animation="bounce 700 1000"
                        fontSize="1.5rem"
                        font-color="black"
                        dot="7 black"
                      >
                        <span slot="legend-value"> / {{ newList.length }}</span>
                        <span slot="legend-caption">TASKS DONE</span>
                      </vue-ellipse-progress>
                    </div>
                  </div>
                </div>
              </b-col>
            </b-row>
            <b-col>
              <div class="box height45">
                <b-col
                  class="modCards d-flex justify-content-lg-left justify-content-lg-between  "
                >
                  <!-- Start todo -->
                  <div id="app">
                    <section class="todo-wrapper mr-3">
                      <h1 class="todo-title">
                        To-do List
                      </h1>
                      <form @keydown.enter.prevent="">
                        <input
                          type="text"
                          class="input-todo"
                          v-bind:class="{ active: new_item }"
                          placeholder="Book consultation with Prof"
                          v-model="new_item"
                          v-on:keyup.enter="addItem"
                        />
                        <div
                          class="btnn btnn-add"
                          v-bind:class="{ active: new_item }"
                          @click="addItem"
                        >
                          +
                        </div>
                      </form>

                      <div v-if="pending.length > 0">
                        <p class="status busy">
                          You have {{ pending.length }} pending item<span
                            v-if="pending.length > 1"
                            >s</span
                          >
                        </p>
                        <transition-group
                          name="todo-item"
                          tag="ul"
                          class="todo-list"
                        >
                          <li v-for="item in pending" v-bind:key="item.title">
                            <input
                              class="todo-checkbox"
                              v-bind:id="'item_' + item.id"
                              v-model="item.done"
                              type="checkbox"
                              @click="addTaskDone"
                            />
                            <label v-bind:for="'item_' + item.id"></label>
                            <span class="todo-text">{{ item.title }}</span>
                            <span
                              class="deleteT"
                              @click="deleteItem(item)"
                            ></span>
                          </li>
                        </transition-group>
                      </div>

                      <transition name="slide-fade">
                        <p class="status free" v-if="!pending.length">
                          <img
                            src="https://nourabusoud.github.io/vue-todo-list/images/beer_celebration.svg"
                            alt="celebration"
                          />Time to chill! You have no todos.
                        </p>
                      </transition>

                      <div v-if="completed.length > 0 && showComplete">
                        <p class="status">
                          Completed tasks:
                        </p>
                        <transition-group
                          name="todo-item"
                          tag="ul"
                          class="todo-list archived"
                        >
                          <li v-for="item in completed" v-bind:key="item.title">
                            <input
                              class="todo-checkbox"
                              v-bind:id="'item_' + item.id"
                              v-model="item.done"
                              type="checkbox"
                            />
                            <label v-bind:for="'item_' + item.id"></label>
                            <span class="todo-text">{{ item.title }}</span>
                            <span
                              class="delete"
                              @click="deleteItem(item)"
                            ></span>
                          </li>
                        </transition-group>
                      </div>
                      <div class="control-buttons">
                        <div
                          class="btnn btnn-secondary"
                          v-if="completed.length > 0"
                          @click="toggleShowComplete"
                        >
                          <span v-if="!showComplete">Show</span
                          ><span v-else>Hide</span> Complete
                        </div>
                        <div
                          class="btnn btnn-secondary"
                          v-if="newList.length > 0"
                          @click="clearAll"
                        >
                          Clear All
                        </div>
                      </div>
                    </section>
                  </div>
                  <!-- End todo-->
                  <Important />
                  <Meeting />
                </b-col>
              </div>
            </b-col>
          </b-row>
        </b-col>
        <b-col sm="12" md="12" lg="12" xl="3" cols="12">
          <div class="box mt-3" id="schedule">
            <div class="d-flex align-items-center flex-column">
              <h4 class="particletext mb-4 text-center">Module Info ✏️</h4>
              <ModuleCard
                v-for="mod in modules"
                :key="mod"
                v-bind:moduleFullName="mod"
              />
            </div>
          </div>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import QuoteBar from "@/components/QuoteBar";
import ModuleCard from "@/components/ModuleCard";
import Important from "@/components/Important";
import Meeting from "@/components/Meeting";

import $ from "jquery";

require("@/assets/styles/particles.css");
require("@/assets/styles/todo.css");

export default {
  name: "Home",
  components: {
    Navbar,
    QuoteBar,
    ModuleCard,
    Important,
    Meeting
  },
  data() {
    return {
      name: "Guest",
      tasksDone: 0,
      tasksTodo: 0,
      modules: [],
      newList: [],
      new_item: "",
      showComplete: false,
      username: ""
    };
  },
  methods: {
    getNew() {
      if (localStorage.getItem("new_list")) {
        this.newList = JSON.parse(localStorage.getItem("new_list"));
      }
    },

    addTaskDone() {
      this.tasksDone++;
    },

    // add a new item
    addItem() {
      // validation check
      if (this.new_item) {
        this.newList.unshift({
          id: this.newList.length,
          title: this.new_item,
          done: false
        });
      }
      // reset new_todo
      this.new_item = "";
      // save the new item in localstorage
      return true;
    },
    deleteItem(item) {
      this.newList.splice(this.newList.indexOf(item), 1);
    },
    toggleShowComplete() {
      this.showComplete = !this.showComplete;
    },
    clearAll() {
      this.newList = [];
    }
  },
  computed: {
    tasksDonePercent() {
      if (this.tasksTodo == 0) {
        return 0;
      }
      return (this.tasksDone * 100) / this.tasksTodo;
    },
    component() {
      return "vue-ellipse-progress";
    },
    pending: function() {
      return this.newList.filter(function(item) {
        return !item.done;
      });
    },
    completed: function() {
      return this.newList.filter(function(item) {
        return item.done;
      });
    },
    completedPercentage: function() {
      if (this.newList.length == 0) {
        return 0;
      }
      return Math.floor((this.completed.length / this.newList.length) * 100);
    },
    today: function() {
      var weekday = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ];
      var today = new Date();
      var dd = today.getDate();
      var mm = today.getMonth() + 1; //January is 0!
      var yyyy = today.getFullYear();

      if (dd < 10) {
        dd = "0" + dd;
      }

      if (mm < 10) {
        mm = "0" + mm;
      }

      today = {
        day: weekday[today.getDay()],
        date: dd + "/" + mm + "/" + yyyy
      };

      return today;
    }
  },
  mounted() {
    // let test = JSON.parse(window.localStorage.getItem(this.username))["Modules"];
    // console.log(test)
    this.getNew();

    $("#username").css("textTransform", "capitalize");

    $(".add-card").click(function() {
      var textarea = $(this).prev();
      var column = $(this)
        .closest(".column")
        .find(".cards");

      column.append("<div class='card'><p>" + textarea.val() + "</p></div>");

      textarea.val("");
    });

    function initparticles() {
      bubbles();
      hearts();
      confetti();
    }

    function bubbles() {
      $.each($(".particletext.bubbles"), function() {
        var bubblecount = ($(this).width() / 50) * 10;
        for (var i = 0; i <= bubblecount; i++) {
          var size = $.rnd(40, 80) / 10;
          $(this).append(
            '<span class="particle" style="top:' +
              $.rnd(20, 80) +
              "%; left:" +
              $.rnd(0, 95) +
              "%;width:" +
              size +
              "px; height:" +
              size +
              "px;animation-delay: " +
              $.rnd(0, 30) / 10 +
              's;"></span>'
          );
        }
      });
    }

    function hearts() {
      $.each($(".particletext.hearts"), function() {
        var heartcount = ($(this).width() / 400) * 5;
        for (var i = 0; i <= heartcount; i++) {
          var size = $.rnd(60, 120) / 10;
          $(this).append(
            '<span class="particle" style="top:' +
              $.rnd(20, 80) +
              "%; left:" +
              $.rnd(0, 95) +
              "%;width:" +
              size +
              "px; height:" +
              size +
              "px;animation-delay: " +
              $.rnd(0, 30) / 10 +
              's;"></span>'
          );
        }
      });
    }

    function confetti() {
      $.each($(".particletext.confetti"), function() {
        var confetticount = ($(this).width() / 50) * 10;
        for (var i = 0; i <= confetticount; i++) {
          $(this).append(
            '<span class="particle c' +
              $.rnd(1, 2) +
              '" style="top:' +
              $.rnd(10, 50) +
              "%; left:" +
              $.rnd(0, 100) +
              "%;width:" +
              $.rnd(6, 8) +
              "px; height:" +
              $.rnd(3, 4) +
              "px;animation-delay: " +
              $.rnd(0, 30) / 10 +
              's;"></span>'
          );
        }
      });
    }

    $.rnd = function(m, n) {
      m = parseInt(m);
      n = parseInt(n);
      return Math.floor(Math.random() * (n - m + 1)) + m;
    };

    initparticles();
  },
  created() {
    // display name on dashboard
    this.username = window.localStorage.getItem("username");
    let credentials = JSON.parse(window.localStorage.getItem(this.username));
    this.name = credentials["Name"];

    // get no. of mods
    // console.log(JSON.parse(window.localStorage.getItem(username)))
    this.modules = window.localStorage.getItem("modules");
    this.modules = this.modules.split(",");
    console.log(this.modules);

    if (window.localStorage) {
      if (!localStorage.getItem("firstReLoad")) {
        localStorage["firstReLoad"] = true;
        window.location.reload();
      } else {
        localStorage.removeItem("firstReLoad");
      }
    }
  },
  watch: {
    newList: {
      handler: function(updatedList) {
        localStorage.setItem("new_list", JSON.stringify(updatedList));
      },
      deep: true
    }
  }
};
</script>

<style>
html,
body {
  height: 100%;
  background-color: #f7fafc;
  overflow-y: auto;
  font-family: "Poppins", sans-serif;
}

#schedule {
  height: 87vh;
  overflow-y: auto;
  z-index: 999;
}

.height17 {
  height: 17vh;
}

.height45 {
  height: 60.5vh;
}

.height24 {
  height: 24vh;
}

.box {
  background-color: white;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.2), 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  margin-bottom: 20px;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
  overflow: auto;
}

.modCards {
  overflow-y: auto;
  height: 100%;
}

.message {
  font-size: 2vw;
  text-align: left;
  background: transparent;
}

.add {
  background-color: #007bff;
  color: white;
  margin-top: 10px;
  width: 30%;
  font-size: 15px;
}

ul {
  margin-top: 10px;
  padding: 0px;
}

.glyphicon {
  margin-left: 10px;
}

.todo-item {
  margin-left: 10px;
  font-size: 18px;
}

.input-field {
  margin-left: 10px;
  margin-right: 10px;
}

.container {
  padding: 1%;
}

p {
  padding-left: 10px;
  padding-top: 10px;
}

.column {
  background: #f5f5f5;
  margin-right: 2%;
  padding: 1%;
  border-radius: 3px;
  width: 32%;
  float: left;
  height: auto;
  border-radius: 10px;
}
.column:last-of-type {
  margin-right: 0;
}
.column .column-title {
  font-weight: bold;
  margin: 5px 0 20px;
}
.column .card {
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
.column .card.selected {
  -webkit-transform: scale(1.15);
  transform: scale(1.15);
  z-index: 1;
}
.column textarea {
  border: none;
  resize: vertical;
  display: block;
  width: 100%;
  margin-bottom: 10px;
  padding: 20px;
}
.column textarea:focus {
  outline: none;
}

.scroll {
  overflow: auto;
  height: 18vh;
}

.trans {
  background: transparent;
}
</style>

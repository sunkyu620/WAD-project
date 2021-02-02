<template>
  <div class="area">
    <ul class="circles">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>

      <!-- to redirect to sign in page -->
      <div class="d-flex justify-content-end">
        <div id="sign-up">
          <button
            type="button"
            class="btn btn-primary"
            @click="$router.push('/')"
          >
            Sign Up
          </button>
        </div>
      </div>

      <div class="human">
        <img class="person" src="../assets/images/working_person.png" />
      </div>

      <div class="container-fluid" id="outer-box">
        <div class="logo">
          <img
            class="smoolife"
            src="../assets/images/smoolife_final.png"
            style="width:100%; height:80%;"
          />
        </div>

        <h2>Sign In</h2>
        <!-- <form name="signin"> -->
        <div class="email">
          <div class="input-group-prepend">
            <label class="sr-only" for="inlineFormInputGroupUsername"
              >Username</label
            >
            <div class="input-group">
              <div class="input-group-prepend">
                <div class="input-group-text">
                  <i class="material-icons">perm_identity</i>
                </div>
                <input
                  type="text"
                  class="form-control"
                  id="inlineFormInputGroupUsername"
                  placeholder="Username"
                  autocomplete="username"
                  v-model="username"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="password">
          <div class="input-group-prepend">
            <label class="sr-only" for="inlineFormInputGroupPassword"
              >Password</label
            >
            <div class="input-group">
              <div class="input-group-prepend">
                <div class="input-group-text">
                  <i class="material-icons">lock</i>
                </div>
                <input
                  type="password"
                  class="form-control"
                  id="inlineFormInputGroupPassword"
                  placeholder="Password"
                  autocomplete="current-password"
                  v-model="password"
                />
              </div>
            </div>
          </div>
        </div>
        <button type="ssw" class="button" @click="login()">Login</button><br />
        <!-- </form> -->
      </div>
    </ul>
  </div>
</template>

<script>
require("@/assets/styles/login.css");

export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    login() {
      let creds = JSON.parse(window.localStorage.getItem(this.username));
      if (creds == null) {
        // invalid username
        console.log("invalid username");
        alert("Invalid username or password. Please try again.");
      } else {
        // valid username
        if (this.password != creds["Password"]) {
          // wrong password
          alert("Invalid username or password. Please try again.");
        } else {
          // login
          window.localStorage.setItem("username", this.username);
          this.$router.push({ name: "Home" });
        }
      }
    }
  },
  mounted() {
    if (localStorage.getItem("reloaded")) {
      localStorage.removeItem("reloaded");
    } else {
      localStorage.setItem("reloaded", "1");
      location.reload();
    }
  }
};
</script>

<style scoped>
#sign-up {
  margin-top: 20px;
  margin-right: 20px;
  text-align: right;
}
</style>

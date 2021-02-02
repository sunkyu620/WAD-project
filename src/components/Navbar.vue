<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">
      <img src="@/assets/images/smoolife.png" alt="SMOOLIFE" style="width: 7em"
    /></a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto mt-2">
        <li class="nav-item">
          <span class="nav-link"><b-link :to="'Home'">Home</b-link></span>
        </li>
        <li class="nav-item">
          <span class="nav-link"><b-link :to="'Jobs'">Jobs</b-link></span>
        </li>
        <li class="nav-item">
          <span class="nav-link"
            ><b-link :to="'ModulePlanner'">Mod Planner</b-link></span
          >
        </li>
      </ul>

      <div class="justify-content-end mt-2">
        <button type="button" class="btn btn-light ml-2">
          <b-link :to="'Settings'">Settings</b-link>
        </button>
        <button type="button" class="btn btn-light ml-2">
          <b-link :to="'Login'">Sign Out</b-link>
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style scoped>
.navbar {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
  margin-bottom: 0px;
  display: block;
}
</style>

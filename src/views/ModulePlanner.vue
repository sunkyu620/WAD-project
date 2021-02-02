<template>
  <div>
    <Navbar />

    <div class="container">
      <div class="row">
        <div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
          <Y1S1 />
        </div>
        <div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
          <Y1S2 />
        </div>
        <div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
          <Y2S1 />
        </div>
        <div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
          <Y2S2 />
        </div>
        <div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
          <Y3S1 />
        </div>
        <div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
          <Y3S2 />
        </div>
        <div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
          <Y4S1 />
        </div>
        <div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
          <Y4S2 />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Y1S1 from "@/components/Y1S1";
import Y1S2 from "@/components/Y1S2";
import Y2S1 from "@/components/Y2S1";
import Y2S2 from "@/components/Y2S2";
import Y3S1 from "@/components/Y3S1";
import Y3S2 from "@/components/Y3S2";
import Y4S1 from "@/components/Y4S1";
import Y4S2 from "@/components/Y4S2";

export default {
  name: "Important",
  components: {
    Navbar,
    Y1S1,
    Y1S2,
    Y2S1,
    Y2S2,
    Y3S1,
    Y3S2,
    Y4S1,
    Y4S2
  },
  mounted() {
    if (localStorage.getItem("reloaded1")) {
      localStorage.removeItem("reloaded1");
    } else {
      localStorage.setItem("reloaded1", "1");
      location.reload();
    }
  }
};
</script>

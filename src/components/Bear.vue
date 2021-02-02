<template>
  <div>
    <svg id="bear" width="700px" viewBox="0 0 1e3 290">
      <g transform="matrix(.8 0 0 .8 141 -270)">
        <g transform="translate(15,173)" stroke="#000">
          <path
            d="m20 494 1e3 0.03s53-55-10-67c0 0-44-54-120-47-77 8-117-41-117-41s-325-294-626 3l-168 63s-56-38-147 88z"
            fill="#f2f2f2"
            stroke-dashoffset="232"
            stroke-linecap="square"
            stroke-linejoin="round"
            stroke-width="5"
            style="paint-order:fill markers stroke"
          />
          <path
            d="m398 492s-12-78 243-86"
            fill="#f2f2f2"
            stroke-dashoffset="232"
            stroke-linecap="square"
            stroke-linejoin="round"
            stroke-width="5"
            style="paint-order:fill markers stroke"
          />
          <g transform="translate(28)" stroke-width="4">
            <path d="m932 426s14-0.6 16-6" fill="none" />
            <path d="m1e3 435s-22 14 6 31c0 0 15-21-6-31z" />
            <path d="m837 435s-4-10-4-12 17 4 22 8" fill="none" />
          </g>
        </g>
      </g>
    </svg>
  </div>
</template>

<script>
import { gsap } from "gsap";

export default {
  name: "Bear",
  mounted: function() {
    (() => {
      gsap.to("#bear", {
        left: 0,
        duration: 4
      });
    })();
  }
};
</script>

<style scoped>
b-col {
  overflow: scroll;
}

svg {
  left: 50%;
  top: -1em;
  width: 30vw;
  position: absolute;
  transform: scaleX(-1);
}
</style>

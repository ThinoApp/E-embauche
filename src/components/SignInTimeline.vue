<template>
  <div
    class="timeline-container"
    data-aos="fade-down"
    data-aos-delay="600"
    data-aos-duration="300"
  >
    <h2>Les étapes de l'inscription</h2>
    <div class="timeline">
      <div class="container active">
        <div class="content">
          <h3>TYPE</h3>
        </div>
      </div>
      <div class="container">
        <div class="content">
          <h3>VOS INFORMATIONS</h3>
        </div>
      </div>
      <div class="container">
        <div class="content">
          <h3>CONFIRMATION</h3>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["stepOneStatus", "stepTwoStatus", "stepThreeStatus"],
  updated() {
    if (this.stepOneStatus) {
      document.querySelector(".container:nth-child(2)").classList.add("active");
    }
    // if (this.stepTwoStatus) {
    //   document.querySelector(".container:nth-child(2)").classList.add("active");
    // }
    // if (this.stepThreeStatus) {
    //   document.querySelector(".container:nth-child(3)").classList.add("active");
    // }
  },
};
</script>
<style lang="scss" scoped>
.timeline-container {
  align-self: flex-start;
  margin-left: 1em;
}
.timeline {
  position: relative;
  max-width: 20vw;
  margin-top: 1em;
}
.timeline::after {
  content: "";
  position: absolute;
  width: 5px;
  top: 0;
  bottom: 0;
  background-color: white;
}

.container {
  padding: 0px 20px;
  position: relative;
  min-height: 52px;
  &::before {
    content: "";
    width: 100%;
    height: 100%;
    border-left: 5px solid #fada61;
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
    transition: 0.5s;
    transform-origin: top center;
    transform: scaleY(0);
  }
  &:last-child {
    min-height: auto;
  }
  &.active h3 {
    color: #fada61;
  }

  &.active::before {
    content: "";
    width: 100%;
    height: 100%;
    border-left: 5px solid #fada61;
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
    transform: scaleY(1);
  }
  &.active::after {
    background-color: #fada61;
  }
}

.container::after {
  content: "";
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
  top: 0;
  left: -7.5px;
  z-index: 1;
}

h3 {
  font-size: 1em;
  color: white;
  font-family: Raleway;
  font-weight: normal;
}
h2 {
  color: #fada61;
  font-family: Raleway;
  font-weight: normal;
}
</style>

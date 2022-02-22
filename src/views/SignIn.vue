<template>
  <div class="main">
    <img
      src="../assets/images/HeaderVector.png"
      alt="vector icon"
      class="vector-icon"
    />
    <header>
      <div>
        <h2 class="title">Entretien d'embauche</h2>
      </div>
      <TheHeader />
    </header>
    <div class="card-container">
      <SignInCardLeft v-on:stepOneDone="updateStepOneStatus($event)" />
      <SignInCardRight />
      <SignInTimeline
        :stepOneStatus="stepOneStatus"
        :stepTwoStatus="stepOneStatus"
        :stepThreeStatus="stepOneStatus"
      />
    </div>
  </div>
</template>
<script>
import TheHeader from "@/components/TheHeader.vue";
import SignInCardLeft from "@/components/SignInCardLeft.vue";
import SignInCardRight from "@/components/SignInCardRight.vue";
import SignInTimeline from "@/components/SignInTimeline.vue";
export default {
  components: {
    TheHeader,
    SignInCardLeft,
    SignInCardRight,
    SignInTimeline,
  },
  data() {
    return {
      stepOneStatus: false,
      stepTwoStatus: false,
      stepThreeStatus: false,
    };
  },
  methods: {
    updateStepOneStatus(state) {
      this.stepOneStatus = state;
    },
  },
};
</script>
<style lang="scss" scoped>
$primary: #1f187f;
$secondary: #cc77c9;

.main {
  background: linear-gradient(to top right, $secondary, $primary);
  height: 100vh;
  width: 100vw;
  padding-top: 0.5em;
  overflow: hidden;
}
header {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.title {
  color: white;
  font-family: "Apercu pro";
  font-size: 1em;
  padding-left: 1em;
}

.vector-icon {
  position: absolute;
  bottom: -10%;
  right: -5%;
  width: 35%;
}
.card-container {
  max-width: 100vw;
  max-height: 80vh;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 3rem;
  margin-left: 6em;
}
</style>

<template>
  <div class="main">
    <div class="leftComponent">
      <img src="../assets/Thino/pc.png" alt="logo" class="logo" />
      <img src="../assets/Thino/lineStyle.png" alt="lineStyle" class="lineStyle" />
      <h1 class="title">E-BIBLIOTHEQUE</h1>
    </div>
    <Login @signUp-event="updateLoginMode" v-if="loginMode" />
    <SignUp @login-event="updateSignUpMode" v-if="!loginMode" :updateLoginMode="updateLoginMode" />
  </div>
</template>
<script>
import Login from "../components/Login";
import SignUp from "../components/SignUp";
export default {
  name: "Accueil",
  components: {
    Login,
    SignUp
  },
  data() {
    return {
      loginMode: true
    };
  },
  methods: {
    updateLoginMode(payload) {
      this.loginMode = payload.value;
      console.log("io....", this.loginMode);
    }
  }
};
</script>
<style  lang="scss">
$primary: #2b5876;
$secondary: #4e4376;
$third: #8af7fd;
@keyframes bounce {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
.main {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top left, $primary, $secondary);
  color: white;
  overflow: hidden;
}

.leftComponent {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 30vw;
  height: 70vh;
  margin-right: 5%;
  background: linear-gradient(to top left, #2b5876, #4e4376);
  box-shadow: -10px 13px 20px rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  position: relative;
  overflow: hidden;
}

.logo {
  width: 20vw;
}

.lineStyle {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 30vw;
  animation: bounce 2s ease-in-out;
  animation-iteration-count: infinite;
  transform-origin: left bottom;
}

.title {
  font-family: arial;
  border-bottom: 1px solid white;
}
</style>
<template>
  <div class="LoginMain">
    <h1>Simplifier vôs tâches.</h1>
    <h1>L'application qui vous sauve la mise</h1>
    <p>
      Ici vous pouvez consultez les documents
      numériques. Vous pouvez aussi emprunter
      des livres et voir les livres ou documents disponibles
      sur notre platforme
    </p>
    <h2>Authentification</h2>
    <div class="inputContainer">
      <input v-if="!show" type="text" placeholder="Votre Email" class="inputEmail" v-model="email" />
      <input
        v-if="show"
        type="password"
        name="password"
        placeholder="Mot de passe"
        class="inputPassword"
        v-model="password"
      />
      <button class="changeInputBtn" @click="updateShow()">{{labelBtn}}</button>
    </div>
    <div class="btnContainer">
      <div class="btn-login">Se connecter</div>
      <p class="signUp" @click="emitSignUpClick">Vous avez déja un compte?</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      show: false,
      loginMode: true
    };
  },
  methods: {
    updateShow() {
      this.show = !this.show;
    },
    emitSignUpClick() {
      this.loginMode = !this.loginMode;
      this.$emit("signUp-event", { value: this.loginMode });
    }
  },
  computed: {
    labelBtn() {
      if (!this.show) {
        return "Mot de passe";
      } else {
        return "E-mail";
      }
    }
  }
};
</script>
<style scoped lang="scss">
$primary: #2b5876;
$secondary: #4e4376;
$third: #8af7fd;

@mixin pseudo-pos {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

@keyframes slide {
  0% {
    width: 10vw;
  }
  100% {
    width: 100%;
  }
}

@keyframes show {
  from {
    transform-origin: left center;
    transform: scaleX(0);
  }
  to {
    transform-origin: left center;
    transform: scaleX(1);
  }
}
@keyframes showWithScale {
  from {
    transform: scale(0) rotate(-1turn) translate(-200%);
    opacity: 0;
  }
  to {
    transform: scale(1) rotate(0turn) translate(0);
    opacity: 1;
  }
}

@keyframes translateButton {
  0% {
    left: 0;
  }
  100% {
    left: 71.5%;
  }
}

@keyframes translateLink {
  0% {
    transform: translate(-100%);
    opacity: 0;
  }
  100% {
    transform: translate(0);
    opacity: 1;
  }
}

.LoginMain {
  height: 50vh;
  width: 35vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  animation: show 500ms ease-in-out;
}
h1 {
  font-size: 2em;
  font-family: arial, Georgia, "Times New Roman", Times, serif;
  text-align: justify;
}
h2 {
  font-family: arial;
  margin-top: 1vh;
}
p {
  font-family: arial;
  font-size: 1em;
  line-height: 1.5em;
  margin-top: 10px;
}
.inputContainer {
  align-self: flex-start;
  width: 10vw;
  min-height: 5vh;
  border: 1px solid white;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1em;
  animation: slide 500ms ease-in-out 500ms;
  animation-fill-mode: forwards;
  position: relative;
}

.inputEmail {
  width: 100%;
  background: transparent;
  border: none;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  padding-left: 1em;
  color: white;
  animation: show 400ms ease-in-out;
  &::placeholder {
    color: white;
  }
}
.inputPassword {
  width: 100%;
  background: transparent;
  position: absolute;
  border: none;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  padding-left: 1em;
  color: white;
  animation: show 400ms ease-in-out;
  &::placeholder {
    color: white;
  }
}

.changeInputBtn {
  position: absolute;
  background-color: $third;
  height: 6vh;
  min-height: 20px;
  width: 10vw;
  border: none;
  border-radius: 25px;
  transition: transform 400ms, background-color 300ms;
  animation: translateButton 700ms ease-in-out 500ms;
  animation-fill-mode: forwards;
  &:hover {
    transform: scale(1.15);
    background-color: rgba($color: #aafbff, $alpha: 1);
  }
  &:active {
    transition-duration: 100ms;
    transform: translateX(-50px);
  }
}
.btn-login {
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5em;
  padding-inline: 1em;
  border-radius: 2em;
  border: none;
  // background-color: $third;
  border: 1px solid white;
  transform: scale(0);
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  animation: showWithScale 700ms ease-in-out 500ms;
  animation-fill-mode: forwards;
  overflow: hidden;
  &::after {
    content: "";
    @include pseudo-pos();
    background: radial-gradient(
      circle,
      lighten($third, 5) 0%,
      darken($third, 45) 100%
    );
    opacity: 0;
    transition: opacity 300ms;
    z-index: -1;
  }
  &:hover {
    cursor: pointer;
    &::after {
      opacity: 1;
    }
  }
}

.btnContainer {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  align-self: flex-end;
  margin-top: 1vh;
}

.signUp {
  color: white;
  font-family: arial;
  margin-right: 10px;
  text-decoration: none;
  animation: translateLink 1s ease-in-out 500ms;
  animation-fill-mode: forwards;
  opacity: 0;
  transform: translate(-100%);
  width: 27vw;
  text-align: right;
  &:hover {
    cursor: pointer;
  }
}
</style>
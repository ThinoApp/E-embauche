<template>
  <div class="SignUpMain">
    <h1>Inscription</h1>
    <div class="formContainer">
      <div class="inputContainer inputContainer-1">
        <img src="../assets/Thino/feather-user.png" alt="nom-icon" class="icon" />
        <input type="text" placeholder="nom" class="input" />
      </div>
      <div class="inputContainer inputContainer-2">
        <img src="../assets/Thino/feather-user.png" alt="prenom-icon" class="icon" />
        <input type="text" placeholder="prenom" class="input" />
      </div>
      <div class="inputContainer inputContainer-3">
        <img src="../assets/Thino/feather-mail.png" alt="email-icon" class="icon" />
        <input type="text" placeholder="E-mail" class="input" />
      </div>
      <div class="inputContainer inputContainer-4">
        <img src="../assets/Thino/feather-lock.png" alt="lock-icon" class="icon" />
        <input type="password" placeholder="Mot de passe" class="input" />
      </div>
      <div class="inputContainer inputContainer-5">
        <img src="../assets/Thino/feather-lock.png" alt="confirm-lock-icon" class="icon" />
        <input type="password" placeholder="Confirmer Mot de passe" class="input" />
      </div>
    </div>
    <div class="btn-container">
      <p class="login" @click="emitLoginClick">J'ai déjà un compte</p>
      <div class="validerBtn">S'inscrire</div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    updateLoginMode: {
      type: Function
    }
  },
  methods: {
    emitLoginClick() {
      this.updateLoginMode({ value: true });
    }
  }
};
</script>
<style scoped lang="scss">
* {
  font-family: arial;
}
@keyframes showWithTranslateFromLeft {
  0% {
    transform: translateX(-100%) scale(0);
    opacity: 0;
  }
  25% {
    transform: translate(-75%) scale(0);
    opacity: 0.25;
  }
  50% {
    transform: translate(-50%) scale(0);
    opacity: 0.5;
  }
  75% {
    transform: translate(-25%) scale(0);
    opacity: 0.75;
  }
  80% {
    transform: translate(0) scale(0);
    opacity: 0.8;
  }
  100% {
    transform: translateX(0) scale(1);
    opacity: 1;
  }
}
@keyframes showWithTranslateFromRight {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
@keyframes show {
  from {
    transform: scaleX(0);
    opacity: 0;
  }
  to {
    transform: scaleX(1);
    opacity: 1;
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
.SignUpMain {
  height: 70vh;
  width: 35vw;
  animation: show 700ms ease-out;
  transform-origin: left;
  display: flex;
  flex-direction: column;
  border-radius: 2em;
}

.formContainer {
  display: flex;
  flex-direction: column;
}

.inputContainer {
  width: 80%;
  margin-top: 2vh;
  height: 6vh;
  border-radius: 2em;
  border: none;
  box-shadow: 0px 0px 12px rgba($color: #8af7fd, $alpha: 1) inset;
  padding-left: 1em;
  padding-block: 0.5em;
  background: none;
  display: flex;
  align-items: center;
  overflow: hidden;
  opacity: 0;
  transform: translate(-100%);
  .icon {
    width: 6%;
    margin-right: 0.2em;
  }
  @for $i from 1 through 5 {
    &-#{$i} {
      // animation: showWithTranslate 500ms ease-in-out #{($i * 1 / 4)}s;
      @if $i % 2 == 0 {
        animation: showWithTranslateFromLeft 1s ease-in-out #{($i * 1 / 4)}s;
      } @else {
        animation: showWithTranslateFromRight 1s ease-in-out #{($i * 1 / 4)}s;
      }
      animation-fill-mode: forwards;
    }
  }
}

.input {
  width: 100%;
  height: 100%;
  background: none;
  font-size: 1.1em;
  color: white;
  border: none;
  &::placeholder {
    color: white;
    opacity: 0.5;
    font-size: 0.8em;
  }
  &:focus {
    border: none;
  }
}
.btn-container {
  display: flex;
  align-items: center;
  margin-top: 1em;
  padding-inline-end: 20%;
  .login {
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

  .validerBtn {
    width: 200px;
    padding: 1em;
    border: 1px solid white;
    border-radius: 2em;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 1;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background: radial-gradient(
        circle,
        lighten(#8af7fd, 5) 0%,
        darken(#8af7fd, 45) 100%
      );
      transition: opacity 500ms;
      opacity: 0;
      z-index: -1;
    }
    &:hover {
      cursor: pointer;
      &::after {
        opacity: 1;
      }
    }
  }
}
</style>
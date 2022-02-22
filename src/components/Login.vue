<template>
  <div class="LoginMain">
    <img
      src="../assets/icons/fa-user-circle.png"
      alt="user-circle-icon"
      class="icons"
    />
    <h2>AUTHENTIFICATION</h2>
    <form action>
      <div class="input-group">
        <label>E-mail</label>
        <br />
        <input type="text" placeholder="E-mail" class="inputStyle" />
        <img
          src="../assets/icons/fa-envelope.png"
          alt="envelope-icon"
          class="icons-input"
        />
      </div>
      <div class="input-group">
        <label>Mot de passe</label>
        <br />
        <input
          type="password"
          placeholder="Ex: dsdsc1234*$"
          class="inputStyle"
        />
        <img
          src="../assets/icons/fa-key.png"
          alt="envelope-icon"
          class="icons-input"
        />
      </div>
      <button class="btn-login">Se connecter</button>
    </form>
  </div>
</template>
<script>
export default {
  props: ["loginShow"],
  updated() {
    this.toggleBox();
  },
  methods: {
    toggleBox() {
      const LoginMain = document.querySelector(".LoginMain");
      LoginMain.classList.toggle("show");
    },
  },
};
</script>
<style lang="scss" scoped>
.LoginMain {
  transition: 0.5s;
  transition-timing-function: ease-out;
  transform: scale(0) translate(100%);
  opacity: 0;
  height: 100%;
  width: 50%;
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 7%;
  &.show {
    transform: scale(1);
    opacity: 1;
  }
  h2 {
    font-family: Poppins;
    font-weight: normal;
    color: white;
    margin-top: 1em;
    font-size: 1.3em;
  }
  label {
    font-family: "Poppins";
    color: white;
    font-size: 1em;
    letter-spacing: 0.5px;
  }
}

.icons {
  width: 4em;
  height: 4em;
  border-radius: 10px;
  &-input {
    width: 1.3em;
  }
}

.inputStyle {
  width: 90%;
  border: none;
  background: none;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.9em;
  margin-top: 0.3em;
  margin-right: auto;
  outline: none;
  color: white;
  &::placeholder {
    color: white;
  }
}
.input-group {
  width: 21vw;
  border-bottom: 1px solid white;
  margin-top: 2em;
}

.btn-login {
  width: 100%;
  margin-top: 3em;
  padding-block: 1.2em;
  border-radius: 36px;
  border: none;
  background-color: #432957;
  color: white;
  font-family: "Poppins";
  box-shadow: 0 3px 50px rgba(0, 0, 0, 0.75);
}
</style>

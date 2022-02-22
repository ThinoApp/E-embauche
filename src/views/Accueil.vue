<template>
  <div>
    <!-- <img src="../assets/images/bg.jpg" class="bgImage" /> -->

    <div class="main">
      <section class="box right">
        <TheHeader :boxToggle="boxToggle" />
        <article>
          <h1>
            Entretien
            <br />D'embauche
          </h1>
          <p>
            Une plateforme permettant aux entreprises et employés de trouver
            chacun leurs besoins.
            <u>
              Des offres d'emploies pour les employés et différents CV
              disponibles pour les entreprises
            </u>
          </p>
          <router-link to="/SignIn" class="sign-in-btn" tag="button">
            Rejoignez-nous
          </router-link>
        </article>
        <div>
          <img
            src="../assets/images/Iconfacebook.png"
            alt="facebook icon"
            class="social-icon"
          />
          <img
            src="../assets/images/Icontwitter.png"
            alt="facebook icon"
            class="social-icon"
          />
          <img
            src="../assets/images/Iconlinkedin.png"
            alt="facebook icon"
            class="social-icon"
          />
          <img
            src="../assets/images/Iconwhatsapp.png"
            alt="facebook icon"
            class="social-icon"
          />
        </div>
      </section>
    </div>
    <Login v-bind:loginShow="LoginShow" />
  </div>
</template>
<script>
import Login from "../components/Login";
import TheHeader from "@/components/TheHeader.vue";
export default {
  data() {
    return {
      LoginShow: false,
    };
  },
  components: {
    Login,
    TheHeader,
  },
  methods: {
    boxToggle() {
      const box = document.querySelector(".right");
      box.classList.toggle("active");
      if (this.LoginShow == false) {
        document.querySelector("ul li:last-child").textContent = "FERMER";
      } else {
        document.querySelector("ul li:last-child").textContent = "se connecter";
      }
      this.LoginShow = !this.LoginShow;
    },
  },
};
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  overflow: hidden;
}
.bgImage {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
}

.main {
  background-image: url("../assets/images/bg.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row-reverse;
  & .box {
    flex: 0.5;
    padding: 1em;
  }
}

.right {
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(25px);
  -moz-backdrop-filter: blur(25px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: 1s;
  transition-duration: 500ms;
  transition-timing-function: ease-out;
  &.active {
    background-color: rgba(0, 0, 0, 0.5);
    transform: translateX(-97%);
  }
}

article {
  align-self: center;
  width: 65%;
  position: relative;
  top: -5%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  & h1 {
    color: white;
    font-family: "Poppins";
    font-weight: bold;
    font-size: 2em;
  }
  & p {
    color: white;
    font-family: "Arial";
    font-size: 0.75em;
    line-height: 1.5em;
    letter-spacing: 0.5px;
  }
}

ul {
  display: flex;
  li {
    list-style-type: none;
    margin-right: 2%;
    font-family: "Apercu Pro";
    color: white;
    font-size: 0.8em;
    &:hover {
      cursor: pointer;
    }
    &:last-child {
      margin-left: auto;
    }
    &.active {
      color: #fada61;
      border-bottom: 2px solid #fada61;
      text-align: center;
      padding-inline: 0.5em;
    }
  }
}

.sign-in-btn {
  background-color: #a356f2;
  border-radius: 10px;
  border: none;
  padding: 1em;
  font-size: 0.9em;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  box-shadow: 0 3px 31px rgba(0, 0, 0, 0.63);
  margin-top: 2em;
  align-self: flex-end;
  &:hover {
    cursor: pointer;
  }
}

.social-icon {
  width: 2.5em;
  margin-right: 0.5em;
}
</style>

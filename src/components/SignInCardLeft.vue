<template>
  <section class="card--left" data-aos="zoom-in" data-aos-duration="500">
    <div class="card-front">
      <img
        src="../assets/icons/fa-user-tie.png"
        alt="user-circle"
        class="icon"
      />
      <h2>Candidats</h2>
      <p class="description" data-aos="fade-up" data-aos-duration="1000">
        En s'inscrivant en tant que candidat, vous aurez la possibilité de
        visionner tous les offres d'emploies disponibles et qui correspondent le
        mieux à vos capacités. Outre, vous pourrez aussi participé aux
        différents interview et entretien prévu par différentes sociétés ou
        entreprisess via cette plateforme.
      </p>
      <p class="description-2">
        Trouver rapidement du travail qui vous correspond au mieux à vos
        compétences
      </p>
      <button class="btn-sign-in">S'incrire</button>
    </div>
    <div v-if="!showPage" class="card-back">
      <img
        src="../assets/icons/fa-user-tie-gradient.png"
        alt="user-circle"
        class="icon"
      />
      <h2>Inscription en <br />candidat</h2>
      <form>
        <div class="input-container">
          <input
            autocomplete="off"
            v-model="name"
            type="text"
            placeholder="Votre nom complet"
            name="name"
            @blur="checkNom()"
          />
          <img
            src="../assets/icons/fa-user-alt.png"
            alt="user-circle"
            class="icon--label"
          />
        </div>
        <div class="input-container">
          <input
            autocomplete="true"
            v-model.lazy="email"
            type="text"
            placeholder="Adresse email"
            @blur="checkEmail()"
          />
          <img
            src="../assets/icons/fa-envelope-grey.png"
            alt="envelope"
            class="icon--label"
          />
        </div>
        <div class="input-container">
          <input
            autocomplete="true"
            v-model.lazy="password"
            type="password"
            placeholder="Mot de passe"
            @blur="checkPassword()"
          />
          <img
            src="../assets/icons/fa-key-grey.png"
            alt="key"
            class="icon--label"
          />
        </div>
      </form>
      <p class="notice">
        En s'inscrivant, vous accepterez nos
        <span @click="checkSign">termes et conditions</span>
      </p>
      <p class="openWith">
        <span class="tirer"></span>
        Ou inscrivez-vous avec
        <span class="tirer"></span>
      </p>
      <div class="socialContainer">
        <div class="socialIcon-container">
          <img
            src="../assets/icons/fa-facebook.png"
            alt="facebook-icon"
            class="icon--social"
          />
        </div>
        <div class="socialIcon-container">
          <img
            src="../assets/icons/fa-google.png"
            alt="google-icon"
            class="icon--social"
          />
        </div>
        <div class="socialIcon-container">
          <img
            src="../assets/icons/fa-linkedin.png"
            alt="facebook-icon"
            class="icon--social"
          />
        </div>
      </div>
      <p class="notice">
        Avez-vous déjà un compte?
        <span>se connecter</span>
      </p>
      <div class="bottom-bar" />
    </div>
    <div v-else class="card-back">
      <div class="content" data-aos="fade-in" data-aos-duration="700">
        <img
          src="../assets/icons/fa-user-tie-gradient.png"
          alt="user-circle"
          class="icon"
        />
        <h2>Inscription en <br />candidat</h2>
        <router-link to="Profile">
          <img
            src="../assets/icons/fa-check.png"
            alt="check"
            class="icon--check"
          />
        </router-link>
        <p class="validation-message">
          Valider votre inscription avec l'email que nous vous avons envoyé
        </p>
        <img
          src="../assets/icons/metro-spinner4.png"
          alt="spinner"
          class="icon--spinner"
        />
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      signSuccess: false,
      showPage: false,
      name: "",
      email: "",
      password: "",
    };
  },

  methods: {
    checkNom() {
      if (this.name == "") {
        document
          .querySelector(".input-container:nth-child(1)")
          .classList.add("error");
        this.signSuccess = false;
      } else {
        document
          .querySelector(".input-container:nth-child(1)")
          .classList.remove("error");
        this.signSuccess = true;
      }
    },
    checkEmail() {
      if (this.email == "") {
        document
          .querySelector(".input-container:nth-child(2)")
          .classList.add("error");
        this.signSuccess = false;
      } else {
        document
          .querySelector(".input-container:nth-child(2)")
          .classList.remove("error");
        this.signSuccess = true;
      }
    },
    checkPassword() {
      if (this.password == "") {
        document
          .querySelector(".input-container:nth-child(3)")
          .classList.add("error");
        this.signSuccess = false;
      } else {
        document
          .querySelector(".input-container:nth-child(3)")
          .classList.remove("error");
        this.signSuccess = true;
      }
    },
    checkSign() {
      this.showPage = this.signSuccess;
      console.log(this.showPage);
      if (this.showPage) {
        this.$emit("stepOneDone", true);
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.card--left {
  width: 21rem;
  height: 80vh;
  position: relative;
  margin-inline: 2em;
}

.card-front,
.card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(25px);
  -webkit-backdrop-filter: blur(20);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em;
  backface-visibility: hidden;
  transition: all 0.6s linear;
  & .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1em;
    backface-visibility: hidden;
    transition: all 0.6s linear;
  }

  & .description {
    color: white;
    font-family: Raleway;
    font-weight: 350;
    text-align: justify;
    margin-top: 1em;
    font-size: 0.8em;
    letter-spacing: 2px;
    line-height: 1.5em;
    &-2 {
      font-size: 0.9em;
      color: white;
      margin-top: 2em;
      text-align: center;
      font-family: "Cera pro";
    }
  }
}

.card-front {
  transform: perspective(600px) rotateY(0deg);
  & h2 {
    color: white;
    font-family: Raleway;
    font-weight: normal;
  }
}

.card-back {
  background-color: white;
  opacity: 1;
  transform: perspective(600px) rotateY(180deg);
  & h2 {
    color: black;
    font-family: Raleway;
    font-weight: normal;
    font-size: 1em;
    text-align: center;
  }
}
.card--left:hover > .card-front {
  transform: perspective(600px) rotateY(-180deg);
}

.card--left:hover > .card-back {
  opacity: 1;
  transform: perspective(600px) rotateY(0deg);
}

@keyframes rotation {
  from {
    transition: 1s;
    transform: rotate(0deg);
  }

  to {
    transition: 1s;
    transform: rotate(360deg);
  }
}
.icon {
  width: 20%;
  &--label {
    width: 18px;
  }
  &--social {
    height: 25px;
  }
  &--check {
    width: 25px;
    margin-top: 3rem;
  }
  &--spinner {
    width: 25px;
    margin-top: 3rem;
    animation: rotation;
    animation-duration: 1s;
    animation-iteration-count: infinite;
  }
}

.btn-sign-in {
  margin-top: 20%;
  padding-block: 0.5em;
  width: 65%;
  border: none;
  background: linear-gradient(to left, #8036c5, #4240bb);
  border-radius: 10px;
  color: white;
  font-family: Poppins;
  font-size: 1.1em;
  box-shadow: 0px 0px 35px rgba(0, 0, 0, 0.5);
}

form {
  width: 100%;
  margin-top: 0.7em;
}
$inputContent: ".input-container";
.input-container {
  min-width: 100%;
  display: flex;
  align-items: center;
  background-color: white;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.2);
  padding: 0.4em 1em;
  border-radius: 7px;
  margin-top: 0.8em;
  transition: 0.5s;
  transform: scale(1);
  &:hover {
    transform: scale(1.3);
  }
  & input {
    width: 100%;
    margin-right: 1em;
    border: none;
    color: #a843bb;
    outline: none;

    &::placeholder {
      color: #afafaf;
      font-family: Raleway;
    }
  }
}

.notice {
  font-family: "Raleway";
  color: rgba(0, 0, 0, 0.8);
  font-size: 0.7em;
  margin-block: 1em;
  font-weight: 600;
  & span {
    color: #a843bb;
    &:hover {
      cursor: pointer;
    }
  }
}

.tirer {
  width: 50px;
  height: 0.1em;
  background-color: #555151;
  display: inline-block;
  margin-inline: 0.3em;
}

.openWith {
  color: #555151;
  font-size: 0.9em;
  font-family: "Poppins";
  font-weight: 500;
  display: flex;
  align-items: center;
}

.socialContainer {
  width: 80%;
  display: flex;
  justify-content: space-between;
  margin-top: 1em;
}
.socialIcon-container {
  width: 30px;
  height: 30px;
  display: flex;
  padding: 1.5em;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(109, 108, 108, 0.5);
  border-radius: 10px;
}
.bottom-bar {
  width: 70%;
  height: 0.4em;
  border-radius: 20px;
  margin-top: auto;
  background-color: #6d6c6c;
}

.error {
  box-shadow: 0px 0px 12px rgba(255, 0, 0, 0.8);
}

.validation-message {
  text-align: center;
  font-family: Poppins;
  margin-top: 2em;
  color: #a843bb;
}
</style>

<template>
  <!-- <h2>Suggestion</h2> -->
  <div class="suggestion-container" data-aos="fade-in" data-aos-duration="1000">
    <img
      src="@/assets/images/girlImage.png"
      alt="girl image illustration"
      class="girlImage"
    />
    <div class="left-box">
      <h1>DEV</h1>
      <h2>
        Développeur <br />
        Fullstack
      </h2>
      <p>
        Création d'un site web pour la gestion de produit <br />d'une société
        particulier
      </p>
      <div class="critere-container">
        <h3>Critères de sélection</h3>
        <ul>
          <li>
            <p>
              <font-awesome-icon icon="check-circle" color="white" />
              Expérience:
              <span>3 ans minimum</span>
            </p>
          </li>
          <li>
            <p>
              <font-awesome-icon icon="check-circle" color="white" />
              Technologie:
              <span>MERN</span>
            </p>
          </li>
        </ul>
      </div>
      <button>Postuler pour ce poste</button>
    </div>
    <div class="right-box">
      <font-awesome-icon icon="award" size="4x" class="icon--award" />
      <h2>$2000</h2>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
h2 {
  color: white;
  margin: 0;
  padding: 0;
  font-size: 1.2em;
  margin-top: 2.3em;
}
.suggestion-container {
  width: 100%;
  height: 35vh;
  margin-top: 1em;
  background: linear-gradient(
    to bottom right,
    50%rgba (0, 0, 0, 0),
    100%rgba (255, 255, 255, 0.2)
  );
  position: relative;
  display: flex;
}
.girlImage {
  width: 100%;
  height: 100%;
  border-top-right-radius: 10px;
  filter: contrast(100%) brightness(90%) saturate(120%) sepia(12%);
  position: absolute;
  object-fit: cover;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.left-box {
  flex: 3;
  z-index: 1;
  & h1 {
    color: black;
    font-family: "Poppins";
    text-shadow: 0 3px 6px black;
    background: white;
    padding: 0.3em;
    font-size: 1.3em;
    border-radius: 5px;
    float: left;
    margin-right: 0.5em;
    & + h2 {
      font-size: 1em;
      display: inline-block;
      color: white;
      font-family: Raleway;
      & + p {
        clear: both;
        color: white;
        font-size: 0.8em;
        font-family: Raleway;
      }
    }
  }
}

.right-box {
  flex: 1;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & h2 {
    color: white;
    font-family: "Arial Rounded MT";
    text-shadow: 0 3px 6px black;
    margin-top: 0.5em;
  }
}

.icon {
  &--award {
    color: white;
    filter: drop-shadow(1px 2px 4px black);
  }
}

.critere-container {
  margin-top: 0.3em;
  & h3 {
    color: white;
    font-weight: 300;
    font-size: 0.9em;
  }
}

ul {
  & li {
    list-style-type: none;
    margin-block: 0.3em;
    & p {
      color: white;
      font-family: Raleway;
      font-size: 0.8em;
      & span {
        color: #1e1842;
        font-weight: 700;
      }
    }
  }
}
button {
  color: #fe92e3;
  background: rgba(0, 0, 0, 0.8);
  border: none;
  border-radius: 10px;
  padding: 0.5em;
  font-size: 0.8em;
  position: absolute;
  bottom: 1em;
}
</style>

<template>
  <div class="nav-bar-container">
    <div class="user-info-container">
      <font-awesome-icon
        icon="user-circle"
        size="3x"
        :style="{ color: 'white' }"
      />
      <div class="user-info-content">
        <h2>Rakotomalala</h2>
        <p class="email">rakotomalalathino@gmail.com</p>
        <p>Compléter mon profile</p>
      </div>
    </div>
    <div class="menu-container">
      <p class="menu-title">Menu</p>
      <ul>
        <li class="active">
          <div>
            <font-awesome-icon icon="border-all" size="lg" class="icon--menu" />
          </div>
          <p>Tableau de bord</p>
        </li>
        <li>
          <div>
            <font-awesome-icon
              icon="shopping-bag"
              size="lg"
              class="icon--menu"
            />
          </div>
          <p>Offres postulés</p>
        </li>
        <li>
          <div>
            <font-awesome-icon icon="microphone" size="lg" class="icon--menu" />
          </div>
          <p>Entretien prévus</p>
        </li>
        <li>
          <div>
            <font-awesome-icon icon="heart" size="lg" class="icon--menu" />
          </div>
          <p>Mes favoris</p>
        </li>
        <li>
          <div>
            <font-awesome-icon icon="chalkboard" size="lg" class="icon--menu" />
          </div>
          <p>Paramètres</p>
        </li>
      </ul>
    </div>
    <div class="menu-container">
      <p class="menu-title">Autres</p>
      <ul>
        <li class="active">
          <div>
            <font-awesome-icon icon="border-all" size="lg" class="icon--menu" />
          </div>
          <p>Tableau de bord</p>
        </li>
        <li>
          <div>
            <font-awesome-icon
              icon="shopping-bag"
              size="lg"
              class="icon--menu"
            />
          </div>
          <p>Offres postulés</p>
        </li>
        <li>
          <div>
            <font-awesome-icon icon="microphone" size="lg" class="icon--menu" />
          </div>
          <p>Entretien prévus</p>
        </li>
        <li>
          <div>
            <font-awesome-icon icon="heart" size="lg" class="icon--menu" />
          </div>
          <p>Mes favoris</p>
        </li>
        <li>
          <div>
            <font-awesome-icon icon="chalkboard" size="lg" class="icon--menu" />
          </div>
          <p>Paramètres</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
p {
  margin: 0 !important;
}
.nav-bar-container {
  width: 20%;
  min-height: 100%;
  padding: 0.5em;
  position: sticky;
  top: -80px;
  overflow: hidden;
  transition: 0.5s;
  &.hide {
    width: 6.5%;
    & li {
      transition: 1s;
    }
  }
}

.user-info-container {
  width: 240px;
  display: flex;
  position: relative;
  &::after {
    content: "";
    width: 80%;
    border: 0.2px solid rgba(255, 255, 255, 0.2);
    position: absolute;
    bottom: -10px;
    margin-left: 10%;
  }
}
.user-info-content {
  margin-left: 0.5em;
  & h2 {
    color: white;
    font-family: Poppins;
    font-size: 0.8em;
    margin: 0;
  }

  & p.email {
    color: #e88e71;
    font-family: Raleway;
    font-size: 0.7em;
  }
  & p:last-child {
    color: #7accfc;
    font-family: "Raleway";
    font-size: 0.8em;
  }
}

.icon {
  &--menu {
    margin-right: 6px;
    color: rgba(255, 255, 255, 0.9);
  }
}

.menu-container {
  margin-top: 10px;
  padding: 1em;
  &::after {
    content: "";
    position: absolute;
    top: 20%;
    bottom: 20%;
    width: 1px;
    right: 0;
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0px 0px 12px white;
  }
  & .menu-title {
    color: white;
    font-family: "Apercu pro";
    margin-bottom: 2em;
  }
  & ul {
    padding: 0;
    margin: 1em 0 0 1em;
  }
  & ul li {
    width: 210px;
    display: flex;
    list-style-type: none;
    color: white;
    align-items: center;
    font-family: "Raleway";
    font-size: 0.8em;
    font-weight: normal;
    padding: 0.8em;
    margin-top: 0.2em;
    position: relative;
    overflow: hidden;
    border-radius: 15px;
    &::before {
      content: "";
      width: 100%;
      height: 100%;
      background: #806fff;
      position: absolute;
      top: 0;
      left: 0;
      transform: translateX(-101%);
      transition: 0.6s;
      z-index: -1;
    }
    &:hover::before {
      content: "";
      width: 100%;
      height: 100%;
      background: #806fff;
      position: absolute;
      top: 0;
      left: 0;
      transform: translateX(0%);
      box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.699);
      z-index: -1;
    }
    & div {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 20%;
    }
    & p {
      margin-left: auto;
      margin-right: auto;
      font-family: Raleway;
      font-weight: 300;
      letter-spacing: 1px;
    }
    &:hover {
      cursor: pointer;
    }
    & img {
      margin-right: 2em;
    }
  }
}
</style>

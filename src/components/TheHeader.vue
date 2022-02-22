<template>
  <div class="header-container">
    <nav>
      <ul>
        <li>
          <div class="active" @click="switchActive">Accueil</div>
        </li>
        <li>
          <div @click="switchActive">A propos</div>
        </li>
        <li>
          <div @click="switchActive">Aide</div>
        </li>
        <li @click="boxToggle">
          <div>Se connecter</div>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
export default {
  props: ["boxToggle"],

  methods: {
    switchActive(e) {
      const liste = document.querySelectorAll("li div");
      liste.forEach((element) => {
        element.classList.remove("active");
      });
      e.target.classList.add("active");
    },
  },
};
</script>
<style lang="scss" scoped>
.header-container {
  transition: 0.3s;
  width: 100%;
  &.hide {
    transform: translateY(-20px);
    opacity: 0;
  }
}

ul {
  display: flex;
  li {
    width: 15%;
    list-style-type: none;
    font-family: "Apercu Pro";
    color: white;
    font-size: 0.8em;
    padding-bottom: 0.5em;
    text-align: center;
    transition: 0.2s ease-in;
    position: relative;
    margin-inline: 10px;
    box-sizing: content-box;
    & div {
      width: 100%;
      height: 25px;
      position: relative;
      &:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-bottom: 2px solid #fada61;
        transition: 0.3s ease-in-out;
        transform: scaleX(0);
      }
    }
    &:hover {
      cursor: pointer;
    }
    &:last-child {
      margin-left: auto;
    }
    & div.active {
      color: #fada61;
      &:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-bottom: 2px solid #fada61;
        transform: scaleX(1);
      }
    }
  }
}
</style>

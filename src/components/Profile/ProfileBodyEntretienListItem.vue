<template>
  <div
    class="entretienCard-container"
    data-aos="fade-left"
    :data-aos-delay="time"
  >
    <div class="top-container">
      <img src="../../assets/images/backgroundCard.jpg" alt="hiring image" />
      <div class="top-card">
        <p class="prix">$1000</p>
        <div class="icon-container">
          <font-awesome-icon icon="heart" size="lg" class="icon--heart" />
        </div>
      </div>
      <div class="top-card">
        <p class="entreprise">E-Tech</p>
        <p>Développeur Odoo</p>
      </div>
    </div>
    <div class="bottom-container">
      <h3>A propos du poste</h3>
      <p class="description">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio hic quae
        beatae laborum!
      </p>
      <div class="date-container">
        <font-awesome-icon
          icon="calendar-alt"
          size="x"
          class="icon--calendar"
        />
        <p><span>De</span><br />12 janvier 2022</p>
        <p><span>Au</span><br />23 Févriere 2022</p>
      </div>
      <div class="location-container">
        <font-awesome-icon
          icon="map-marker-alt"
          size="x"
          class="icon--map-marker"
        />
        <p><span>Location</span> <br />Ivandry, Antananarivo Madagascar</p>
      </div>
    </div>
    <div class="hidden-container">
      <div class="animated-card">
        <font-awesome-icon
          icon="microphone"
          class="icon--microphone"
          size="2x"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["time"],
};
</script>
<style lang="scss">
.entretienCard-container {
  min-width: 20vw;
  max-width: 20vw;
  height: 55vh;
  background: linear-gradient(rgba(0, 0, 0, 0.5) 10%, rgba(0, 0, 0, 0.7) 80%);
  overflow: hidden;
  position: relative;
  border-radius: 10px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.5);
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0.5em;
  // margin-right: 1em;
  &:hover img {
    transform: scale(1.5);
  }
  & .hidden-container {
    position: absolute;
    bottom: -0.1em;
    left: 0;
    width: 100%;
    height: 62%;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    background-color: rgba(0, 0, 0, 0.2);
    transform: scaleY(0);
    transform-origin: bottom center;
    transition: 0.5s;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  &:hover {
    & .top-container::after {
      content: "";
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      backdrop-filter: blur(10px);
      z-index: -1;
      opacity: 0;
      border-radius: 10px;
    }
    & .hidden-container {
      transform: scaleY(1);
      backdrop-filter: blur(3px);
    }
  }
  & .top-container {
    // z-index: 1;
    width: 100%;
    height: 37%;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
    padding: 0.3em;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.5);
    margin-bottom: 1em;
    &::after {
      content: "";
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      backdrop-filter: blur(10px);
      transition: 0.5s;
      z-index: -1;
      opacity: 1;
      border-radius: 10px;
    }
    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      transition: 0.5s;
      filter: brightness(50%);
    }
    & .top-card {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-family: Poppins;

      & .entreprise {
        background: rgba(55, 182, 171, 0.8);
        padding: 0.3em;
        border-radius: 5px;
        color: white;
        font-size: 1em;
        font-weight: 500;
        text-shadow: 0px 3px 12px black;
      }
      & p:last-child {
        color: lawngreen;
        text-shadow: 0px 3px 24px black;
      }
    }

    & .prix {
      height: 2em;
      display: inline-block;
      color: white;
      background-color: rgba(255, 255, 255, 0.4);
      font-family: Poppins;
      text-shadow: 0px 3px 12px black;
      padding: 0.3em;
      border-radius: 5px;
    }

    & .icon-container {
      height: 2em;
      background-color: rgba(255, 255, 255, 0.4);
      padding-inline: 0.5em;
      border-radius: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  & .bottom-container {
    width: 100%;
    height: 62%;
    font-family: "Apercu pro";
    position: relative;

    & h3 {
      color: white;
      font-size: 1em;
      margin-bottom: 0.3em;
    }
    & .description {
      font-family: Poppins;
      font-size: 0.65em;
      color: white;
      text-align: justify;
      font-weight: 300;
    }
    & .date-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 0.5em;
      & p {
        font-family: "Poppins";
        color: white;
        padding-left: 0.5em;
        font-size: 0.8em;
        font-weight: 300;
        & span {
          font-family: Raleway;
          font-size: 0.6em;
          color: rgba(255, 255, 255, 0.9);
        }
      }
    }
    & .location-container {
      display: flex;
      align-items: center;
      & p {
        font-family: "Poppins";
        color: white;
        padding-left: 0.5em;
        font-size: 0.7em;
        font-weight: 300;
        & span {
          font-family: Raleway;
          font-size: 0.6em;
          color: rgba(255, 255, 255, 0.9);
        }
      }
    }
  }

  @keyframes pulsation {
    to {
      transform: scale(1.4);
      opacity: 0;
    }
  }
  @keyframes pulsation2 {
    to {
      transform: scale(1.6);
      opacity: 0;
    }
  }
  & .animated-card {
    width: 5vw;
    height: 5vw;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background: violet;
    transform: scale(1);
    &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: -1;
      border-radius: 50%;
      background: rgba(238, 130, 238, 0.384);
      top: 0;
      left: 0;
      animation: pulsation 1.4s infinite ease-out;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    &::before {
      position: absolute;
      top: 0;
      left: 0;
      content: "";
      width: 100%;
      height: 100%;
      z-index: -1;
      border-radius: 50%;
      background: rgba(238, 130, 238, 0.247);
      animation: pulsation2 1.2s infinite ease-out;
    }
  }

  & .icon {
    &--heart {
      color: #fec115;
      filter: drop-shadow(0px, 1px, 12px, red);
    }
    &--calendar {
      color: white;
    }
    &--map-marker {
      color: white;
      margin-right: 0.8em;
    }
    &--microphone {
      color: white;
      animation-name: pulsation;
      animation-duration: 1s;
    }
  }
}
</style>

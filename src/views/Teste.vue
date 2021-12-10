<template>
  <div class="main">
    <div class="btn btn-default">Survoler moi</div>
    <div class="btn btn-gradient">Gradient</div>
    <div class="img">
      <img src="../assets/Thino/pc.png" alt="pc" width="100" />
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
$primary: #2b5876;
$secondary: #4e4376;
@mixin pseudo-pos {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.main {
  @include pseudo-pos;
  background-color: $primary;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.btn {
  width: 15vw;
  height: 6vh;
  border-radius: 10px;
  border: none;
  box-shadow: 0px 3px 6px black;
  background-color: aqua;
  position: relative;
  overflow: hidden;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Georgia, "Times New Roman", Times, serif;
  margin-bottom: 10px;
  &-default {
    &::after {
      content: "";
      @include pseudo-pos;
      opacity: 0;
      z-index: -1;
      transition: opacity 300ms;
      background-color: darken($color: aqua, $amount: 5);
    }
    &:hover {
      &::after {
        opacity: 1;
      }
    }
  }
  &-gradient {
    &::after {
      content: "";
      @include pseudo-pos;
      opacity: 0;
      z-index: -1;
      transition: opacity 300ms;
      background: radial-gradient(
        circle,
        lighten(aqua, 5) 0%,
        darken(aqua, 15) 100%
      );
    }
    &:hover {
      &::after {
        opacity: 1;
      }
      & + .img {
        &::before {
          transform: rotate(90deg);
          opacity: 0;
        }
      }
    }
  }
}
img {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  border: 1px solid white;
  border-radius: 2em;
}
.img {
  display: flex;
  flex-direction: column;
  width: 15vw;
  height: 30vh;
  position: relative;
  &::before {
    content: "";
    @include pseudo-pos;
    border-radius: 2em;
    background: aqua;
    transition: opacity 500ms, transform 500ms;
    transition-timing-function: ease-in-out;
    transform-origin: top left;
    z-index: 1;
  }
}
</style>
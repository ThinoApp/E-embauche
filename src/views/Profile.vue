<template>
  <div class="profile-container">
    <ProfileNavBar />
    <div class="body-container">
      <header>
        <div class="search-container"></div>
        <TheHeader />
      </header>
      <div class="section-container">
        <ProfileBody />
      </div>
    </div>
    <ProfileAside />
  </div>
</template>
<script>
import ProfileNavBar from "../components/Profile/ProfileNavbar.vue";
import TheHeader from "../components/TheHeader.vue";
import ProfileAside from "../components/Profile/ProfileAside.vue";
import ProfileBody from "../components/Profile/ProfileBody.vue";
export default {
  components: {
    ProfileNavBar,
    TheHeader,
    ProfileAside,
    ProfileBody,
  },
  methods: {
    observer() {
      // document.querySelector(".body-container").addEventListener("scroll", () =)
      const obsCallck = function (entries, observer) {
        entries.forEach((entry) => {
          console.log(entry);
          if (entry.isIntersecting) {
            document.querySelector(".nav-bar-container").classList.add("hide");
            document.querySelector(".body-container").classList.add("expand");
          } else {
            document
              .querySelector(".nav-bar-container")
              .classList.remove("hide");
            document
              .querySelector(".body-container")
              .classList.remove("expand");
          }
        });
      };
      const obsOptions = {
        root: null,
        threshold: 0.1,
      };
      // const section1 = document.querySelector(".section1");
      // const observer = new IntersectionObserver(obsCallck, obsOptions);
      // observer.observe(section1);
      const header = document.querySelector(".header-container");
      const obs2Callback = function (entries, observer) {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            header.classList.remove("hide");
          } else {
            header.classList.add("hide");
          }
        });
      };
      const obs2Option = {
        root: null,
        threshold: 0.5,
      };
      const observerHeader = new IntersectionObserver(obs2Callback, obs2Option);
      observerHeader.observe(document.querySelector(".user-info-container"));
    },
  },
  mounted() {
    this.observer();
  },
};
</script>
<style lang="scss" scoped>
.profile-container {
  height: 100vh;
  width: 100vw;
  background-color: #1e1842;
  overflow-x: hidden;
  overflow: auto;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  display: flex;
  &::-webkit-scrollbar {
    display: none;
  }
}
.body-container {
  width: 53vw;
  display: flex;
  flex-direction: column;
  transition: 0.5s;
  margin-top: 4%;
  & .section-container {
    max-width: 100%;
    transition: 0.5s;
    display: flex;
  }
}

.expand {
  transition: 0.5s;
  width: 70.5%;
}

header {
  padding: 0.3em;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: absolute;
  top: 0;
  right: 0;
}
</style>

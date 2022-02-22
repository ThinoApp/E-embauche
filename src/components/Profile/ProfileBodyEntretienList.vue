<template>
  <h2>Entretien prévu</h2>
  <div class="entretienList-container">
    <swiper
      :effect="'coverflow'"
      :grabCursor="true"
      :centeredSlides="true"
      :slidesPerView="'auto'"
      :mousewheel="true"
      :coverflowEffect="{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      }"
      :pagination="{
        clickable: true,
      }"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide>
        <EntretienListItem :time="200" />
      </swiper-slide>
      <swiper-slide>
        <EntretienListItem :time="200" />
      </swiper-slide>
      <swiper-slide>
        <EntretienListItem :time="200" />
      </swiper-slide>
      <swiper-slide>
        <EntretienListItem :time="200" />
      </swiper-slide>
      <swiper-slide>
        <EntretienListItem :time="200" />
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
import EntretienListItem from "./ProfileBodyEntretienListItem.vue";
import { SwiperSlide, Swiper } from "swiper/vue/swiper-vue";
import "swiper/swiper.min.css";
import EffectCoverflow from "swiper/modules/effect-coverflow/effect-coverflow.js";
import Pagination from "swiper/modules/pagination/pagination.js";
import Mousewheel from "swiper/modules/mousewheel/mousewheel.js";
import "swiper/modules/pagination/pagination.min.css";
export default {
  components: {
    EntretienListItem,
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [EffectCoverflow, Pagination, Mousewheel],
    };
  },
};
</script>
<style lang="scss" scoped>
h2 {
  color: white;
  margin: 0;
  padding: 0;
  font-size: 1.2em;
  margin-top: 1.3em;
}
.entretienList-container {
  // margin-top: 0.5em;
  width: 53vw;
  height: 64vh;
  // overflow-x: scroll;
  overflow-y: hidden;
  display: flex;
  margin-bottom: 1em;
  border-radius: 10px;
  // &::-webkit-scrollbar {
  //   &:hover {
  //     cursor: pointer;
  //   }
  //   display: block;
  //   height: 6px;
  // }
  // &::-webkit-scrollbar-track {
  //   background: rgba(55, 182, 171, 0.2);
  // }
  // &::-webkit-scrollbar-thumb {
  //   background-color: rgba(55, 182, 171, 0.8);
  //   border-radius: 20px;
  // }
}
.arrow-left {
  min-width: 20px;
  height: 20px;
  background: white;
}

.swiper {
  width: 100%;
  padding-top: 20px;
  padding-bottom: 50px;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  min-width: 20vw;
  max-width: 20vw;
}

.swiper-slide img {
  display: block;
  width: 100%;
}
</style>

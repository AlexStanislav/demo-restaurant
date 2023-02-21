<template>
  <div class="home">
    <div
      class="home-image"
      :style="{
        backgroundImage: `url(${require('@/assets/img/background.jpg')})`,
      }"
    ></div>

    <article class="home-info-container">
      <h1 class="fade-in">Delicious Dishes</h1>
      <p class="fade-in">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas aut dicta
        voluptates ipsum rerum, praesentium ab iste exercitationem pariatur
        officia magni temporibus sed magnam quasi. Deleniti similique placeat
        distinctio fugit.
      </p>
      <button class="fade-in" @click="goToMenu()">View our Menu</button>
    </article>
    <div class="home-menu">
      <h2>
        <div class="title-endcap"></div>
        Meals of the Week
        <div class="title-endcap"></div>
      </h2>
      <Hooper
        :itemsToShow="1"
        :centerMode="true"
        :autoPlay="true"
        :playSpeed="3000"
      >
        <Slide v-for="(meal, index) of slides" :key="index">
          <div
            class="meal-image"
            :style="{
              backgroundImage: `url(${require(`@/assets/img/${meal.image}`)})`,
            }"
          ></div>
          <article class="meal-info">
            <h3>{{ meal.name }}</h3>
            <h4>{{ meal.weekday }}</h4>
            <p class="meal-ingredients">
              (<span
                v-for="(ingredient, index) of meal.ingredients"
                :key="index"
              >
                {{ ingredient }} </span
              >)
            </p>
            <p class="meal-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              harum, provident consectetur aliquid dolor officiis deserunt
              dolorem fuga tenetur nulla quisquam. Soluta libero error ipsum
              illo? Atque sequi tempora voluptate.
            </p>
            <p class="meal-alergens">
              Alergens:
              <span v-for="(alergen, index) of meal.alergens" :key="index">
                {{ alergen }}
              </span>
            </p>
            <p class="meal-price">{{ meal.price }}$</p>
          </article>
        </Slide>
        <hooper-pagination slot="hooper-addons"></hooper-pagination>
      </Hooper>
    </div>
    <about-info />
    <reservation />
  </div>
</template>

<script>
// @ is an alias to /src

import { Hooper, Slide, Pagination as HooperPagination } from "hooper";
import "hooper/dist/hooper.css";
import AboutInfo from '../components/AboutInfo.vue';
import Reservation from '../components/Reservation.vue';
export default {
  name: "Home",
  components: {
    Hooper,
    Slide,
    HooperPagination,
    AboutInfo,
    Reservation,
  },
  data() {
    return {
      slides: [],
    };
  },
  mounted() {
    const fadeInElements = document.getElementsByClassName("fade-in")
    setTimeout(() => {
      for (const element of fadeInElements) {
        element.classList.add('fade-in-active')
      }
    }, 500);
    this.slides = this.$store.state.menu.slice(0, 5)
  },
  methods: {
    goToMenu(){
      this.$router.push("/menu")
    }
  },
};
</script>
<style lang="scss">
@import "@/assets/scss/imports";
@import "@/assets/scss/home.image";
@import "@/assets/scss/home.menu";

.hooper-indicator {
  width: 20px;
  height: 20px;
  background: $light;
}

.hooper-pagination {
  border-radius: 0.5rem;
}

.hooper-indicator:hover,
.hooper-indicator.is-active {
  background-color: $red;
}

.fade-in-active{
  left: 0 !important;
  opacity: 1 !important;
}

</style>

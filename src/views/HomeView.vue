
<template>
  <div class="home">
    <div class="home-bg" v-if="store.isMobile()"></div>
    <div
      class="top-wrapper"
      :style="{ backgroundImage: `url(./src/assets/img/background.jpg)` }"
    >
      <div class="overlay"></div>
    </div>
    <div class="content-container">
      <div class="content-wrapper" :class="{ 'content-loaded': isLoaded }">
        <h1>Good Cuisine</h1>
        <p class="content-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
          reiciendis distinctio ullam dolores minima. Lorem ipsum dolor sit amet
          consectetur adipisicing elit.
        </p>
        <Button
          class="order-button"
          :class="{ 'button-visible': buttonIsVisible }"
          label="Order Now"
        />
        <Button
          class="specials-button"
          :class="{ 'button-visible': buttonIsVisible }"
          label="View Specials"
          @click="viewSpecials()"
        />
      </div>
    </div>
    <div class="home-about-content" v-intersection-observer="homeIntersection">
      <div class="home-img" :class="{ 'active-target': targetIsVisible }"></div>
      <div
        ref="homeAbout"
        class="home-about"
        :class="{ 'active-target': targetIsVisible }"
      >
        <h2>About Us</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
          reiciendis distinctio ullam dolores minima. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Rerum reiciendis distinctio ullam
          dolores minima. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Rerum reiciendis distinctio ullam dolores minima.
        </p>
      </div>
    </div>
    <div
      id="specials"
      class="home-special-content"
      v-intersection-observer="specialIntersection"
    >
      <h2>{{ getDay() }} Specials</h2>
      <div class="home-specials" :class="{ 'active-target': specialIsVisible }">
        <menu-item :menuItem="getSpecial()" />
        <menu-item :menuItem="getSpecial(1)" />
        <menu-item :menuItem="getSpecial(2)" />
      </div>
    </div>
    <div
      class="home-locations"
      :style="{ backgroundImage: `url(./src/assets/img/background2.jpg)` }"
    >
      <div class="overlay"></div>
      <div
        class="home-locations-content"
        v-intersection-observer="contactIntersection"
      >
        <div
          class="left-container"
          :class="{ 'active-target': contactIsVisible }"
        >
          <div class="contact-card">
            <h3>Come visit us</h3>
            <div>
              <table>
                <tr>
                  <td>Monday - Friday</td>
                  <td>9:00am - 5:00pm</td>
                </tr>
                <tr>
                  <td>Saturday</td>
                  <td>9:00am - 2:00pm</td>
                </tr>
                <tr>
                  <td>Sunday</td>
                  <td>Closed</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <div
          class="right-container"
          :class="{ 'active-target': contactIsVisible }"
        >
          <Card class="reservation-card">
            <template #title> Reservation </template>
            <template #subtitle> Reserve a table at our location </template>
            <template #content>
              <InputText
                type="text"
                v-model="value"
                placeholder="Reservation name"
              />
              <InputText type="text" v-model="value" placeholder="Your email" />
              <Calendar
                id="calendar-24h"
                v-model="datetime24h"
                showTime
                hourFormat="24"
                showIcon
              />
            </template>
            <template #footer>
              <Button label="Reserve" />
            </template>
          </Card>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Button from "primevue/button";
import { onMounted, ref } from "vue";
import { vIntersectionObserver } from "@vueuse/components";
import { useAppStore } from "@/stores/app";
import MenuItem from "@/components/MenuItem.vue";
import Card from "primevue/card";
import InputText from "primevue/inputtext";
import Calendar from "primevue/calendar";

const store = useAppStore();

let isLoaded = ref(false);
let buttonIsVisible = ref(false);
let datetime24h = ref(null);
const randomIndex = Math.floor(Math.random() * 14);

const homeAbout = ref(null);
const targetIsVisible = ref(false);
const specialIsVisible = ref(false);
const contactIsVisible = ref(false);

function homeIntersection([{ isIntersecting }]) {
  targetIsVisible.value = isIntersecting;
}

function specialIntersection([{ isIntersecting }]) {
  specialIsVisible.value = isIntersecting;
}

function contactIntersection([{ isIntersecting }]) {
  contactIsVisible.value = isIntersecting;
}

onMounted(() => {
  if (store.isMobile() === false) {
    setTimeout(() => {
      isLoaded.value = true;
    }, 900);
    setTimeout(() => {
      buttonIsVisible.value = true;
    }, 2000);
  }
});

function viewSpecials() {
  window.location.href = "#specials";
}

function getDay() {
  let date = new Date();
  let day = date.getDay();
  const daysOfWeek = [
    ,
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  return daysOfWeek[day - 1];
}

function getSpecial(index) {
  if (index === undefined) {
    index = randomIndex;
  }
  return store.menuItems[index];
}
</script>
<style>
.home {
  display: flex;
  flex-flow: column wrap;
}

.home-locations {
  width: 100vw;
  height: 95vh;
  position: relative;
  background-attachment: fixed;
  box-sizing: content-box;
  padding-top: 1%;
}

.home-locations-content {
  width: 70%;
  height: 80%;
  margin: auto;
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
}

.left-container {
  width: 50%;
  height: 70%;
  height: fit-content;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  position: relative;
  opacity: 0;
  transition: all 1s ease-in-out;
}

.left-container h2 {
  color: var(--second-color);
  position: relative;
  z-index: 1;
  font-size: 2em;
  top: 0;
  left: 8%;
}

.contact-card {
  width: 25em;
  margin-top: 100px;
  background: var(--primary-color);
  border-radius: var(--border-radius);
}

.contact-card h3 {
  width: 90%;
  margin: 1rem auto 2rem auto;
  font-size: 1.5em;
  color: var(--second-color) !important;
  text-align: center;
  border-bottom: 1px solid var(--second-color);
  padding-bottom: 10px;
}

.contact-card table {
  width: 100%;
  color: var(--second-color);
}

.contact-card table td {
  text-align: center;
  padding: 1rem 0;
}

.right-container {
  width: 50%;
  height: 70%;
  height: fit-content;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  position: relative;
  opacity: 0;
  transition: all 1s ease-in-out;
}

.reservation-card {
  width: 25em;
  margin-top: 100px;
}
.reservation-card .p-card-content {
  display: flex;
  flex-flow: column wrap;
  gap: 1rem;
}

.overlay {
  width: 100vw;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 0;
  left: 0;
}

.active-target {
  opacity: 1 !important;
  left: 0 !important;
  top: 0 !important;
}

.p-button {
  cursor: pointer;
}

@media screen and (max-width: 1024px) {
  .home-locations {
    height: fit-content;
    padding-bottom: 2rem;
  }
  .home-locations-content {
    width: 100vw;
    flex-flow: row wrap;
    height: fit-content;
  }
  .contact-card,
  .reservation-card {
    width: 90%;
  }

  .reservation-card {
    margin-top: 10%;
  }
  .reservation-card .p-inputtext {
    width: 90%;
  }

  .left-container,
  .right-container {
    width: 100%;
    flex-flow: initial;
  }
}
</style>
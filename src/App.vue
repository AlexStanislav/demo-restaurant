<template>
  <header
    :class="{ scrolled: isScrolled || router.currentRoute.value.path != '/' }"
  >
    <div class="mobile-menu-icon" @click="sidebarVisible = !sidebarVisible">
      <svg-icon class="menu-icon" :iconPath="Icons.menuIcon" />
    </div>
    <router-link class="logo-link" to="/">
      <div class="logo-container">
        <img
          class="logo-image"
          :class="{
            'scrolled-logo-image':
              isScrolled || router.currentRoute.value.path != '/',
          }"
          src="@/assets/img/logo.svg"
        />
        <div
          class="logo-text"
          :class="{
            'scrolled-logo-text':
              isScrolled || router.currentRoute.value.path != '/',
          }"
        >
          LOGO
        </div>
      </div>
    </router-link>
    <nav>
      <div class="nav-links">
        <router-link class="nav-link" to="/">
          <svg-icon class="nav-icon" :iconPath="Icons.homeIcon" />
          Home
        </router-link>
        <router-link class="nav-link" to="/menu">
          <svg-icon class="nav-icon" :iconPath="Icons.foodMenuIcon" />
          Menu
        </router-link>
        <router-link class="nav-link" to="/contact">
          <svg-icon class="nav-icon" :iconPath="Icons.infoIcon" />
          Contact
        </router-link>
      </div>
      <div class="right-nav-container">
        <!-- <AutoComplete
          class="nav-search"
          v-model="searchValue"
          optionLabel="name"
          placeholder="Search"
          :suggestions="searchItems"
          @complete="search"
        /> -->
        <div class="basket-container">
          <router-link to="/order">
            <svg-icon class="basket-icon" :iconPath="Icons.basketIcon" />
            <Badge severity="danger" :value="itemNumber"></Badge>
          </router-link>
        </div>
      </div>
    </nav>
    <div class="basket-container-mobile" v-if="store.isMobile()">
      <router-link to="/order">
        <svg-icon class="basket-icon" :iconPath="Icons.basketIcon" />
        <Badge severity="danger" :value="itemNumber"></Badge>
      </router-link>
    </div>
  </header>

  <main>
    <RouterView />
  </main>
  <footer>
    <div class="footer-container footer-about">
      <h3>About us</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
        mollitia expedita, Lorem ipsum dolor sit amet consectetur, adipisicing
        elit. Eos minima cumque, vero ab quod corporis.
      </p>
    </div>
    <div class="footer-container">
      <div class="footer-contact-card">
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
    <div class="footer-container">
      <h3>Navigate</h3>
      <div class="footer-nav">
        <router-link to="/">Home</router-link>
        <router-link to="/menu">Menu</router-link>
        <router-link to="/contact">Contact</router-link>
      </div>
    </div>
  </footer>
  <Sidebar v-model:visible="sidebarVisible" @click="sidebarVisible = false">
    <h2>Menu</h2>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/menu">Menu</router-link></li>
      <li><router-link to="/contact">Contact</router-link></li>
    </ul>
  </Sidebar>
  <ScrollTop />
</template>
<script setup>
import Icons from "@/assets/modules/Icons.js";
import { computed, onDeactivated, onMounted, ref } from "vue";
import AutoComplete from "primevue/autocomplete";
import SvgIcon from "@/components/SvgIcon.vue";
import { RouterLink, RouterView } from "vue-router";
import { useAppStore } from "@/stores/app";
import Badge from "primevue/badge";
import router from "./router";
import Sidebar from "primevue/sidebar";
import ScrollTop from "primevue/scrolltop";

const store = useAppStore();

// let searchValue = ref("");

let sidebarVisible = ref(false);
let searchItems = ref([]);
let isScrolled = ref(false);
let itemNumber = computed(() => {
  let qty = 0;
  for (const item of store.orderItems) {
    qty += item.quantity;
  }
  return qty;
});

const search = (event) => {
  if (event.query.length > 0) {
    searchItems.value = store.menuItems.filter((item) =>
      item.name.toLowerCase().includes(event.query.toLowerCase())
    );
  }
};
onMounted(() => {
  if (store.isMobile() === false) {
    changeNav();
    window.addEventListener("scroll", () => {
      handleScroll();
    });
  }
});

onDeactivated(() => {
  window.removeEventListener("scroll", handleScroll());
});

function handleScroll() {
  isScrolled.value = window.pageYOffset > 0;
}

function changeNav() {
  if (router.currentRoute.value.path === "/order") {
    isScrolled.value = true;
  } else {
    isScrolled.value = false;
  }
}
</script>

<style>
footer {
  width: 100%;
  height: 20vh;
  background: var(--primary-color);
  display: flex;
  padding: 5% 0;
  box-sizing: content-box;
  justify-content: center;
  gap: 5%;
}

.footer-container {
  width: 20%;
}
.footer-container h3 {
  font-size: 1.5rem;
  color: var(--second-color);
}
.footer-container p {
  color: var(--second-color);
}

.footer-contact-card table {
  width: 100%;
  color: var(--second-color);
}

.footer-nav {
  display: flex;
  flex-flow: column wrap;
  font-size: 1.2rem;
  gap: 0.5rem;
}

.footer-nav a {
  width: fit-content;
  font-size: 1rem;
  text-decoration: none;
  color: var(--second-color);
}

.right-nav-container {
  height: 2.5rem;
  display: flex;
  gap: 1rem;
}

.basket-icon {
  width: 2.5rem;
  height: 2.5rem;
  fill: var(--second-color);
  cursor: pointer;
}

.basket-container {
  position: relative;
}

.basket-container .p-badge {
  min-width: 1rem !important;
  height: 1rem !important;
  line-height: 1rem !important;
  position: absolute;
  text-align: center;
  border-radius: 100%;
  font-size: 0.6em;
  top: 1.5rem;
  right: -0.15rem;
}

.p-scrolltop.p-link {
  background: var(--primary-color) !important;
}

@media screen and (max-width: 1024px) {
  footer {
    flex-flow: row wrap;
    height: fit-content;
    position: relative;
    z-index: 10;
  }

  .footer-container {
    width: 90%;
    text-align: center;
    font-size: 0.9rem;
    border-bottom: 1px solid var(--second-color);
    padding-bottom: 1rem;
  }

  .footer-container:last-child {
    border-bottom: 1px solid transparent;
  }

  .footer-nav {
    font-size: 0.9rem;
  }

  .basket-container-mobile .basket-icon {
    width: 2.5rem;
    height: 2.5rem;
    fill: var(--second-color);
    cursor: pointer;
  }

  .basket-container-mobile {
    position: relative;
    margin-right: 0.5rem;
  }

  .basket-container-mobile .p-badge {
    min-width: 1rem !important;
    height: 1rem !important;
    line-height: 1rem !important;
    position: absolute;
    text-align: center;
    border-radius: 100%;
    font-size: 0.6em;
    top: 1.5rem;
    right: -0.15rem;
  }
}
</style>


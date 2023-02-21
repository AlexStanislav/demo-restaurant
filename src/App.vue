<template>
  <div id="app">
    <header>
      <div class="logo-container">
        <div class="logo">LOGO</div>
      </div>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/menu">Menu</router-link>
        <router-link to="/contact">Contact</router-link>
      </nav>
    </header>
    <main>
      <router-view />
    </main>
    <footer>
      <div class="footer-container">
        <div class="footer-contact">
          <h3>Contact</h3>
          <div class="footer-wrapper">
            <div class="footer-info">
              <div class="footer-info-title">ADDRESS:</div>
              <div class="footer-info-content">Street Name no.1, USA</div>
            </div>
            <div class="footer-info">
              <div class="footer-info-title">TELEPHONE:</div>
              <div class="footer-info-content">012-5555-555-5555</div>
            </div>
            <div class="footer-info">
              <div class="footer-info-title">EMAIL:</div>
              <div class="footer-info-content">office@restaurant.com</div>
            </div>
          </div>
        </div>
        <div class="footer-program">
          <h3>Available Hours</h3>
          <div class="footer-program-content">
            <div class="footer-program-column">
              <div class="footer-program-row">Monday - Friday</div>
            </div>
            <div class="footer-program-column">
              <div class="footer-program-row">8:00 am - 6:00 pm</div>
            </div>
          </div>
          <div class="footer-program-content">
            <div class="footer-program-column">
              <div class="footer-program-row">Saturday</div>
            </div>
            <div class="footer-program-column">
              <div class="footer-program-row">10:00 am - 6:00 pm</div>
            </div>
          </div>
          <div class="footer-program-content">
            <div class="footer-program-column">
              <div class="footer-program-row">Sunday</div>
            </div>
            <div class="footer-program-column">
              <div class="footer-program-row">Closed</div>
            </div>
          </div>
        </div>
        <div class="footer-contact footer-nav">
          <h3>Navigation</h3>
          <div class="footer-wrapper">
            <div class="footer-info">
              <router-link to="/">Home</router-link>
            </div>
            <div class="footer-info">
              <router-link to="/models">About</router-link>
            </div>
            <div class="footer-info">
              <router-link to="/menu">Menu</router-link>
            </div>
            <div class="footer-info">
              <router-link to="/contact">Contact</router-link>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <popper trigger="hover" :options="popperOptions">
      <div class="popper attribution-container">
        Photos by
        <a v-for="(attribution, index) of $store.state.attributions" :key="index" :href="attribution.url">{{ attribution.name }}</a>
      </div>

      <div class="attributions" slot="reference">
        Photos courtesy of <a href="https://unsplash.com/">Unsplash</a>
      </div>
    </popper>
    <button id="scroll-to-top" @click="scrollToTop()">
      <div class="top-icon"></div>
    </button>
  </div>
</template>

<script>
import Popper from "vue-popperjs";
import "vue-popperjs/dist/vue-popper.css";
export default {
  components: {
    popper: Popper,
  },
  data() {
    return {
      popperOptions: {
        placement: "top",
      },
    };
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll(event) {
      let nav = document.getElementsByTagName("nav")[0];
      let logo = document.getElementsByClassName("logo-container")[0];
      let scrollToTop = document.getElementById("scroll-to-top");
      let scrollTop = event.target.documentElement.scrollTop;
      if (scrollTop > 0) {
        logo.classList.add("scrollLogo");
        nav.classList.add("scrollNav");
        scrollToTop.classList.remove("hideScroll");
      } else {
        scrollToTop.classList.add("hideScroll");
        logo.classList.remove("scrollLogo");
        nav.classList.remove("scrollNav");
      }
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/imports";
body {
  padding: 0;
  margin: 0;
  background: #ededed;
}

#app {
  font-family: "Poppins", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.logo-container {
  width: 70px;
  height: 70px;
  border-radius: 10px;
  background: $red;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px auto;
  position: absolute;
  left: 48.5%;
  z-index: 1;
}

.logo {
  width: 100%;
  color: $red;
  font-weight: bold;
  background: $light;
  border-top: 2px solid $red;
  border-bottom: 2px solid $red;
  position: relative;
}

.logo::after {
  content: "";
  position: absolute;
  border-top: 2px dotted $light;
  border-bottom: 2px dotted $light;
  top: -4px;
  left: 0px;
  bottom: -4px;
  right: 0px;
  z-index: 0;
}

nav {
  width: 70%;
  margin: 1.3rem auto;
  position: absolute;
  z-index: 2;
  display: flex;
  gap: 2vw;
  border-top: 1px solid $light;
  border-bottom: 1px solid $light;
  padding: 1.2rem 0;
  justify-content: center;
  top: 80px;
  left: 15%;
  font-family: "PoppinsSBold";
  a {
    text-decoration: none;
    color: $light;
    transition: all 0.2s ease-in-out;
    font-size: 0.8rem;
    text-transform: uppercase;
  }
  a:hover {
    color: $red;
  }
  transition: background 0.2s ease-in-out;
}

.scrollNav {
  width: 100%;
  top: 0;
  left: 0;
  margin-top: 0;
  position: fixed;
  background: $dark;
  border: none;
  border-bottom: 1px solid $light;
}

.scrollLogo {
  display: none;
  margin: 0;
}

footer {
  width: 100%;
  height: 35vh;
  background: $red;
}

.footer-container {
  width: 65%;
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
}

.footer-program {
  width: 30%;
  color: $light;
  margin-top: 3rem;
  margin-left: 3rem;
}

.footer-program-content {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #c04242;
  padding: 0.8rem 0;
}

.footer-contact {
  width: 15%;
  color: $light;
  margin-top: 3rem;
  text-align: left;
}

.footer-nav {
  a {
    text-decoration: none;
    color: $light;
    text-align: right;
  }
  .footer-info {
    text-align: right;
  }
  text-align: right;
}

.footer-contact-content {
  display: flex;
  font-size: 2rem;
  align-items: center;
  gap: 0.5vw;
}

.footer-contact-address {
  text-align: justify;
  margin-bottom: 1rem;
}

.footer-info {
  text-align: left;
  margin: 0.5rem 0;
}

.footer-info-content {
  font-size: 0.8rem;
}

.attribution-container{
  display: flex;
  flex-flow: column;
  a {
    color: $brown;
  }
}

.attributions {
  background: $dark;
  padding: 0.5rem;
  color: $light;
  cursor: pointer;
  a {
    color: $brown;
  }
}

#scroll-to-top {
  width: 3rem;
  height: 3rem;
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  border-radius: 10%;
  border: none;
  background: $dark;
  border: 2px solid $red;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  box-sizing: border-box;
  z-index: 3;
  cursor: pointer;
  transition: opacity 0.2s ease-in-out;
}

.top-icon {
  width: 2rem;
  height: 2rem;
  clip-path: polygon(50% 0, 100% 25%, 100% 55%, 50% 30%, 0 55%, 0 25%);
  background: white;
  margin-bottom: -0.1rem;
}

.hideScroll {
  opacity: 0 !important;
}
</style>

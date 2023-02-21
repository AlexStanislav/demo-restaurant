<template>
  <div class="menu">
    <div
      class="header-image"
      :style="{
        backgroundImage: `url(${require('@/assets/img/background.jpg')})`,
      }"
    >
      <h1>Our Menu</h1>
      <div class="header-image-overlay"></div>
    </div>
    <h2>
        <div class="title-endcap"></div>
        Check out or meals
        <div class="title-endcap"></div>
    </h2>
    <div class="menu-container">
      <div class="menu-item" v-for="(meal, index) of pageOfItems" :key="index">
        <div class="menu-item-image" :style="{backgroundImage: `url(${require(`@/assets/img/${meal.image}`)})`}"></div>
        <div class="menu-item-content">
          <h3>{{ meal.name }}</h3>
          <div class="menu-item-ingredients">
            <div class="menu-item-ingredient" v-for="(ingredient, index) of meal.ingredients" :key="index">{{ ingredient }}</div>
          </div>
          <div class="menu-item-price">{{ meal.price }}$</div>
        </div>
      </div>
      <JwPagination :pageSize="8" :items="menu" @changePage="onChangePage"></JwPagination>
    </div>
    <div class="reservation-container">
      <reservation />
    </div>
  </div>
</template>
<script>
import JwPagination from 'jw-vue-pagination';
import Reservation from '../components/Reservation.vue';

export default {
    data() {
        return {
            menu: this.$store.state.menu,
            pageOfItems: []
        };
    },
    components: { JwPagination, Reservation },
    methods: {
      onChangePage(pageOfItems) {
            // update page of items
            this.pageOfItems = pageOfItems;
        }
    },
};
</script>
<style lang="scss">
@import "@/assets/scss/imports";
.menu-container, .reservation-container{
  width: 70%;
  margin: auto;
  display: flex;
  flex-flow: row wrap;
}

.menu-item{
  margin: 1rem 0;
  display: flex;
  gap: 1rem;
  border-bottom: 1px solid $dark;
  padding-bottom: 1rem;
  width: 48%;
  margin: 1rem 0.5rem;
  h3{
    color: $brown;
    text-align: left;
  }
}

.menu-item-content{
  text-align: left;
  position: relative;
}

.menu-item-image{
  width: 150px;
  height: 150px;
  background-size: cover;
  background-position: center;
}

.menu-item-ingredients{
  display: flex;
  font-size: 0.9rem;
  gap: 0.2rem;
  font-family: 'IndieFlower';
  font-weight: 600;
  font-style: italic;
  color: $gray;
}

.menu-item-price{
  font-size: 1.3rem;
  color: $red;
  font-weight: bold;
  position: absolute;
  bottom: 0;
}

.pagination{
  margin: auto !important;
  font-family: 'IndieFlower';
  font-size: 1.5rem;
  font-weight: bold;
}

.page-item.active a{
  color: $red;
}
</style>
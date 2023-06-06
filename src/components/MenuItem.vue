<template>
  <div class="menu-item">
    <Card class="menu-card">
      <template #header>
        <img :src="`./src/assets/img/${menuItem.image}.jpg`" alt="" />
      </template>
      <template #title>{{ menuItem.name }}</template>
      <template #subtitle>{{ menuItem.price }}$</template>
      <template #content>
        {{ menuItem.description }}
        <h5>Ingredients:</h5>
        <div class="menu-ingredients">
            <div class="menu-ingredient" v-for="(ingredient, index) of menuItem.ingredients" :key="index">{{ ingredient.slice(0, 1).toUpperCase() +  ingredient.slice(1)}}</div>
        </div>
      </template>
      <template #footer><Button label="Order" @click="addMenuItem(menuItem)"/></template>
    </Card>
  </div>
</template>
<script setup>
import Button from "primevue/button";
import Card from "primevue/card";
import { useAppStore } from "@/stores/app";

const store = useAppStore();

const emit = defineEmits(["addItem"]);

defineProps({
  menuItem: {
    type: Object,
    default: () => {
      return {
        name: "",
        description: "",
        price: "",
      };
    },
  },
});

function addMenuItem(item){
  store.addItem(item)
  emit("addItem")
}

</script>
<style>

.menu-card{
  width: 30em;
}

.menu-card img {
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-top-left-radius: var(--border-radius);
  border-top-right-radius: var(--border-radius);
}

.menu-ingredients{
  display: flex;
  gap: 0.5rem;
}

.menu-card{
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.5) !important;
}

.menu-card .p-card-title{
    color: var(--third-color);
    font-family: 'Poppins Bold';
}
.menu-card .p-card-subtitle{
    color: var(--third-color) !important;
}

.menu-card h5{
    margin: 20px 0 5px 0;
}

.menu-ingredient{
    font-size: 0.8rem;
    color: var(--primary-color);
}

@media screen and (max-width: 1024px) {

  .home-specials{
    flex-flow: row wrap;
  }

  .menu-card{
    width: 90vw;
  }

  .menu-card img{
    object-position: center;
  }
}
</style>
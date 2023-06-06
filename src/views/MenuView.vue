<template>
  <div class="menu">
    <h2>Menu</h2>
    <div class="menu-wrapper">
      <menu-item @add-item="showItemAlert()" v-for="(item, index) in store.menuItems" :key="index" :index="index" :menuItem="item" />
    </div>
  </div>
  <Toast />
</template>
<script setup>
import MenuItem from "@/components/MenuItem.vue";
import { useAppStore } from "@/stores/app";

import Toast from 'primevue/toast';
import { useToast } from 'primevue/usetoast';

const toast = useToast();

const store = useAppStore();

function showItemAlert() {
  toast.add({ severity: 'success', summary: 'Item added', detail: 'Your item has been added.', life: 3000 });
}
</script>
<style>
.menu{
  margin-top: 100px;
  padding: 3rem;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  gap: 2rem;
}

.menu h2{
  width: 80%;
  margin: 0 auto 3rem auto;
  text-align: center;
  font-size: 3rem;
  padding-bottom: 0.5rem;
  color: var(--primary-color);
  border-bottom: 1px solid var(--primary-color);
}

.menu-wrapper{
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 2rem;
}

@media screen and (max-width: 1024px) {
  .menu{
    padding: initial;
  }
}

</style>

<template>
  <div class="about">
    <div
      class="header-image"
      :style="{
        backgroundImage: `url(${require('@/assets/img/background.jpg')})`,
      }"
    >
      <h1>About Us</h1>
      <div class="header-image-overlay"></div>
    </div>
    <about-info :title="'Our Story'"/>
    <about-info :title="'Our Services'" :leftImage="true" :rightImage="false"/>
  </div>
</template>
<script>
import AboutInfo from '../components/AboutInfo.vue';
export default {
  components: { AboutInfo },};
</script>
<style lang="scss">
@import "@/assets/scss/imports";

.about{
  padding-bottom: 3rem;
}

.about .about-container{
  width: 70%;
  margin: auto;
}

</style>
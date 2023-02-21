<template>
  <div class="about-container">
    <h2>
      <div class="title-endcap"></div>
      {{ title }}
      <div class="title-endcap"></div>
    </h2>
    <article>
        <img v-if="leftImage"
        :src="require('@/assets/img/zakaria-zayane-0uAVsDcyD0M-unsplash.jpg')"
      />
      <p>
        Est dolore in reprehenderit ea elit culpa reprehenderit aute ad do nisi.
        Id exercitation do tempor est aliqua magna exercitation ut. Irure cillum
        esse id velit laboris ipsum labore.
        <br />
        <br />
        Reprehenderit cupidatat ut velit ipsum reprehenderit eiusmod deserunt
        laborum consequat. Elit Lorem irure ea ad aliqua sit occaecat irure
        nulla dolor. Culpa amet laborum laboris eu dolore irure. Nisi dolore
        aliquip mollit pariatur fugiat velit esse officia proident nisi
        cupidatat. Dolore laboris proident mollit id do magna quis consequat
        cillum tempor deserunt irure. Cillum officia excepteur tempor
        reprehenderit.
      </p>
      <img v-if="rightImage"
        :src="require('@/assets/img/zakaria-zayane-0uAVsDcyD0M-unsplash.jpg')"
      />
    </article>
  </div>
</template>
<script>
export default {
    props: {
        title: {
            type: String,
            default: 'About Us'
        },
        leftImage: {
            type: Boolean,
            default: false
        },
        rightImage: {
            type: Boolean,
            default: true
        }
    }
};
</script>
<style lang="scss">
@import "@/assets/scss/imports";
.about-container {
  margin: 1rem 0 4rem 0;
}

.about-container article {
  display: flex;
  gap: 2vw;
  padding: 1rem;
  justify-content: center;
  img {
    width: 30%;
    height: auto;
  }
  p {
    width: 50%;
    text-align: justify;
  }
}
</style>
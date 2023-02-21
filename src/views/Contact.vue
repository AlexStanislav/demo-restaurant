<template>
  <div class="contact">
    <div
      class="header-image"
      :style="{
        backgroundImage: `url(${require('@/assets/img/background.jpg')})`,
      }"
    >
      <h1>Contact Us</h1>
      <div class="header-image-overlay"></div>
    </div>
    <h2>
      <div class="title-endcap"></div>
      Our info
      <div class="title-endcap"></div>
    </h2>
    <div class="contact-container">
      <div class="contact-text">
        <div class="contact-wrapper">
          <div class="contact-info">
            <div class="contact-info-title">ADDRESS:</div>
            <div class="contact-info-content">Street Name no.1, USA</div>
          </div>
          <div class="contact-info">
            <div class="contact-info-title">TELEPHONE:</div>
            <div class="contact-info-content">012-5555-555-5555</div>
          </div>
          <div class="contact-info">
            <div class="contact-info-title">EMAIL:</div>
            <div class="contact-info-content">office@restaurant.com</div>
          </div>
          <div class="contact-info">
            <div class="contact-info-title">FACEBOOK:</div>
            <div class="contact-info-content">https://www.facebook.com/example</div>
          </div>
          <div class="contact-info">
            <div class="contact-info-title">WHATSAPP:</div>
            <div class="contact-info-content">012-5555-555-5555</div>
          </div>
        </div>
      </div>
      <div class="contact-map">
        <iframe
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Hollywood+(Demo)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          width="500"
          height="500"
          frameborder="0"
          ><a href="https://www.maps.ie/distance-area-calculator.html"
            >distance maps</a
          ></iframe
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
@import "@/assets/scss/imports";

.contact-container {
  width: 60%;
  margin: auto;
  display: flex;
}

.contact-text {
  width: 50%;
  margin-left: 5%;
}

.contact-wrapper{
    text-align: left;
    color: $red;
}

.contact-info{
    margin: 1rem 0;
}

.contact-info-title{
    font-size: 1.5rem;
}

.contact-info-content{
    color: $dark;
}
</style>
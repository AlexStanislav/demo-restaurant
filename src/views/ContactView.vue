<template>
  <div class="contact">
    <div class="contact-bg" :style="{ backgroundImage: `url(${bgURL})` }"></div>
    <div class="contact-form-wrapper">
      <div class="contact-form">
        <h1>Contact Us</h1>
        <form @submit.prevent="submitForm">
          <div class="form-field">
            <label for="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              v-model="form.name"
              required
            />
          </div>
          <div class="form-field">
            <label for="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              v-model="form.email"
              required
            />
          </div>
          <div class="form-field">
            <label for="message">Message:</label>
            <textarea
              id="message"
              name="message"
              v-model="form.message"
              required
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
    <div class="address-wrapper">
      <h1>Don't hesitate to contact us!</h1>
      <ul>
        <li><span>Address:</span> 123 Main St, Anytown, USA 12345</li>
        <li><span>Phone:</span> (555) 123-4567</li>
        <li><span>Fax:</span> (555) 123-4568</li>
        <li><span>Email:</span> info@example.com</li>
        <li><span>Twitter:</span> @example</li>
        <li><span>Facebook:</span> /example</li>
        <li><span>Instagram:</span> @example_company</li>
      </ul>
      <div class="contact-icons">
        <svg-icon class="contact-icon" :iconPath="Icons.facebookIcon" />
        <svg-icon class="contact-icon" :iconPath="Icons.twitterIcon" />
        <svg-icon class="contact-icon" :iconPath="Icons.mailIcon" />
        <svg-icon class="contact-icon" :iconPath="Icons.phoneIcon" />
        <svg-icon class="contact-icon" :iconPath="Icons.instagramIcon" />
      </div>
    </div>
  </div>
</template>
  
<script setup>
import Icons from "../assets/modules/Icons";
import SvgIcon from "../components/SvgIcon.vue";
let form = { name: "", email: "", message: "" };

let bgURL = new URL("../assets/img/background2.jpg", import.meta.url);

function submitForm() {
  // Code to submit the form data goes here
  console.log(this.form);
}
</script>  
<style scoped>
.contact {
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  gap: 5rem;
}

.contact-icons {
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.contact-icon {
  width: 70px;
  fill: var(--primary-color);
  cursor: pointer;
}

.contact-bg {
  width: 100%;
  height: 100vh;
  position: absolute;
  background-attachment: fixed;
  opacity: 0.6;
  z-index: 1;
}

.address-wrapper {
  height: 450px;
  position: relative;
  z-index: 2;
  background: #fff;
  border-radius: var(--border-radius);
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.5);
  padding: 2rem;
  color: var(--primary-color);
}

.address-wrapper ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.address-wrapper ul li {
  margin: 1rem 0;
  padding: 0;
  display: flex;
  gap: 1rem;
  font-family: "Poppins Italic", sans-serif;
}
.address-wrapper ul li span {
  display: block;
  width: 10rem;
  text-align: right;
  font-family: "Poppins Bold", sans-serif;
}

.contact-form-wrapper {
  width: 55%;
  height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  z-index: 1;
}

.contact-form {
  max-width: 600px;
  width: 600px;
  height: 450px;
  margin: 0 auto;
  padding: 2rem;
  background: white;
  border-radius: var(--border-radius);
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.5);
}

.contact-form h1 {
  text-align: center;
  margin-bottom: 2rem;
  color: var(--primary-color);
}

.form-field {
  margin-bottom: 1rem;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #898989;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: none;
}

button {
  display: block;
  margin-top: 1rem;
  padding: 0.75rem 1.5rem;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1.2rem;
  cursor: pointer;
}

@media screen and (max-width: 1024px) {
  .contact {
    flex-direction: column;
  }

  .contact-form-wrapper {
    width: 95%;
    height: fit-content;
    margin-top: 10rem;
  }

  .contact-bg{
    height: 200vh;
  }

  .address-wrapper {
    width: 80%;
    height: fit-content;
    border-radius: 5px;
    margin-bottom: 5rem;
  }
  .address-wrapper h1 {
    text-align: center;
  }
}
</style>
  
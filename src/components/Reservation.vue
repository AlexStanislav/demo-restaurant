<template>
  <div class="reservation">
    <h2>
      <div class="title-endcap"></div>
      Make a reservation
      <div class="title-endcap"></div>
    </h2>
    <div class="reservation-content">
      <div class="from-container">
        <form @submit="checkForm">
          <div class="form-title">Reservation Form</div>
          <p>
            <label> Name </label>
            <input type="text" v-model="formValues.name"/>
          </p>
          <p class="form-error" v-if="formErrors.nameLength">Name must be longer than 3 characters</p>
          <p>
            <label> Email </label>
            <input type="email" v-model="formValues.email"/>
          </p>
          <p class="form-error" v-if="formErrors.validEmail">Please enter a valid email</p>
          <p>
            <label> Phone Number </label>
            <input type="number" v-model="formValues.phoneNumber"/>
          </p>
          <p class="form-error" v-if="formErrors.phoneNumber">Please enter a valid phone number</p>
          <p>
            <label> Date </label>
            <input type="date" />
          </p>
          <p>
            <label> Event Type </label>
            <select>
              <option disabled>Select Event</option>
              <option value="event_1">Event One</option>
              <option value="event_2">Event Two</option>
              <option value="event_3">Event Three</option>
              <option value="event_4">Event Four</option>
            </select>
          </p>
          <input type="submit" value="Submit">
        </form>
      </div>
      <div class="reservation-text-container">
        <h2>
          Reserve your seating in advance
        </h2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
        tempore necessitatibus atque ratione perspiciatis, earum nulla
        distinctio neque nam. Harum cum, error exercitationem soluta sapiente
        saepe beatae ea mollitia officia! Lorem ipsum dolor sit, amet
        consectetur adipisicing elit. Laborum maiores libero repellat, a optio,
        beatae vero quam tempore impedit unde voluptatibus architecto quisquam,
        placeat porro culpa reiciendis sapiente quo non.
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    checkForm(event){
      event.preventDefault();
      // if(this.formValues.name.length < 3){
      //   this.formErrors.nameLength = true
      // }else{
      //   this.formErrors.nameLength = false
      // }

      // if(this.formValues.email.match(this.$store.state.mailRegex)){
      //   this.formErrors.email = true
      // }else{
      //   this.formErrors.email = false
      // }

      // if(this.formValues.phoneNumber.length > 10 || this.formValues.phoneNumber < 10){
      //   this.formErrors.phoneNumber = true
      // }else{
      //   this.formErrors.phoneNumber = false
      // }
    }
  },
  data() {
    return {
      formValues:{
        name: '',
        email: '',
        phoneNumber: '',
      },
      formErrors:{
        nameLength: false,
        email: false,
        phoneNumber: false
      }
    }
  },
};
</script>
<style lang="scss">
@import "@/assets/scss/imports";

.reservation {
  padding-bottom: 1rem;
}

.reservation-content {
  display: flex;
  gap: 5rem;
}

.reservation-text-container {
  text-align: justify;
}

form {
  width: 30vw;
  box-sizing: border-box;
  display: flex;
  border-radius: 0.2rem;
  flex-flow: column wrap;
  border: 1px solid $red;
  gap: 1rem;
  align-items: center;
  padding-bottom: 1rem;
  p{
    display: flex;
    margin: 0;
    align-items: center;
  }
  label {
    display: block;
    width: 7vw;
    text-align: left;
    color: $red;
  }
  input,
  select {
    width: 15vw;
    padding: 0.5rem;
    border: 1px solid rgba($color: $red, $alpha: 0.5);
    font-family: "Poppins", sans-serif;
  }
  select {
    width: 16vw;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type="number"] {
    -moz-appearance: textfield;
  }

  input[type="submit"]{
    background: $red;
    font-size: 1rem;
    margin-top: 1rem;
    color: white;
    cursor: pointer;
  }
}

.form-error{
  width: 27.5rem;
  font-size: 0.8rem;
  color: red;
}

.form-title {
  width: 100%;
  box-sizing: border-box;
  background: $red;
  color: white;
  padding: 0.5rem 1rem;
  text-align: center;
  display: initial;
}
</style>
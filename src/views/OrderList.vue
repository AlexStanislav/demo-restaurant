<template>
  <div class="order-list">
    <div class="order-form">
      <Card>
        <template #title> Delivery Information </template>
        <template #subtitle> Let us know where to send the food </template>
        <template #content>
          <div class="form-wrapper">
            <div class="label-wrapper">
              <label for="Name">Name</label>
              <InputText v-model="formInfo.name" id="Name" />
            </div>
            <div class="label-wrapper">
              <label for="Phone">Phone</label>
              <InputText v-model="formInfo.phone" id="Phone" />
            </div>
          </div>
          <div class="form-wrapper">
            <div class="label-wrapper">
              <label for="Address">Address</label>
              <InputText v-model="formInfo.address" id="Address" />
            </div>
            <div class="label-wrapper">
              <label for="City">City</label>
              <InputText v-model="formInfo.city" id="City" />
            </div>
          </div>
          <div class="label-wrapper">
            <label for="Email">Email</label>
            <InputText v-model="formInfo.email" id="Email" />
          </div>
          <Calendar v-model="date" showTime hourFormat="24" showIcon />
          <h3>Payment</h3>
          <div class="payment-wrapper">
            <div class="radio-wrapper">
              <RadioButton v-model="payment" name="payment" value="cash" />
              <label for="cash">Cash</label>
            </div>
            <div class="radio-wrapper">
              <RadioButton v-model="payment" name="payment" value="card" />
              <label for="card">Card</label>
            </div>
          </div>
        </template>
        <template #footer>
          <Button label="Submit" />
        </template>
      </Card>
    </div>
    <div class="item-list" v-if="store.orderItems.length > 0">
      <h3>Your Items</h3>
      <div class="order-wrapper">
        <div
          class="order-item"
          v-for="(item, index) of store.orderItems"
          :key="index"
        >
          <img
            class="order-item-img"
            :src="getImgUrl(item)"
            alt=""
          />
          <div class="order-item-content">
            <div class="order-item-title">{{ item.name }}</div>
            <div class="order-item-desc">{{ item.description }}</div>
            <div class="order-item-price">${{ item.price }}</div>
            <div class="order-item-quantity">
              Quantity:
              <InputNumber
                class="quantity-input"
                showButtons
                v-model="item.quantity"
                :min="1"
              />
            </div>
          </div>
          <i
            class="pi pi-times delete-item"
            @click="store.removeItem(item)"
          ></i>
        </div>
      </div>
      <div class="order-total">Total: ${{ orderTotal }}</div>
    </div>
    <div class="empty-cart" v-if="store.orderItems.length == 0">
      Your cart is empty
    </div>
  </div>
</template>
<script setup>
import { useAppStore } from "@/stores/app";
import Card from "primevue/card";
import InputText from "primevue/inputtext";
import RadioButton from "primevue/radiobutton";
import Button from "primevue/button";
import InputNumber from "primevue/inputnumber";
import Calendar from "primevue/calendar";
import { computed, ref } from "vue";

const store = useAppStore();

function getImgUrl(item) {
  return new URL(`../assets/img/${item.image}.jpg`, import.meta.url);
}

let formInfo = {
  name: "",
  phone: "",
  address: "",
  city: "",
  email: "",
};
let payment = ref("");
let date = ref(new Date());

let orderTotal = ref(0);

orderTotal = computed(() => {
  let total = 0;
  store.orderItems.forEach((item) => {
    total += item.price * item.quantity;
  })
  return total;
})

</script>
<style>
.order-list {
  height: 70vh;
  margin-top: 60px;
  padding: 5%;
  display: flex;
  gap: 5vw;
}
.order-form {
  width: 40vw;
  height: 60vh;
  display: flex;
  justify-content: center;
}

.order-form .p-card-content {
  display: flex;
  flex-flow: column wrap;
  gap: 1rem;
}

.order-form .p-card {
  width: fit-content;
  height: fit-content;
  box-shadow: 0px 0px 15px 3px rgba(0, 0, 0, 0.25);
}

.form-wrapper {
  display: flex;
  flex-flow: row wrap;
  gap: 1rem;
}

.label-wrapper {
  display: flex;
  flex-flow: column wrap;
}

.radio-wrapper {
  display: flex;
  flex-flow: row wrap;
  gap: 1rem;
}

.p-radiobutton .p-radiobutton-box .p-radiobutton-icon {
  width: 80%;
  height: 80%;
  margin: auto;
  margin-top: 10%;
  margin-bottom: 10%;
  border-radius: 100%;
  cursor: pointer;
}

.payment-wrapper {
  display: flex;
  flex-flow: row wrap;
  gap: 3rem;
}

.item-list {
  width: 30vw;
  border-radius: var(--border-radius);
  display: flex;
  flex-flow: column;
  gap: 1rem;
  margin-top: -5rem;
}

.order-wrapper {
  height: 65vh;
  display: flex;
  flex-flow: column;
  gap: 2rem;
  overflow-x: auto;
  padding: 5%;
}

.order-wrapper::-webkit-scrollbar {
  width: 0.5rem;
}

.order-wrapper::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.order-wrapper::-webkit-scrollbar-thumb {
  background: var(--primary-color);
  border-radius: 5rem;
}

.order-wrapper::-webkit-scrollbar-thumb:hover {
  background: #555;
}

.order-total{
    font-size: 3rem;
    color: var(--third-color);
    text-align: right;
    border-top: 1px solid var(--third-color);
    padding-top: 1rem;
}

.item-list h3 {
  text-align: center;
  color: var(--third-color);
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  margin-top: 1rem;
  font-family: "Poppins Semi Bold", sans-serif;
  border-bottom: 1px solid var(--third-color);
  padding-bottom: 1rem;
}

.order-item {
  background-color: rgba(238, 176, 137, 0.4);
  padding: 1rem;
  border-radius: var(--border-radius);
  display: flex;
  gap: 1rem;
  position: relative;
  box-shadow: 0px 0px 5px 3px rgba(0, 0, 0, 0.25);
}

.order-item-img {
  width: 10rem;
  border-radius: var(--border-radius);
}

.order-item-title {
  font-family: "Poppins Semi Bold", sans-serif;
  color: var(--third-color);
  font-size: 1.5rem;
}

.order-item-desc {
  font-size: 1rem;
  color: var(--primary-color);
}

.order-item-price {
  font-size: 2rem;
  color: var(--third-color);
  position: absolute;
  bottom: 0.5rem;
}

.quantity-input {
  width: 80px;
  height: 30px;
}
.quantity-input input {
  width: 100%;
}
.quantity-input button {
  width: 30px !important;
  height: 10px !important;
}
.quantity-input button .p-icon {
  width: 10rem !important;
}

.order-item-quantity {
  color: var(--third-color);
  position: absolute;
  right: 1rem;
  bottom: 1rem;
}
.delete-item {
  position: absolute;
  right: 1rem;
  background: red;
  padding: 5px;
  border-radius: 100%;
  color: white;
  cursor: pointer;
}

.empty-cart {
  text-align: center;
  height: 33.6vh;
}

@media screen and (max-width: 1024px) {

  .order-list {
    height: fit-content;
    flex-flow: row wrap;
    gap: 2rem;
  }

  .order-form{
    width: 100%;
    height: fit-content;
  }

  .item-list{
    width: 100%;
    margin: 0;
  }

  .order-wrapper{
    height: fit-content;
  }

  .order-item{
    flex-flow: column;
  }

  .order-item-price{
    position: relative;
    bottom: -0.5rem
  }

  .order-item-img{
    width: 100%;
  }
  
}

</style>
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menu: [
      {
        name: "Meal One",
        weekday: "Monday",
        ingredients: [
          "Ingredient one,",
          "Ingredient two,",
          "Ingredient three,",
          "Ingredient four",
        ],
        alergens: ["Alergen one,", "Alergen two"],
        price: 100,
        image: "farhad-ibrahimzade-KpOl9jV2aJM-unsplash.jpg",
      },
      {
        name: "Meal Two",
        weekday: "Tuesday",
        ingredients: [
          "Ingredient one,",
          "Ingredient two,",
          "Ingredient three,",
          "Ingredient four",
        ],
        alergens: ["Alergen one,", "Alergen two"],
        price: 90,
        image: "khloe-arledge-ND3edEmzcdQ-unsplash.jpg",
      },
      {
        name: "Meal Three",
        weekday: "Wednessday",
        ingredients: [
          "Ingredient one,",
          "Ingredient two,",
          "Ingredient three,",
          "Ingredient four",
        ],
        alergens: ["Alergen one,", "Alergen two"],
        price: 120,
        image: "rebecca-hansen-hRmk-FMpofc-unsplash.jpg",
      },
      {
        name: "Meal Four",
        weekday: "Thursday",
        ingredients: [
          "Ingredient one,",
          "Ingredient two,",
          "Ingredient three,",
          "Ingredient four",
        ],
        alergens: ["Alergen one,", "Alergen two"],
        price: 110,
        image: "tim-foster-e2r72Jb2EtE-unsplash.jpg",
      },
      {
        name: "Meal Five",
        weekday: "Friday",
        ingredients: [
          "Ingredient one,",
          "Ingredient two,",
          "Ingredient three,",
          "Ingredient four",
        ],
        alergens: ["Alergen one,", "Alergen two"],
        price: 85,
        image: "brandi-alexandra-M-Br3v3-gao-unsplash.jpg",
      },
      {
        name: "Meal Six",
        weekday: "Monday",
        ingredients: [
          "Ingredient one,",
          "Ingredient two,",
          "Ingredient three,",
          "Ingredient four",
        ],
        alergens: ["Alergen one,", "Alergen two"],
        price: 100,
        image: "farhad-ibrahimzade-KpOl9jV2aJM-unsplash.jpg",
      },
      {
        name: "Meal Seven",
        weekday: "Tuesday",
        ingredients: [
          "Ingredient one,",
          "Ingredient two,",
          "Ingredient three,",
          "Ingredient four",
        ],
        alergens: ["Alergen one,", "Alergen two"],
        price: 90,
        image: "khloe-arledge-ND3edEmzcdQ-unsplash.jpg",
      },
      {
        name: "Meal Eight",
        weekday: "Wednessday",
        ingredients: [
          "Ingredient one,",
          "Ingredient two,",
          "Ingredient three,",
          "Ingredient four",
        ],
        alergens: ["Alergen one,", "Alergen two"],
        price: 120,
        image: "rebecca-hansen-hRmk-FMpofc-unsplash.jpg",
      },
      {
        name: "Meal Nine",
        weekday: "Thursday",
        ingredients: [
          "Ingredient one,",
          "Ingredient two,",
          "Ingredient three,",
          "Ingredient four",
        ],
        alergens: ["Alergen one,", "Alergen two"],
        price: 110,
        image: "tim-foster-e2r72Jb2EtE-unsplash.jpg",
      },
      {
        name: "Meal Ten",
        weekday: "Friday",
        ingredients: [
          "Ingredient one,",
          "Ingredient two,",
          "Ingredient three,",
          "Ingredient four",
        ],
        alergens: ["Alergen one,", "Alergen two"],
        price: 85,
        image: "brandi-alexandra-M-Br3v3-gao-unsplash.jpg",
      },
      {
        name: "Meal Eleven",
        weekday: "Monday",
        ingredients: [
          "Ingredient one,",
          "Ingredient two,",
          "Ingredient three,",
          "Ingredient four",
        ],
        alergens: ["Alergen one,", "Alergen two"],
        price: 100,
        image: "farhad-ibrahimzade-KpOl9jV2aJM-unsplash.jpg",
      },
      {
        name: "Meal Twelve",
        weekday: "Tuesday",
        ingredients: [
          "Ingredient one,",
          "Ingredient two,",
          "Ingredient three,",
          "Ingredient four",
        ],
        alergens: ["Alergen one,", "Alergen two"],
        price: 90,
        image: "khloe-arledge-ND3edEmzcdQ-unsplash.jpg",
      },
      {
        name: "Meal Thirteen",
        weekday: "Wednessday",
        ingredients: [
          "Ingredient one,",
          "Ingredient two,",
          "Ingredient three,",
          "Ingredient four",
        ],
        alergens: ["Alergen one,", "Alergen two"],
        price: 120,
        image: "rebecca-hansen-hRmk-FMpofc-unsplash.jpg",
      },
      {
        name: "Meal Fourteen",
        weekday: "Thursday",
        ingredients: [
          "Ingredient one,",
          "Ingredient two,",
          "Ingredient three,",
          "Ingredient four",
        ],
        alergens: ["Alergen one,", "Alergen two"],
        price: 110,
        image: "tim-foster-e2r72Jb2EtE-unsplash.jpg",
      },
      {
        name: "Meal Fifteen",
        weekday: "Friday",
        ingredients: [
          "Ingredient one,",
          "Ingredient two,",
          "Ingredient three,",
          "Ingredient four",
        ],
        alergens: ["Alergen one,", "Alergen two"],
        price: 85,
        image: "brandi-alexandra-M-Br3v3-gao-unsplash.jpg",
      },
      {
        name: "Meal Sixteen",
        weekday: "Monday",
        ingredients: [
          "Ingredient one,",
          "Ingredient two,",
          "Ingredient three,",
          "Ingredient four",
        ],
        alergens: ["Alergen one,", "Alergen two"],
        price: 100,
        image: "farhad-ibrahimzade-KpOl9jV2aJM-unsplash.jpg",
      },
      {
        name: "Meal Seventeen",
        weekday: "Tuesday",
        ingredients: [
          "Ingredient one,",
          "Ingredient two,",
          "Ingredient three,",
          "Ingredient four",
        ],
        alergens: ["Alergen one,", "Alergen two"],
        price: 90,
        image: "khloe-arledge-ND3edEmzcdQ-unsplash.jpg",
      },
      {
        name: "Meal Eighteen",
        weekday: "Wednessday",
        ingredients: [
          "Ingredient one,",
          "Ingredient two,",
          "Ingredient three,",
          "Ingredient four",
        ],
        alergens: ["Alergen one,", "Alergen two"],
        price: 120,
        image: "rebecca-hansen-hRmk-FMpofc-unsplash.jpg",
      },
      {
        name: "Meal Nineteen",
        weekday: "Thursday",
        ingredients: [
          "Ingredient one,",
          "Ingredient two,",
          "Ingredient three,",
          "Ingredient four",
        ],
        alergens: ["Alergen one,", "Alergen two"],
        price: 110,
        image: "tim-foster-e2r72Jb2EtE-unsplash.jpg",
      },
      {
        name: "Meal Twenty",
        weekday: "Friday",
        ingredients: [
          "Ingredient one,",
          "Ingredient two,",
          "Ingredient three,",
          "Ingredient four",
        ],
        alergens: ["Alergen one,", "Alergen two"],
        price: 85,
        image: "brandi-alexandra-M-Br3v3-gao-unsplash.jpg",
      },
    ],
    attributions: [{ url: "https://unsplash.com/@frostroomhead?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText", name: 'Rodion Kutsaiev' },
    { url: "https://unsplash.com/@ferhadd?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText", name: 'Farhad Ibrahimzade' },
    { url: "https://unsplash.com/@khloephoto?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText", name: 'khloe arledge' },
    { url: "https://unsplash.com/@brandialxndra?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText", name: 'Brandi Alexandra' },
    { url: "https://unsplash.com/@timberfoster?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText", name: 'Tim Foster' },
    { url: "https://unsplash.com/it/@bmarie97?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText", name: 'Rebecca Hansen' },
    { url: "https://unsplash.com/@kazizayane?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText", name: 'Zakaria Zayane' }],
    mailRegex: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})

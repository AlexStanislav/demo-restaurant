// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    menuItems: [
      {
        name: 'Margherita Pizza',
        ingredients: ['tomato sauce', 'mozzarella', 'basil'],
        description: 'Classic Neapolitan pizza with tomato sauce, mozzarella, and fresh basil',
        price: 12.99,
        image: "louis-hansel-cC0_UO1Obg4-unsplash(margherita)",
        url:"https://unsplash.com/photos/cC0_UO1Obg4?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink",
        attribution: `Photo by <a href="https://unsplash.com/es/@louishansel?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Louis Hansel</a> on <a href="https://unsplash.com/s/photos/margherita-pizza?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>`
      },
      {
        name: 'Pesto Pasta',
        ingredients: ['pasta', 'basil pesto', 'parmesan'],
        description: 'Fresh pasta with homemade basil pesto and grated parmesan cheese',
        price: 9.99,
        image: "logan-jeffrey-L7ji58E3RSs-unsplash(pesto pasta)",
        url:"https://unsplash.com/photos/L7ji58E3RSs?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink",
        attribution: `Photo by <a href="https://unsplash.com/@foodjetsexpress?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">logan jeffrey</a> on <a href="https://unsplash.com/s/photos/pesto-pasta?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>`
      },
      {
        name: 'Caesar Salad',
        ingredients: ['romaine lettuce', 'croutons', 'parmesan', 'Caesar dressing'],
        description: 'Classic Caesar salad with crisp romaine lettuce, crunchy croutons, and tangy dressing',
        price: 7.99,
        image: "ryan-concepcion-w_z0RJCSBiE-unsplash(caesar)",
        url:"https://unsplash.com/photos/w_z0RJCSBiE?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink",
        attribution: `Photo by <a href="https://unsplash.com/@bite_size01?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ryan Concepcion</a> on <a href="https://unsplash.com/s/photos/caesar-salad?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>`
      },
      {
        name: 'Beef Burger',
        ingredients: ['beef patty', 'lettuce', 'tomato', 'cheddar', 'bacon', 'mayo'],
        description: 'Juicy beef burger with crisp lettuce, ripe tomato, melted cheddar, crispy bacon, and creamy mayo',
        price: 11.99,
        image: "amirali-mirhashemian-sc5sTPMrVfk-unsplash(beef burger)",
        url:"https://unsplash.com/photos/sc5sTPMrVfk?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink",
        attribution: `Photo by <a href="https://unsplash.com/@amir_v_ali?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">amirali mirhashemian</a> on <a href="https://unsplash.com/s/photos/beef-burger?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>`
      },
      {
        name: 'Chicken Tacos',
        ingredients: ['chicken', 'tortillas', 'salsa', 'guacamole'],
        description: 'Tasty chicken tacos with soft tortillas, fresh salsa, and creamy guacamole',
        price: 8.99,
        image: "krisztian-tabori-ZQf4jzkpz1k-unsplash(chicken taco)",
        url:"https://unsplash.com/photos/ZQf4jzkpz1k?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink",
        attribution: `Photo by <a href="https://unsplash.com/@ktabori?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Krisztian Tabori</a> on <a href="https://unsplash.com/s/photos/chicken-tacos?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>`
      },
      {
        name: 'Mushroom Risotto',
        ingredients: ['arborio rice', 'mushrooms', 'parmesan', 'white wine'],
        description: 'Creamy mushroom risotto with al dente arborio rice, grated parmesan, and a splash of white wine',
        price: 10.99,
        image: "rob-wicks-qrleIV6KkfI-unsplash(mushroom risotto)",
        url:"https://unsplash.com/photos/qrleIV6KkfI?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink",
        attribution: `Photo by <a href="https://unsplash.com/@robwicks?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Rob Wicks</a> on <a href="https://unsplash.com/s/photos/Mushroom-Risotto?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>`
      },
      {
        name: 'Fish and Chips',
        ingredients: ['cod', 'fries', 'tartar sauce'],
        description: 'Classic British dish with crispy battered cod, golden fries, and tangy tartar sauce',
        price: 13.99,
        image: "meelan-bawjee-A_tPBct4tz8-unsplash(fishNchips)",
        url:"https://unsplash.com/photos/A_tPBct4tz8?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink",
        attribution: `Photo by <a href="https://unsplash.com/fr/@milodude?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Meelan Bawjee</a> on <a href="https://unsplash.com/s/photos/Fish-and-Chips?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>`
      },
      {
        name: 'Vegetable Curry',
        ingredients: ['vegetables', 'rice', 'curry sauce'],
        description: 'Flavorful vegetable curry with a side of fluffy rice and aromatic sauce',
        price: 9.99,
        image: "dragne-marius-EdzsUFqHbaY-unsplash(vegetable curry)",
        url:"https://unsplash.com/photos/EdzsUFqHbaY?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink",
        attribution: `Photo by <a href="https://unsplash.com/@marius_dragne?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Dragne Marius</a> on <a href="https://unsplash.com/s/photos/vegetable-curry?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>`
      },
      {
        name: 'BBQ Ribs',
        ingredients: ['pork ribs', 'BBQ sauce', 'coleslaw'],
        description: 'Fall-off-the-bone pork ribs with smoky BBQ sauce and refreshing coleslaw',
        price: 14.99,
        image: "alexandru-bogdan-ghita-UeYkqQh4PoI-unsplash(ribs)",
        url:"https://unsplash.com/photos/UeYkqQh4PoI?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink",
        attribution: `Photo by <a href="https://unsplash.com/@bogzilla?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Alexandru-Bogdan Ghita</a> on <a href="https://unsplash.com/s/photos/bbq-ribs?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>`
      },
      {
        name: 'Chocolate Cake',
        ingredients: ['chocolate', 'flour', 'sugar', 'eggs'],
        description: 'Decadent chocolate cake with rich cocoa flavor, fluffy crumb, and silky frosting',
        price: 6.99,
        image: "david-holifield-kPxsqUGneXQ-unsplash(cake)",
        url:"https://unsplash.com/photos/kPxsqUGneXQ?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink",
        attribution: `Photo by <a href="https://unsplash.com/@davidholifield?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">David Holifield</a> on <a href="https://unsplash.com/s/photos/chocolate-cake?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>`
      },
      {
        name: 'Caprese Salad',
        ingredients: ['mozzarella', 'tomato', 'basil', 'balsamic vinegar'],
        description: 'Fresh mozzarella, ripe tomato, and fragrant basil drizzled with tangy balsamic vinegar',
        price: 6.99,
        image: "bryony-elena-dJGeISqeEiw-unsplash(caprese)",
        url:"https://unsplash.com/photos/kPxsqUGneXQ?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink",
        attribution: `Photo by <a href="https://unsplash.com/es/@b_elena?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Bryony Elena</a> on <a href="https://unsplash.com/s/photos/caprese-salad?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>`
      },
      {
        name: 'Grilled Cheese Sandwich',
        ingredients: ['bread', 'cheddar', 'butter'],
        description: 'Classic grilled cheese sandwich with melted cheddar and buttery toasted bread',
        price: 5.99,
        image: "pixzolo-photography-BiWb1Y8wpZk-unsplash(grilled)",
        url:"https://unsplash.com/photos/Tv7Bb8-341w?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink",
        attribution: `Photo by <a href="https://unsplash.com/@montatip?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">montatip lilitsanong</a> on <a href="https://unsplash.com/s/photos/Vegetable-Stir-Fry?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>`
      },
      {
        name: 'Vegetable Stir-Fry',
        ingredients: ['vegetables', 'rice noodles', 'soy sauce'],
        description: 'Healthy and flavorful stir-fry with a variety of colorful vegetables and rice noodles, seasoned with soy sauce',
        price: 8.99,
        image: "montatip-lilitsanong-Tv7Bb8-341w-unsplash(stirfry)",
        url:"https://unsplash.com/photos/Xoo1LJd0nm8?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink",
        attribution: `Photo by <a href="https://unsplash.com/@raiakash?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Akash Rai</a> on <a href="https://unsplash.com/s/photos/steak-frites?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>`
      },
      {
        name: 'Steak Frites',
        ingredients: ['steak', 'fries', 'herb butter'],
        description: 'Succulent steak served with crispy fries and a dollop of herb butter for extra flavor',
        price: 16.99,
        image: "akash-rai-Xoo1LJd0nm8-unsplash(steak)",
        url:"https://unsplash.com/photos/BiWb1Y8wpZk?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink",
        attribution: `Photo by <a href="https://unsplash.com/@pixzolo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Pixzolo Photography</a> on <a href="https://unsplash.com/s/photos/grilled-cheese-sandwich?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>`
      }      
    ],
    orderItems: [],
    isMobile: () => {
      return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    }
  }),
  actions: {
    addItem(item) {
      if(this.orderItems.indexOf(item) !== -1) {
        this.orderItems[this.orderItems.indexOf(item)].quantity += 1
      }else{
        item.quantity = 1
        this.orderItems.push(item)
      }
    },
    removeItem(item) {
      this.orderItems.splice(this.orderItems.indexOf(item), 1)
    }
  }
})

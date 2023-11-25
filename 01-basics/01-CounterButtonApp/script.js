import { createApp } from './vendor/vue.esm-browser.js';

const app = createApp({
  data: () => ({
    counter: 0
  }),
  template: `<button type="button" @click="counter += 1">{{ counter }}</button>`
})

app.mount('#app')

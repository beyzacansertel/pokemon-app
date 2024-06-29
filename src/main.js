import { createApp } from "vue";

import App from "./App.vue";
import Pokemons from "./components/Pokemons.vue";

const app = createApp(App);

app.component("pokemons", Pokemons);

app.mount("#app");

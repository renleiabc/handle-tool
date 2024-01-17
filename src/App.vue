<script setup lang="ts">
// import { ref, reactive } from 'vue';
import typescriptLogo from './typescript.svg';
import { typeOf, debounce, hideMobile, turnCase } from '../lib/main';

console.log('🚀 ~ file: App.vue:6 ~ typeOf:', typeOf);
typeOf('树哥'); // string
typeOf([]); // array
typeOf(new Date()); // date
typeOf(null); // null
typeOf(true); // boolean
const a = typeOf({}); // function
console.log('🚀 ~ file: App.vue:13 ~ a:', a);
const loadList = () => {
  debounce(() => {
    console.log('加载数据');
  }, 500);
};
loadList();
const hide = hideMobile('13788895634');
console.log('🚀 ~ file: App.vue:21 ~ hide:', hide);
const react = turnCase('react', 1);
console.log('🚀 ~ file: App.vue:23 ~ react:', react);
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img
        :src="`${typescriptLogo}`"
        class="logo vanilla"
        alt="TypeScript logo"
      />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
</template>

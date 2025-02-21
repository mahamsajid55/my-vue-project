<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const products = ref([]);

onMounted(async () => {
  const response = await axios.get('http://localhost:3000/products');
  products.value = response.data;
});
</script>

<template>
  <div>
    <h2>Products</h2>
    <ul>
      <li v-for="product in products" :key="product.id">
        {{ product.name }} - {{ product.rate }}%
      </li>
    </ul>
  </div>
</template>

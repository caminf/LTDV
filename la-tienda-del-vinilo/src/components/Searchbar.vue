<template>
    <div class="search-item">
        <input v-model="keyword" class="search-bar" type="text" placeholder="Buscar" @change="search" />
    </div>
</template>

<script setup>
import { ref } from 'vue'
import products from '../data/data.js'
const keyword = ref("");


function search() {
    const findItem = products.filter(
    (item) => item.name === keyword.value
);
if (findItem) {
    console.log(findItem)

}else{
    console.log("nada encontrado");
}
}

</script>

<style lang="scss">
.search-bar {
    padding: 1rem;
    width: 90%;
    background-color: --primary-alt;
}


.search-item {
    display: flex;
    justify-content: center;
    padding: 1rem;
    margin-bottom: 1rem;
}
</style>
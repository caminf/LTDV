<template>
    <main class="wishlist-page">
        <div class="item">
            <h1>Lista de deseos</h1>
            <ProfileButton/>
        </div>
        <div></div>
        <v-container class="d-flex mask">

        </v-container>
        
    </main>
</template>

<script setup>
import ProfileButton from '@/components/ProfileButton.vue';
import UserNavbar from '@/components/UserNavbar.vue';
</script>

<style lang="scss">
.mask{
    height: 500px;
    width: 1000px;
    background-color: var(--light-grey);
    align-self: auto;
}
</style>
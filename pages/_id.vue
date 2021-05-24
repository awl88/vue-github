<template>
  <div class="container">
    <div v-if="account">
      <AccountHeader :account="account"/>
    </div>
  </div>
</template>

<script lang="ts">
  import axios from "axios"
  import { Bar } from 'vue-chartjs'
  import AccountHeader from '../components/AccountHeader.vue';

  export default {
    components: { AccountHeader },
    async asyncData({ params }) {
      try {

      const data = await axios.get(`https://api.github.com/users/${params.id}`);
      return {account: data.data}
      } catch {
        console.log('User not found');
      }
    }
  }
</script>

<style>
.container {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>

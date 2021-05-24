<template>
  <div class="container">
    <div v-if="user">
      <div class="profile-picture">
      <figure class="is-horizontal-center image is-128x128">
        <img class="round-border is-rounded" v-bind:src="user.avatar_url">
      </figure>
      </div>
      <div>
      <h2 class="title">
        @{{user.login}}
      </h2>
      </div>
      <div class="links">
        
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import axios from "axios"

  export default {
    async asyncData({ params }) {
      try {

      const data = await axios.get(`https://api.github.com/users/${params.id}`);
      return {user: data.data}
      } catch {
        console.log('User not found');
      }
    }
  }
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.profile-picture {
    display: flex;
    justify-content: center;
    padding: 5px;
}

.round-border {
  border: 5px solid #2e83df;
}

.title {
  font-family:
    'SF Mono', 
    SFMono-Regular, 
    ui-monospace,
    'DejaVu Sans Mono',   
    Menlo, 
    Consolas, 
    monospace;
  display: block;
  font-size: 24px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

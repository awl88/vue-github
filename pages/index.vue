<template>
  <div class="container">
    <h1>
      Who do you want to find?
    </h1>
    <div class="text-box">
        <input v-model="account" class="input" type="text" placeholder="GitHub Account">
    </div>
    <div class="field">
      <p class="control">
        <nuxt-link :to="`user/${account}`">
          <button class="button">
            Search!
          </button>
        </nuxt-link>
      </p>
    </div>
  </div>
</template>

<script>
  import axios from "axios"

  export default {
    data() {
      return {
        account:'',
      }
    },
    async asyncData() {
      try {

      const data = await axios.get(`https://api.github.com/users/awl88`);
      return {user: data.data}
      } catch {
        console.log('User not found');
      }
    }
  }
</script>

<style>
.profile-picture {
    display: flex;
    justify-content: center;
    padding: 5px;
}

.round-border {
  border: 5px solid #35495e;
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

.text-box {
  width: 200px;
  padding: 5px;
}

.links {
  padding-top: 15px;
}
</style>

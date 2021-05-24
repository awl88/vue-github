<template>
  <div>
    <div class="header">
      <div v-if="account">
        <AccountHeader :account="account"/>
      </div>
    </div>
    <div class="body" v-if="repos">
      <AccountRepos :repos="repos" :account="account"/>
    </div>
  </div>
</template>

<script>
  import axios from "axios"
  import AccountHeader from '../../components/AccountHeader.vue';
  import AccountRepos from '../../components/AccountRepos.vue';

  export default {
    components: { AccountHeader, AccountRepos },
    async asyncData({ params }) {
        let [account, repos] = await Promise.all([
          axios.get(`https://api.github.com/users/${params.id}`),
          axios.get(`https://api.github.com/users/${params.id}/repos`)
        ])

        return {
          account: account.data,
          repos: repos.data
        }
    },
    
  } 
</script>

<style>
.header {
  margin: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.body {
  margin: 100px;
  display: flex;
}
</style>

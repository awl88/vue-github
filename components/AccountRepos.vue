<template>
    <div class="columns is-multiline">
        <div class="column is-one-third" v-for="repo in repos" :key="repo.id">
            <RepoInfo :repo="repo" :account="account"/>
        </div>
    </div>
</template>

<script>
import RepoInfo from './RepoInfo.vue';

export default {
  components: { RepoInfo },
    name: 'AccountRepos',
    props: ["repos", "account"],
    data() {
        return {
            count: 0
        }    
    },
    methods: {
        increment() {
            this.count++;
        }
    }
    
}
</script>

<style>

</style>
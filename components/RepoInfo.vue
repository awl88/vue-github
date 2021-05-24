<template>
    <nuxt-link :to="`/user/${account.login}/${repo.name}`">
        <div class="card is-one-third">
            <div class="card-header">
                <div class="card-header-title">{{repo.name}}</div>
            </div>
            <div class="card-content">
                <p class="is-family-monospace"> 
                    Language: {{repo.language}}
                    <br>
                    Stars: {{repo.stargazers_count}} 
                    <br>
                    Forks: {{repo.forks}}
                </p>
            </div>
        </div>
    </nuxt-link>
</template>

<script>
export default {
    name: "RepoInfo",
    props: ["repo", "account"]
}
</script>

<style scoped>
.card-style {
    padding: 5px;
}
.title {
    font-size: 24px;   
    padding: 10px; 
}
</style>
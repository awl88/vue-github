<template>
    <a v-bind:href="commit.html_url">
        <div class="card is-one-third">
            <div class="card-header">
                <div class="card-header-title">{{commit.commit.message}}</div>
            </div>
            <div class="card-content">
                <p class="is-family-monospace"> 
                    Who: {{commit.commit.author.name}}
                    <br>
                    When: {{toDate(commit.commit.author.date)}}
                    <br>

                </p>
            </div>
        </div>
    </a>
</template>

<script>
import dateFilter from '../assets/dateFilter'

export default {
    name: "CommitInfo",
    props: ["commit"],

    methods: {
        toDate: dateFilter.toDate
    }
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
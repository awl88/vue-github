<template>
    <div>
        <v-btn @click="back">
            <div class="has-text-right">
                go back
            </div>
        </v-btn>
        <div class="container">
            <h1 class="header">Commits for {{this.$route.params.repo}}</h1>
            <div class="columns is-multiline" v-if="commits">
                <div class="column is-one-third" v-for="commit in commits" :key="commit.id">
                    <CommitInfo :commit="commit"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios"
import CommitInfo from '../../../components/CommitInfo.vue';

export default {
  components: { CommitInfo },
    props: ["account", "repo"],
    async asyncData({ params }) {
        const commits = await axios.get(`https://api.github.com/repos/${params.account}/${params.repo}/commits`);
        return { commits: commits.data }
    },
    methods: {
        back() {
            this.$router.go(-1);
        }
    }

}
</script>

<style scoped>
.header {
  margin: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family:
    'SF Mono', 
    SFMono-Regular, 
    ui-monospace,
    'DejaVu Sans Mono',   
    Menlo, 
    Consolas, 
    monospace;
  color: #35495e;
  letter-spacing: 1px;
  margin-bottom: 10px !important;
  font-size: 36px;
}
</style>
<template>
    <div>
        <div class="profile-picture">
            <figure class="is-horizontal-center image is-128x128">
                <img class="round-border is-rounded" v-bind:src="account.avatar_url">
            </figure>
        </div>
        <div>
            <div class="title name">{{account.name}}</div>
            <div class="title login">
                <a v-bind:href="'https://github.com/' + account.login">
                    @{{account.login}}
                </a>
            </div>
        </div>
        <AccountInfo :account="account" :repos="null" />
    </div>
</template>

<script>
import AccountInfo from '../components/AccountInfo.vue';

export default {   
    name: 'AccountHeader',
    props: ["account", "repos"],
    components: {AccountInfo},

}
</script>

<style scoped>
.profile-picture {
    display: flex;
    justify-content: center;
    padding: 30px;
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
  color: #35495e;
  letter-spacing: 1px;
  margin-bottom: 10px !important;
}

.login {
  font-size: 18px;
  font-weight: 1;
}

.name {
  font-size: 36px;
}
</style>
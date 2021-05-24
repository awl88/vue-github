<template>
  <div class="columns">
    <div class="column">
        <div class="card card-style">
            <div class="card-content">
                <div class="content">
                    <h2>{{account.followers}}</h2>
                    <p>repositories</p>
                </div>
            </div>
        </div>
    </div>
    <div class="column">
        <div class="card card-style">
            <div class="card-content">
                <div class="content">
                    <h2>{{account.followers}}</h2>
                    <p>followers</p>
                </div>
            </div>
        </div>
    </div>
    <div class="column">
        <div class="card card-style">
            <div class="card-content">
                <div class="content">
                <h2>{{account.following}}</h2>
                <p>following</p>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'UserInfo',
    props: ["account", "repos"]

}
</script>

<style>
.card-style {
    width: 175px;    
}
</style>
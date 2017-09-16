<template>
    <!-- <div class="frameBox"> -->
    <div class="frameContentr">
        <router-link :to="{path: 'officialAccounts'}">message</router-link>
    </div>
        <!-- <div class="frameFooter">
            <frameFooter :idx="3"></frameFooter>
        </div>
    </div> -->
</template>

<script>
    import frameFooter from './../../components/footer/footer'
    export default {
        name: 'message',
        components: {
            frameFooter
        }
    }
</script>

<style lang="less" scoped>
    @import "./../../assets/less/model.less";
    
</style>

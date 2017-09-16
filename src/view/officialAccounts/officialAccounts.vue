<template>
    <!-- <div class="frameBox"> -->
    <!-- <div class="frameContentr"> -->
        <!-- <router-link :to="{path: 'officialAccounts'}">officialAccounts</router-link> -->
    <transition :name="transitionName">
        <router-view class="child-view"></router-view>
    </transition>
    <!-- </div> -->
        <!-- <div class="frameFooter">
            <frameFooter :idx="2"></frameFooter>
        </div>
    </div> -->
</template>

<script>
    import frameFooter from './../../components/footer/footer'
    export default {
        name: 'officialAccounts',
        components: {
            frameFooter
        },
        data: function () {
            return {
                transitionName: 'slide-left'
            }
        },
        watch: {  
            '$route' (to, from) {
                let isBack = this.$router.isBack  //  监听路由变化时的状态为前进还是后退
                if(isBack) {
                    this.transitionName = 'slide-right'
                } else {
                    this.transitionName = 'slide-left'
                }
                this.$router.isBack = false
        　　}
        }  
    }
</script>

<style lang="less" scoped>
    @import "./../../assets/less/model.less";
    
    //路由动画
    .child-view {  
        // position: absolute;
        width: 100%;
        transition: all .4s ease;
        // background:red;
    }  
    .slide-left-enter, .slide-right-leave-active {  
        opacity: 0;  
        -webkit-transform: translate(100%, 0);  
        transform: translate(100%, 0);  
    }  
    .slide-left-leave-active, .slide-right-enter {  
        opacity: 0;  
        -webkit-transform: translate(-100%, 0);  
        transform: translate(-100%, 0);  
    }  
</style>

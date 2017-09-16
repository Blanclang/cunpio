<template>
    <div id="app">
        <div class="frameBox">
            <router-view></router-view>
            <div class="frameFooter" v-if="this.$store.state.footerShow">
                <frameFooter :footData="footerData"></frameFooter>
            </div>
        </div>
        <!-- <router-view></router-view> -->
       <!--  <transition :name="transitionName">
            <router-view class="child-view"></router-view>
        </transition>     -->
    </div>
</template>

<script>

    import frameFooter from './components/footer/footer'
    export default {
        name: 'app',
        data: function () {
            return {
                footerData:[
                    {
                        path:'/home',
                        style:'footer-icon1',
                        idx:1
                    },
                    {
                        path:'/officialAccounts',
                        style:'footer-icon2',
                        idx:2
                    },
                    {
                        path:'/message',
                        style:'footer-icon3',
                        idx:3
                    },
                    {
                        path:'/personal',
                        style:'footer-icon4',
                        idx:4
                    }
                ]  
            }
        },
        components: {
            frameFooter
        },
        mounted () {  
        }, 
        // watch: {  
        //     '$route' (to, from) {
        // 　　　　let isBack = this.$router.isBack  //  监听路由变化时的状态为前进还是后退
        //         if(isBack) {
        //             this.transitionName = 'slide-right'
        //     　　} else {
        //             this.transitionName = 'slide-left'
        //     　　}
        //     　　this.$router.isBack = false
        // 　　}
        // }  
    }
</script>

<style lang="less">
    @import "./assets/less/_reset";
    @import "./assets/less/model.less";
    #app{
        width: 100%;
        height:100%;
        overflow:hidden;
    }
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

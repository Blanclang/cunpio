<template>
    <div :class="$store.state.footerShow ? 'frameContentr' : 'frameContentrPlus'">
        <transition :name="transitionName">
            <router-view class="child-view"></router-view>
        </transition>

        <div class="indexPageBox" v-if="$store.state.footerShow" >
            <div class="titIconBox">
                <div class="titIcon">
                    <img src="./../../assets/images/personCenter/titIcon.png">
                </div>
                <ul class="userInfoBox">
                    <li><label>昵称:</label><span>Blanc</span></li>
                    <li><label>手机号:</label><span>18812345621</span></li>
                </ul>
            </div>
            <ul class="accountInfo">
                <li>
                    <h3>总账户(元)</h3>
                    <p>0.00</p>
                </li>
                <div style="height:3rem;border-right:1px solid #ccc;"></div>
                <li>
                    <h3>分红体验金</h3>
                    <p>0</p>
                </li>
            </ul>
            <ul class="presonCenterList">
                <li>
                    <router-link :to="{path: '/personal/myCoupons'}">
                        <label>我的积分</label>
                        <div class="iconTipBox">
                            <span>0</span>
                            <img src="./../../assets/images/personCenter/center_icon1.png"/>
                        </div>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{path: '/personal/setting'}">
                        <label>银行卡</label>
                        <div class="iconTipBox">
                            <span>未绑定</span>
                            <img src="./../../assets/images/personCenter/center_icon2.png"/>
                        </div>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{path: '/personal/myCoupons'}">
                        <label>我的券包</label>
                        <div class="iconTipBox">
                            <span>0</span>
                            <img src="./../../assets/images/personCenter/center_icon3.png"/>
                        </div>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{path: '/personal/setting'}">
                        <label>设置</label>
                        <div class="iconTipBox">
                            <span></span>
                            <img src="./../../assets/images/personCenter/center_icon4.png"/>
                        </div>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{path: '/personal/setting'}">
                        <label>客服</label>
                        <div class="iconTipBox">
                            <span>8:30-18:00</span>
                            <img src="./../../assets/images/personCenter/center_icon5.png"/>
                        </div>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'personal',
        data: function () {
            return {
                transitionName: 'slide-left'
            }
        },
        components: {
        },
        mounted () {
            console.log(this.$store.state.title);
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

    .indexPageBox{
        width: 100%;
        height: 100%;
        overflow:hidden;
        overflow-y: auto;
    }
    
    .titIconBox{
        width:100%;
        height: 13rem;
        background:url('./../../assets/images/personCenter/card_bg.png') no-repeat 100%;
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
        .titIcon{
            width:85px;
            height: 85px;
            border-radius: 50%;
            overflow:hidden;
            img{
                width:100%;
                height: 100%;
            }
        }
        .userInfoBox{
            margin-top: 10px;
            text-align: center;
            color:#fff;
        }
    }
    .presonCenterList{
        width:100%;
        background:#fff;
        margin:1rem 0px;
        li{
            width:100%;
            height: 4.2rem;
            padding: 0px 0.5rem;
            a{
                display:flex;
                justify-content:space-between;
                align-items:center;
                width:100%;
                height:100%;
                border-bottom:1px solid #ccc;
                label{
                    font-size: 1.1rem;
                }
                .iconTipBox{
                    display:flex;
                    justify-content:space-between;
                    align-items:center;
                    span{
                        font-size: 1.1rem;
                        padding-right: 5px;
                    }
                    img{
                        width:1.8rem;
                        height: 1.8rem;
                    }
                }
            }
        }
    }
    .accountInfo{
        width:100%;
        background:#fff;
        display:flex;
        justify-content:space-between;
        align-items:center;
        li{
            width:calc(~"50% - 1px");;
            height: 5.5rem;
            display:flex;
            justify-content:center;
            align-items:center;
            flex-direction:column;
            h3{
                font-size: 1.1rem;
            }
            p{
                font-size: 1.2rem;
                margin-top: 0.5rem;
                color:#e05367;
            }
        }

    }



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

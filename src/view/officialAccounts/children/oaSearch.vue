<template>
    <div class="frameContentrPlus">
        <div class="searchInfoBox">
           <div class="searchInfo">
               <img src="./../../../assets/images/official/search2.png">
               <input type="text" @change="searchInfo()" autofocus="autofocus"/>
           </div>
           <!-- <span>取消</span> -->
            <router-link :to="{path: 'officialAccountsHome'}">取消</router-link>

        </div>
        <div class="searchConBox">
            <div class="searchHistory">
                <span>历史记录</span>
                <img src="./../../../assets/images/official/delete.png"/>
            </div>
            <ul class="officalList">
                <li>
                    <router-link :to="{path: '/officialAccounts/oaSearch'}">
                        <img src="./../../../assets/images/personCenter/addpiaohao.png" >
                        <span>添加票号</span>
                    </router-link>
                </li>
            </ul>
            <p class="followText">已关注</p>
            <ul class="officalList">
                <li>
                    <router-link :to="{path: '/officialAccounts/oaSearch'}">
                        <img src="./../../../assets/images/personCenter/addpiaohao.png">
                        <span>老林叔</span>
                    </router-link>
                </li>
            </ul>
            <div class="noData">没有找到数据</div>
        </div>
        
    </div>
</template>

<script>
    import frameFooter from './../../../components/footer/footer'
    export default {
        name: 'oaSearch',
        components: {
            frameFooter
        },
        methods:{
            searchInfo:function(){
                console.log('test');            
            }
        }
    }
</script>

<style lang="less" scoped>
    @import "./../../../assets/less/model.less";
    .searchInfoBox{
        padding:0px 0.8rem;
        width: 100%;
        height: 3rem;
        display:flex;
        justify-content:space-between;
        align-items:center;
        .searchInfo{
            width:88%;
            height:2rem;
            background:#fff;
            display:flex;
            justify-content:flex-start;
            align-items:center;
            padding-left: 0.2rem;
            border-radius: 0.2rem;
            img{
                width:2rem;
                height:2rem;
            }
            input{
                width:calc(~"100% - 2.3rem");
                height:100%;
                border: none;
                font-size: 1rem;
            }
        }
        a{
            color: #bdbdbd;
        }
    }
    .searchConBox{
        width:100%;
        height:calc(~"100% - 3rem");
        background:#fff;
        .searchHistory{
            display:flex;
            justify-content:space-between;
            align-items:center;
            padding:0.3rem 0.8rem;
            span{

            }
            img{
                width:1.4rem;
                height:1.4rem;
            }
        }
    }
    .followText{
        padding: 0.6rem 0.9rem;
    }
    .officalList{
        width:100%;
        border-top:1px solid #f2f2f2;
        // padding: 0px 0.5rem;
        li{
            width:100%;
            height:4.5rem;
            border-bottom:1px solid #f2f2f2;
            background:#fff;
            a{
                width:100%;
                height:100%;
                display:flex;
                justify-content:flex-start;
                align-items:center;
                padding-left: 0.8rem;
                img{
                    width:3rem;
                    height:3rem;
                    border-radius: 50%;
                }
                span{
                    padding-left: 1rem;
                    color:#757575;
                    font-size: 1.15rem;
                }
            }
        }
    }
    .noData{
        padding-left: 1rem;
    }
</style>

<template>
    <div class="frameContentr">
        <div class="searchBox">
            <router-link :to="{path: '/officialAccounts/oaSearch'}">
                <img src="./../../assets/images/official/search2.png">
                <span>搜索</span>
            </router-link>
        </div>
        <ul class="officalList">
            <li>
                <router-link :to="{path: '/officialAccounts/officialWindow'}">
                    <img src="./../../assets/images/personCenter/addpiaohao.png">
                    <span>添加票号</span>
                </router-link>
            </li>
        </ul>
        <p class="followText">已关注</p>
        <ul class="officalList">
            <li>
                <router-link :to="{path: '/officialAccounts/officialDetail'}">
                    <img src="./../../assets/images/personCenter/addpiaohao.png">
                    <span>老林叔</span>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    import frameFooter from './../../components/footer/footer'
    export default {
        name: 'officialAccounts',
        components: {
            frameFooter
        }
    }
</script>

<style lang="less" scoped>
    @import "./../../assets/less/model.less";
    .searchBox{
        width: 95%;
        height: 2.3rem;
        border:1px solid #ccc;
        border-radius: 0.2rem;
        background:#fff;
        margin: 0.6rem auto;
        a{
            width: 100%;
            height: 100%;
            display:flex;
            justify-content:center;
            align-items:center;
            img{
                width:1.7rem;
                height:1.7rem;
            }
            span{
                color: #bdbdbd;
            }
        }
    }
    .officalList{
        width:100%;
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
    .followText{
        padding: 0.6rem 0.9rem;
    }
    
</style>

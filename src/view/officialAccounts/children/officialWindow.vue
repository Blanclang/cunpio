<template>
    <div class="frameContentrPlus">
        <div class="officialWindowTit">
            <div class="addressBox">
                <img src="./../../../assets/images/official/parit.png"/>
                <span>深圳</span>
            </div>
            <div class="filterListBox">
                <scroller lock-y scrollbar-x>
                    <ul class="filterList">
                        <li>全部</li>
                        <li>休闲娱乐</li>
                        <li>运动健身</li>
                        <li>爱车</li>
                        <li>培训培训</li>
                        <li>购物</li>
                    </ul>
                </scroller>    
            </div>
            <div class="filterSearch">
                <img src="./../../../assets/images/official/search.png"/>
            </div>
        </div>
        <div class="officialWindowBox">
            <ul class="officialWindowList">
                <li>
                    <img src="./../../../assets/images/official/store1.png">
                    <div class="storeSelfInfo">
                        <div class="storeSelTit"><h3>上海老栈</h3><span>冲100送20</span></div>
                        <ul>
                            <li>本帮菜</li>
                            <p></p>
                            <li>科技园</li>
                            <p></p>
                            <li>0.42km</li>
                        </ul>
                    </div>
                </li>
                <li>
                    <img src="./../../../assets/images/official/store1.png">
                    <div class="storeSelfInfo">
                        <div class="storeSelTit"><h3>上海老栈</h3><span>冲100送20</span></div>
                        <ul>
                            <li>本帮菜</li>
                            <p></p>
                            <li>科技园</li>
                            <p></p>
                            <li>0.42km</li>
                        </ul>
                    </div>
                </li>
                <li>
                    <img src="./../../../assets/images/official/store1.png">
                    <div class="storeSelfInfo">
                        <div class="storeSelTit"><h3>上海老栈</h3><span>冲100送20</span></div>
                        <ul>
                            <li>本帮菜</li>
                            <p></p>
                            <li>科技园</li>
                            <p></p>
                            <li>0.42km</li>
                        </ul>
                    </div>
                </li>
                <li>
                    <img src="./../../../assets/images/official/store1.png">
                    <div class="storeSelfInfo">
                        <div class="storeSelTit"><h3>上海老栈</h3><span>冲100送20</span></div>
                        <ul>
                            <li>本帮菜</li>
                            <p></p>
                            <li>科技园</li>
                            <p></p>
                            <li>0.42km</li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
        
    </div>
</template>

<script>
    import frameFooter from './../../../components/footer/footer'
    import { Scroller, Divider, Spinner, XButton, Group, Cell, LoadMore } from 'vux'
    export default {
        name: 'officialWindow',
        components: {
            frameFooter,
            Scroller,
            Divider,
            Spinner,
            XButton,
            Group,
            Cell,
            LoadMore
        },
        methods:{

        }
    }
</script>

<style lang="less" scoped>
    @import "./../../../assets/less/model.less";
    .officialWindowTit{
        width: 100%;
        height:4rem;
        background:#fff;
        display:flex;
        justify-content:center;
        align-items:center;
        border-bottom: 1px solid #ccc;
        .addressBox{
            display:flex;
            justify-content:center;
            align-items:center;
            width:4rem;
            height:2.6rem;
            img{
                width: 0.9rem;
                height:1.35rem;
            }
            span{
                padding-left: 0.2rem;
                font-size: 0.95rem;
            }
        }
        .filterListBox{
            width:calc(~"100% - 7rem");
            height:2.6rem;
            padding-top: 0.4rem;
            // display:flex;
            // justify-content:flex-start;
            // align-items:center;
            // overflow: hidden;
            // overflow-x: scroll;
            .filterList{
                width:31.5rem;
                height:100%;
                display:flex;
                justify-content:flex-start;
                align-items:center;
                li{
                    width:5rem;
                    height:1.9rem;
                    line-height: 1.9rem;
                    text-align: center;
                    border:1px solid #ccc;
                    margin-right: 0.3rem;
                    border-radius: 0.2rem;
                }
                li:last-child{
                    margin-right: 0rem;
                }
            }
        }
        
        .filterSearch{
            display:flex;
            justify-content:center;
            align-items:center;
            width:3rem;
            height:2.6rem;
            img{
                width:1.4rem;
                height:1.4rem;
            }
        }

    }
    .officialWindowBox{
        width: 100%;
        height:calc(~"100% - 4rem");
        background:#fff;
        overflow:hidden;
        overflow-y: auto;
        .officialWindowList{
            width:100%;
            padding:0rem 0.7rem;
            >li{
                padding:0.5rem 0;
                width:100%;
                height:14rem;
                border-bottom:1px solid #ccc;
                img{
                    width:100%;
                    height:9.5rem;
                }
                .storeSelfInfo{
                    width:100%;
                    height:3.5rem;
                    .storeSelTit{
                        width:100%;
                        display:flex;
                        justify-content:space-between;
                        align-items:center;
                        margin-top: 0.2rem;
                        h3{
                            font-size: 1.2rem;
                        }
                        span{
                            font-size: 1.1rem;
                        }
                    }
                    ul{
                        width:100%;
                        display:flex;
                        justify-content:flex-start;
                        align-items:center;
                        margin-top: 0.3rem;
                        color:#bdbdbd;
                        li{
                            height:1.2rem;
                            line-height: 1.2rem;
                        }
                        p{
                            height:0.8rem;
                            margin: 0px 1rem;
                            border-right: 1px solid #ccc;
                        }
                    }

                }
            }
            >li:first-child{
                padding-top: 0.2rem;
            }
        }
    }
    .storeTit{
        width: 100%;
        height:4.5rem;
        display:flex;
        justify-content:space-between;
        align-items:center;
        padding:0rem 0.5rem;
        background:#fff;
        border-bottom: 1px solid #f2f2f2;
        h3{
            font-size: 1.4rem;
        }
        img{
            width: 1.6rem;
            height:1.6rem;
        }
    }
    .btnBox{
        width:100%;
        height:3rem;
        background:#ec6464;
        color:#fff;
        display:flex;
        justify-content:space-between;
        align-items:center;
        font-size: 1.1rem;
        a{
            width:50%;
            height:100%;
            display:flex;
            justify-content:center;
            align-items:center;
        }
        p{
            height:1.5rem;
            border-right: 1px solid #fff;
        }
    }
</style>

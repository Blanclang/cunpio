<template>
    <div class="frameContentrPlus">
        <div class="sliderImgBox">
            <!-- <swiper :list="demo03_list" auto dots-class="custom-bottom" dots-position="center"></swiper> -->
            <swiper  loop auto :list="demo07_list" height="100%" class="sliderImg" dots-position="center" ></swiper>
            <!-- <p>current index: {{demo07_index}}</p> -->
            <!-- <swiper :aspect-ratio="500/800">
                <swiper-item class="swiper-demo-img" v-for="(item, index) in demo04_list" :key="index"><img :src="item"></swiper-item>
            </swiper> -->
        </div>
        <div class="storeTit">
            <h3>聚力100(南山店)</h3>
            <img src="./../../../assets/images/official/phone.png"/>
        </div>
        <ul class="storeInfo">
            <li>
                <a>
                    <div>
                        <img src="./../../../assets/images/official/fh.png"/>
                        <h3>累计分红 :</h3>
                        <span>3735元</span>
                    </div>
                    <img src="./../../../assets/images/official/next.png"/>
                </a>
            </li>
            <li>
                <a>
                    <div>
                        <img src="./../../../assets/images/official/cz.png"/>
                        <h3>充值笔数 :</h3>
                        <span>373笔</span>
                    </div>
                    <img src="./../../../assets/images/official/next.png"/>
                </a>
            </li>
            <li>
                <a>
                    <div>
                        <img src="./../../../assets/images/official/md.png"/>
                        <h3>适应门店</h3>
                    </div>
                    <img src="./../../../assets/images/official/next.png"/>
                </a>
            </li>
            <li>
                <a>
                    <div>
                        <img src="./../../../assets/images/official/hd.png"/>
                        <h3>活动消息</h3>
                    </div>
                    <img src="./../../../assets/images/official/next.png"/>
                </a>
            </li>
        </ul>
        <div class="btnBox">
            <a>充值</a>
            <p></p>
            <a>买单</a>
        </div>
        
    </div>
</template>

<script>
    import frameFooter from './../../../components/footer/footer'
    import { Swiper, GroupTitle, SwiperItem, XButton, Divider } from 'vux'
    const baseList = [{
        url: 'https://www.baidu.com',
        img: 'https://static.vux.li/demo/1.jpg',
        // title: '送你一朵fua'
    }, 
    {
        url: 'https://www.qq.com',
        img: 'https://static.vux.li/demo/2.jpg',
        // title: '送你一辆车'
    }, 
    {
        url: 'https://www.sina.com',
        img: 'https://static.vux.li/demo/3.jpg',
        // title: '送你一次旅行'
    }]
    export default {
        name: 'officialDetail',
        data(){
            return{
                demo07_list: baseList,
            }
        },
        components: {
            frameFooter,
            Swiper,
            SwiperItem,
            GroupTitle,
            XButton,
            Divider
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
    .sliderImgBox{
        width: 100%;
        height: 35%;
        .sliderImg{
            width: 100%;
            height:100%;
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
    .storeInfo{
        width:100%;
        height:calc(~"65% - 7.5rem");
        background:#fff;
        li{
            width:100%;
            padding:0rem 0.3rem;
            a{
                display:flex;
                justify-content:space-between;
                align-items:center;
                width:100%;
                height:3.5rem;
                border-bottom: 1px solid #f2f2f2;
                div{
                    display:flex;
                    justify-content:flext-start;
                    align-items:center;
                    img{
                        width: 1.6rem;
                        height:1.6rem;
                    }
                    h3{
                        padding-left: 0.3rem;
                    }
                    span{
                        padding-left: 0.3rem;
                    }
                }
                >img{
                    width: 1.2rem;
                    height:1.2rem;
                }
            }
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

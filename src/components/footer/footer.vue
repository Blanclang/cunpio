<template>
    <ul class="footerBox">
        <!-- <li>
            <router-link :to="{path: '/home'}" :class="{footerActive:idx == 1}">
                <i class="footer-icon1"></i>
            </router-link>
        </li> -->
        <li v-for="(item,index) in footData">
            <router-link :to="{path: item.path}" :class="{footerActive:item.idx == $store.state.footerIcon}">
                <i :class="item.style"></i>
            </router-link>
        </li>
        <!-- <li>
            <router-link :to="{path: '/officialAccounts'}">
                <i class="footer-icon2"></i>
            </router-link>    
        </li>
        <li>
            <router-link :to="{path: '/message'}">
                <i class="footer-icon3"></i>
            </router-link>    
        </li>
        <li>
            <router-link :to="{path: '/personal'}">
                <i class="footer-icon4"></i>
            </router-link>    
        </li> -->
    </ul>
</template>

<script>
export default {
    name: 'footer',
    props:['footData'],
    mounted(){
        // console.log(this.footData);
    },
    data () {
        return {
            footerData:this.footData,
            
        }
    },
    methods:{

    }
}
</script>

<style lang="less" scoped>
    .footerBox{
        width: 100%;
        height:100%;
        display:flex;
        justify-content:flex-start;
        li{
            width:33.33%;
            display:flex;
            justify-content:center;
            align-items:center;
            img{
                width:1.6rem;
                height:1.6rem;
            }
            i{
                width:1.6rem;
                height:1.6rem;
                display:block;
            }
            .footerIcon (@n) when (@n < 5) {
                i.footer-icon@{n}{
                    background:url("./../../assets/images/footer_icon/footer0@{n}-a.png") no-repeat;
                    background-size:100%;
                }
                //循环调用自身
                .footerIcon((@n + 1));
            }
            .footerIcon(1) ;
            //点中样式
            .activeFun (@n) when (@n < 5) {
                .footerActive{
                    i.footer-icon@{n}{
                        background:url("./../../assets/images/footer_icon/footer0@{n}-b.png") no-repeat;
                        background-size:100%;
                    }
                }
                //循环调用自身
                .activeFun((@n + 1));
            }
            .activeFun(1) ;

        }
    }
    
</style>

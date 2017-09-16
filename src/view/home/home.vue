<template>
    <div class="frameContentr">
        <div class="homeSty">
            <ul>
                <li>
                    <img src="./../../assets/images/home/store1.png">
                    <h3>上海老栈</h3>
                </li>
                <li>
                    <img src="./../../assets/images/home/store1.png">
                    <h3>老林叔美食</h3>
                </li>
                <li>
                    <img src="./../../assets/images/home/store1.png">
                    <h3>天天美食</h3>
                </li>
            </ul>
           <!--  <swipeout>
                <swipeout-item @on-close="handleEvents('on-close')" @on-open="handleEvents('on-open')" transition-mode="follow">
                    <div slot="right-menu">
                      <swipeout-button @click.native="onButtonClick('fav')" type="primary">{{('Yes')}}</swipeout-button>
                      <swipeout-button @click.native="onButtonClick('delete')" type="warn">{{('Right')}}</swipeout-button>
                    </div>
                    <div slot="content" class="demo-content vux-1px-t">
                    {{$t('JavaScript is the best language')}}
                    </div>
              </swipeout-item>
            </swipeout> -->
        </div>
    </div>
</template>

<script>
    import frameFooter from './../../components/footer/footer'
    import { GroupTitle, Swipeout, SwipeoutItem, SwipeoutButton, XButton } from 'vux'
    export default {
        name: 'home',
        components: {
            frameFooter,
            GroupTitle,
            Swipeout,
            SwipeoutItem,
            SwipeoutButton,
            XButton
        },
        data () {
            return {
                disabled: false
            }
        },
        mounted(){
            console.log(this.$store.state.title);
            console.log(this.$store.state.footerShow);
        },
         methods: {
            onButtonClick (type) {
                alert('on button click ' + type)
            },
            handleEvents (type) {
                console.log('event: ', type)
            }
        },
    }
</script>

<style lang="less" scoped>
    @import "./../../assets/less/model.less";
    .homeSty{
        width: 100%;
        height: 100%;
        background:#fff;
        padding: 0.5rem 0.8rem;
        overflow: hidden;
        overflow-y: auto;
        ul{
            width:100%;
            // border:1px solid pink;
            li{
                width:100%;
                height:6.5rem;
                display:flex;
                justify-content:flex-start;
                align-items:center;
                border:1px solid #f2f2f2;
                box-shadow: -4px 7px 8px 2px rgba(0, 0, 0, 0.1);
                border-radius: 0.5rem;
                margin-top: 1rem;
                padding-left: 0.8rem;

                img{
                    width:5rem;
                    height:5rem;
                    border-radius: 50%;
                }
                h3{
                    padding-left: 1rem;
                    font-size: 1.2rem;
                }
            }

        }
    }
    .demo-content {
        padding: 10px 10px;
    }
</style>

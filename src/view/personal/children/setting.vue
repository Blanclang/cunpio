<template>
    <div>
        <router-link :to="{path: 'setting'}">设置</router-link>

        <router-link :to="{path: 'myCoupons'}">我的券包</router-link>
        设置
        <group>
          <cell title="title" value="value"></cell>
        </group>
        <div @click="popupFun()">
            你好
        </div>
    </div>
</template>

<script>
import { Confirm ,Group, Cell } from 'vux'
export default {
    name: 'home',
    components: {
        Group,
        Cell,
        Confirm
    },
    methods:{
        popupFun:function(){
            const _this = this;
            this.$vux.confirm.show({
                // 组件除show外的属性
                title: 'Title',
                content: 'Content',
                'confirm-text':'s',
                onShow () {
                    console.log('plugin show')
                },
                onHide () {
                    console.log('plugin hide')
                },
                onCancel () {
                    console.log('plugin onCancel')
                },
                onConfirm () {
                    console.log('plugin onConfirm')
                }
            })
        }
    }
}
</script>

<style>
    
</style>

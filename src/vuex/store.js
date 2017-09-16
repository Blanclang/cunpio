//数据中心
import Vue from 'vue'

//将Vuex 的逻辑全部index.js main.js里没有vuex代码
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex);

//状态集合 全局管理的引起界面状态改变的值
const state = {
    totalTime:0,
    list:[],
    title:'',
    footerShow:false,
    footerIcon:0
}

export default new Vuex.Store({
    state,//状态 树 isShow v-if
    mutations,//改变 IS_DIV_SHOW IS_DIV_HIDE
    actions,//动作 组件不能直接改变state，改变谁？
})



















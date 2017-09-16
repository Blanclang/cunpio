import * as types from './mutation-types'

export default{
    addTotalTime({commit},time){
        // 类似 提交
        // ajax区域
        commit(types.ADD_TOTAL_TIME,time)
    },
    deletePlan({commit},plan){
        commit(types.DELETE_PLAN,plan)
    },
    getRouterInfo({commit},info){
        // console.log(info);
        commit(types.ROUTER_INIO,info)
    }

}


















// 集合变化  状态改变的集合
import * as types from './mutation-types'

export default{
    
    [types.ADD_TOTAL_TIME](state,time){
        state.totalTime = state.totalTime + parseInt(time);
    },
    [types.DELETE_PLAN](state,idx){
        state.list.splice(idx,1);
    },
    [types.ROUTER_INIO](state,info){
        state.title = info.title;
        state.footerShow= info.footerShow;
        state.footerIcon= info.footerIcon;
        // console.log(state.footerIcon);
    }

}
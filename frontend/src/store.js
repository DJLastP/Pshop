import { createStore } from 'vuex'

const store = createStore({
    state(){
        return {
            test : 'test',
            itemName: [],
            itemPrices: [],
            itemCnt: 0,
            itemStock: [],
            isLogin: false,
            userInfo: null,
        }
    },
    mutations :{
        setTest(state){
          state.test = 'test2'
        },
    },
    actions : {

    }
})

export default store
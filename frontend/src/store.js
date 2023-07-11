import { createStore } from 'vuex'
import axios from "axios";
import router from './router';

const store = createStore({
    state(){
        return {
            test : 'test',
            itemName: [],
            itemPrices: [],
            itemCnt: 0,
            itemStock: [],
            isLogin: false,
            memRole: null,
        }
    },
    mutations :{
        setTest(state){
          state.test = 'test2'
        },
        setMemRole(state, payload){
            payload == 'USER' ? state.memRole = 0 : state.memRole = 1;
        }
    },
    actions : {
        login(context, payload ) {
           axios.post('/api/member/login', payload).then(response => {
           const accessToken = response.data.accessToken;
           const refreshToken = response.data.refreshToken;
           localStorage.setItem('accessToken', accessToken);
           localStorage.setItem('refreshToken', refreshToken);
           context.commit('setMemRole', response.data.memRole);

           //state.memRole = response.data.memRole;
        //    console.log(response.data.memRole);
        //    console.log(state.memRole);
           router.push('/itemList')
        })
        .catch(() => {
            alert('로그인 실패');
        });
        },
        async access(context) {
            await axios.get('/api/member/access').then(result => {
                context.commit('setMemRole', result.data.memRole);
                console.log(result);
            });
            //.catch(console.log('토큰 재발행 실패'));
        },
        join(state, payload){
            axios.post('/api/member/join', payload).then(result =>{
                console.log(result);
            });
        },
    }
})

export default store
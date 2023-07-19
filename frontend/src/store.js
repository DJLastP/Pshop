import { createStore } from 'vuex'
import axios from "axios";
import router from './router';

const store = createStore({
    state(){
        return {
            isLogin: false,
            memRole: 0,
        }
    },
    mutations :{
        setMemRole(state, payload){
            payload === 'USER' ? state.memRole = 0 : state.memRole = 1;
        },
        setLogin(state){
            state.isLogin = true;
        },
        setLogout(state){
            state.isLogin = false;
        },
        logout(){
        },
        setNavbarOpen(state, isOpen) {
            state.isNavbarOpen = isOpen;
        },
    },
    actions : {
        async login(context, payload ) {
           await axios.post('/api/member/login', payload).then(response => {
           localStorage.setItem('accessToken', response.data.accessToken);
           localStorage.setItem('refreshToken', response.data.refreshToken);
           context.commit('setMemRole', response.data.memRole);
           context.commit('setLogin');
           router.push('/')
        })
        .catch(() => {
            alert('로그인 실패');
        });
        },
        async access(context) {
            await axios.get('/api/member/access').then(result => {
                context.commit('setMemRole', result.data.memRole);
            })
            .catch(()=>{
                console.log('엑세스토큰실패')
            });
        },
        async join(state, payload){
            await axios.post('/api/member/join', payload).then(result =>{
                console.log(result);
            });
        },
        async logout(context){
            await axios.get('/api/member/logout').then(() => {
                    alert('로그아웃 완료');
                    localStorage.clear();
                    context.commit('setLogout');
                    router.push('/');
                }
            );
        },
    }
})

export default store
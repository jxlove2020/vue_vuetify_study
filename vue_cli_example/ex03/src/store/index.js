import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// Vuex 의 store 중앙에 state, mustations(setters), getter 정의
export default new Vuex.Store({
  // sTitle값을 상탯값으로 정의
  state: {
    sTitle: '',
  },
  // mutations 는 getters와 대칭되는 setters 역할 설정
  mutations: {
    // 매개 변수로 전달받은 값을 store 에 저장
    fnSetData: function (state, payload) {
      return (state.sTitle = payload);
    },
  },
  getters: {
    // store의 상탯값 반환
    fnGetData(state) {
      return state.sTitle;
    },
  },
});
